import requests
from apps.BASE.views import AppAPIView
from datetime import datetime, timedelta

# Constants
OZ_TO_GRAM = 31.1035
GRAM_TO_KG = 1000
API_URL = "https://data-asg.goldprice.org/dbXRates/INR"


# Fetch gold and silver prices in INR
def fetch_prices():
    def fetch_gold_silver_prices():
        """
        Fetch today's gold and silver prices in INR and calculate gram price, 8-gram price, and 1 kg price.
        """
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
        }
        try:
            # Fetch data from the API with headers
            response = requests.get(API_URL, headers=headers)
            response.raise_for_status()
            data = response.json()

            # Check if the response contains the expected data
            if "items" not in data or not data["items"]:
                print("No data available.")
                return None

            for item in data["items"]:
                if item["curr"] == "INR":
                    gold_price_oz = item["xauPrice"]
                    silver_price_oz = item["xagPrice"]

                    gold_price_g = gold_price_oz / OZ_TO_GRAM
                    gold_price_kg = gold_price_g * GRAM_TO_KG
                    gold_price_8g = gold_price_g * 8

                    silver_price_g = silver_price_oz / OZ_TO_GRAM
                    silver_price_kg = silver_price_g * GRAM_TO_KG
                    silver_price_8g = silver_price_g * 8

                    # Format the result
                    result = {
                        "currency": "INR",
                        "gold": {
                            "Price_Per_Gram": round(gold_price_g, 2),
                            "Price_Per_8_Gram": round(gold_price_8g, 2),
                            "Price_Per_Kilogram": round(gold_price_kg, 2),
                        },
                        "silver": {
                            "Price_Per_Gram": round(silver_price_g, 2),
                            "Price_Per_8_Gram": round(silver_price_8g, 2),
                            "Price_Per_Kilogram": round(silver_price_kg, 2),
                        },
                    }
                    return result

            print("No data found for INR.")
            return None

        except requests.RequestException as e:
            print(f"Error fetching data: {e}")
            return None

    # Fetch and return the prices
    prices = fetch_gold_silver_prices()
    return prices


class GoldRate(AppAPIView):
    def get(self, request, *args, **kwargs):
        prices = fetch_prices()
        rate = prices["gold"]["Price_Per_Gram"]
        return self.send_response(data=rate)


def fetch_last_30_days_gold_prices():
    """
    Fetch gold prices in INR for the last 30 days and return a list of prices per gram.
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
    }
    today = datetime.today()
    last_30_days = [today - timedelta(days=i) for i in range(30)]
    gold_prices = []

    try:
        for date in last_30_days:
            # Replace this with API-specific date query parameter if supported
            formatted_date = date.strftime("%Y-%m-%d")
            response = requests.get(f"{API_URL}?date={formatted_date}", headers=headers)
            response.raise_for_status()
            data = response.json()

            # Ensure expected data structure
            if "items" not in data or not data["items"]:
                print(f"No data available for {formatted_date}.")
                continue

            for item in data["items"]:
                if item["curr"] == "INR":
                    gold_price_oz = item["xauPrice"]
                    gold_price_g = gold_price_oz / OZ_TO_GRAM

                    gold_prices.append(
                        {
                            "date": formatted_date,
                            "gold_price_per_gram": round(gold_price_g, 2),
                        }
                    )
                    break

        return gold_prices

    except requests.RequestException as e:
        print(f"Error fetching data: {e}")
        return None


# Fetch and print last 30 days' gold prices
# gold_prices_last_30_days = fetch_last_30_days_gold_prices()
# if gold_prices_last_30_days:
#     for price in gold_prices_last_30_days:
#         print(price)


from datetime import datetime, timedelta
import requests

# Constants
OZ_TO_GRAM = 31.1035
API_URL = "https://data-asg.goldprice.org/dbXRates/INR"


def fetch_gold_silver_prices(start_date, end_date):
    """
    Fetch gold and silver prices in INR per gram between the start_date and end_date.
    """
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
    }
    date_range = [
        start_date + timedelta(days=i) for i in range((end_date - start_date).days + 1)
    ]
    prices = []

    for date in date_range:
        formatted_date = date.strftime("%Y-%m-%d")
        response = requests.get(f"{API_URL}?date={formatted_date}", headers=headers)
        try:
            response.raise_for_status()
            data = response.json()

            if "items" in data and data["items"]:
                for item in data["items"]:
                    if item["curr"] == "INR":
                        gold_price_oz = item["xauPrice"]
                        silver_price_oz = item["xagPrice"]

                        gold_price_g = gold_price_oz / OZ_TO_GRAM
                        silver_price_g = silver_price_oz / OZ_TO_GRAM

                        prices.append(
                            {
                                "date": date.strftime("%d/%m/%Y"),
                                "gold_price_per_gram": round(gold_price_g, 2),
                                "silver_price_per_gram": round(silver_price_g, 2),
                            }
                        )
                        break
        except requests.RequestException as e:
            print(f"Error fetching data for {formatted_date}: {e}")

    return prices


class LastMonthRates(AppAPIView):
    def get(self, request, *args, **kwargs):
        """
        API to fetch gold and silver prices per gram for the last 30 days.
        """
        try:
            days = 7
            end_date = datetime.today()
            start_date = end_date - timedelta(days=days - 1)

            raw_prices = fetch_gold_silver_prices(start_date, end_date)

            # Transform data into the desired format
            gold_prices = [
                {"date": entry["date"], "price": entry["gold_price_per_gram"]}
                for entry in raw_prices
            ]
            silver_prices = [
                {"date": entry["date"], "price": entry["silver_price_per_gram"]}
                for entry in raw_prices
            ]

            response_data = {
                "data": {"gold_price": gold_prices, "silver_price": silver_prices}
            }

            return self.send_response(response_data)

        except Exception as e:
            return self.send_response({"error": str(e)})
