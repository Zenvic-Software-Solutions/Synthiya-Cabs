from django.core.management.base import BaseCommand
from django.utils.timezone import now
from apps.CMS.models import SchemeSubscription, ShopSubscription

class Command(BaseCommand):
    help = "Check and deactivate expired subscriptions"

    def handle(self, *args, **kwargs):
        current_time = now()

        # Deactivate expired SchemeSubscriptions
        scheme_subscriptions = SchemeSubscription.objects.filter(
            is_active=True, expires_in__lte=current_time
        )
        for subscription in scheme_subscriptions:
            subscription.is_active = False
            subscription.save()
            self.stdout.write(
                f"Deactivated SchemeSubscription: {subscription.subscription_id}"
            )

        # Deactivate expired ShopSubscriptions
        shop_subscriptions = ShopSubscription.objects.filter(
            is_active=True, expires_in__lte=current_time
        )
        for subscription in shop_subscriptions:
            subscription.is_active = False
            subscription.save()
            self.stdout.write(
                f"Deactivated ShopSubscription for shop: {subscription.shop.id}"
            )

        self.stdout.write("Expired subscription check complete.")
