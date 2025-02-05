import razorpay
from django.conf import settings
from django.core.exceptions import ImproperlyConfigured


def get_razorpay_client() -> razorpay.Client:
    """
    Initializes and returns a Razorpay client using API keys from Django settings.
    """
    # RZP_KEY_ID = getattr(settings, "RAZORPAY_KEY_ID", None)
    # RZP_SECRET_KEY = getattr(settings, "RAZORPAY_SECRET_KEY", None)
    RZP_KEY_ID = getattr(settings, "RAZORPAY_KEY_ID", "rzp_test_tL79CbAu6R3Wbl")
    RZP_SECRET_KEY = getattr(
        settings, "RAZORPAY_SECRET_KEY", "elqOp72Q63cld3cpoPtINKnv"
    )

    # Ensure both keys are provided
    if not RZP_KEY_ID or not RZP_SECRET_KEY:
        raise ImproperlyConfigured(
            "Razorpay API keys are missing. Ensure 'RAZORPAY_KEY_ID' and 'RAZORPAY_SECRET_KEY' are set in settings."
        )

    # Initialize and return the Razorpay client
    return razorpay.Client(auth=(RZP_KEY_ID, RZP_SECRET_KEY))


def is_razorpay_payment_order_successful(order_id: str) -> bool:
    """
    Checks whether a Razorpay payment order is successful.

    :param order_id: Razorpay order ID to check.
    :return: True if the order is paid, False otherwise.
    """
    try:
        client = get_razorpay_client()
        order_response = client.order.fetch(order_id=order_id)
        return order_response.get("status") == "paid"
    except razorpay.errors.BadRequestError:
        raise ValueError(f"Invalid Razorpay Order ID: {order_id}")
    except razorpay.errors.RazorpayError as e:
        raise RuntimeError(f"Razorpay API error: {e}")
    except Exception as e:
        raise RuntimeError(f"Error fetching Razorpay order: {e}")


def create_razorpay_payment_order(amount: int, currency: str = "INR") -> dict:
    """
    Creates a Razorpay payment order.

    :param amount: Amount in the smallest currency unit (e.g., paise for INR).
    :param currency: Currency code, default is "INR".
    :return: Razorpay order details.
    """
    try:
        client = get_razorpay_client()
        return client.order.create(
            data={
                "amount": int(amount),
                "currency": currency,
            }
        )
    except razorpay.errors.RazorpayError as e:
        raise RuntimeError(f"Razorpay API error while creating order: {e}")
    except Exception as e:
        raise RuntimeError(f"Unexpected error while creating Razorpay order: {e}")


def verify_razorpay_payment_completion(
    razorpay_order_id: str, razorpay_payment_id: str, razorpay_signature: str
) -> bool:
    """
    Verifies Razorpay payment signature for authenticity.

    :param razorpay_order_id: Razorpay order ID.
    :param razorpay_payment_id: Razorpay payment ID.
    :param razorpay_signature: Razorpay payment signature.
    :return: True if the signature is valid, raises an error otherwise.
    """
    try:
        params_dict = {
            "razorpay_order_id": razorpay_order_id,
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_signature": razorpay_signature,
        }
        client = get_razorpay_client()
        client.utility.verify_payment_signature(params_dict)
        return True
    except razorpay.errors.SignatureVerificationError as e:
        raise ValueError(f"Razorpay payment signature verification failed: {e}")
    except Exception as e:
        raise RuntimeError(f"Error verifying Razorpay payment signature: {e}")
