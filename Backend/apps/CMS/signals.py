import logging
from django.core.exceptions import ObjectDoesNotExist
from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save
from apps.CMS.models import (
    Log,
    Category,
    Scheme,
    ProductPayment,
    SchemePayment,
    Product,
)

logger = logging.getLogger(__name__)


def create_logs(model, object_id, action, message):
    try:
        Log.objects.create(
            model_name=model.__name__,
            object_id=object_id,
            action=action,
            message=message,
        )
        print(f"Log created: {model.__name__} - {action}")
    except Exception as e:
        print(f"Error creating log for {model.__name__}: {str(e)}")


@receiver(pre_save, sender=Category)
@receiver(pre_save, sender=Scheme)
@receiver(pre_save, sender=ProductPayment)
@receiver(pre_save, sender=SchemePayment)
@receiver(pre_save, sender=Product)
def pre_save_handler(sender, instance, **kwargs):
    try:
        if instance.id:
            instance._original_instance = sender.objects.get(id=instance.id)
        else:
            instance._original_instance = None
    except ObjectDoesNotExist:
        instance._original_instance = None


@receiver(post_save, sender=Category)
def post_save_category_handler(sender, instance, created, **kwargs):
    try:
        if created:
            create_logs(
                model=sender,
                object_id=instance.id,
                action="create",
                message=f"New Category created with identity'{instance.identity}'",
            )
        else:
            original_instance = getattr(instance, "_original_instance", None)
            changes = []
            if original_instance.shop != instance.shop:
                changes.append(
                    f"User changed from {original_instance.shop.identity if original_instance.shop else 'N/A'} to {instance.shop.identity if instance.shop else 'N/A'} by {instance.modified_by.created_by}"
                )
            if original_instance:
                changes = []
                if original_instance.identity != instance.identity:
                    if original_instance.identity != instance.identity:
                        changes.append(
                            f"Identity changed from { original_instance.identity} to {instance.identity} by { instance.modified_by.created_by}"
                        )
                if changes:
                    create_logs(
                        model=sender,
                        object_id=instance.id,
                        action="update",
                        message=f"{sender.__name__} updated: " + ",".join(changes),
                    )
                else:
                    logger.info(
                        f"No significant changes detected for {sender.__name__} with ID {instance.id}."
                    )
        if hasattr(instance, "_original_instance"):
            delattr(instance, "_original_instance")

    except Exception as e:
        logger.error(f"Error in post_save signal for {sender.__name__}: {str(e)}")


@receiver(post_save, sender=Product)
def post_save_product_handler(sender, instance, created, **kwargs):
    try:
        if created:
            create_logs(
                model=sender,
                object_id=instance.id,
                action="create",
                message=f"New Product created with identity '{instance.identity}'",
            )
        else:
            original_instance = getattr(instance, "original_instance", None)
            if original_instance:
                changes = []
                if (
                    original_instance.identity != instance.identity
                    or original_instance.image != instance.image
                    or original_instance.wastage != instance.wastage
                    or original_instance.work_cost != instance.work_cost
                    or original_instance.size != instance.size
                ):
                    if original_instance.identity != instance.identity:
                        changes.append(
                            f"Identity Changed from {original_instance.identity} to {instance.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.image != instance.image:
                        changes.append(
                            f"Image Changed from {original_instance.image} to {instance.image} by {instance.modified_by.created_by}"
                        )
                    if original_instance.wastage != instance.wastage:
                        changes.append(
                            f"Wastage Changed from {original_instance.wastage} to {instance.wastage} by {instance.modified_by.created_by}"
                        )
                    if original_instance.work_cost != instance.work_cost:
                        changes.append(
                            f"Work Cost Changed from {original_instance.work_cost} to {instance.work_cost} by {instance.modified_by.created_by}"
                        )
                    if original_instance.size != instance.size:
                        changes.append(
                            f"Size Changes from {original_instance.size} to {instance.size} by {instance.modified_by.created_by}"
                        )
                if changes:
                    create_logs(
                        model=sender,
                        object_id=instance.id,
                        action="update",
                        message=f"{sender.__name__} updated: " + ",".join(changes),
                    )
                else:
                    logger.info(
                        f"No significant changes detected for {sender.__name__} with ID {instance.id}."
                    )
        if hasattr(instance, "_original_instance"):
            delattr(instance, "_original_instance")

    except Exception as e:
        logger.error(f"Error in post_save signal for {sender.__name__}: {str(e)}")


@receiver(post_save, sender=Scheme)
def post_save_scheme_handler(sender, instance, created, **kwargs):
    try:
        if created:
            create_logs(
                model=sender,
                object_id=instance.id,
                action="create",
                message=f"New Scheme created with identity '{instance.identity}'",
            )
        else:
            original_instance = getattr(instance, "original_instance", None)
            if original_instance:
                changes = []
                if (
                    original_instance.identity != instance.identity
                    or original_instance.refund_policy != instance.refund_policy
                    or original_instance.expiration_month != instance.expiration_month
                    or original_instance.minimum_amount != instance.minimum_amount
                    or original_instance.maximum_amount != instance.maximum_amount
                ):
                    if original_instance.identity != instance.identity:
                        changes.append(
                            f"Identity Changed from {original_instance.identity} to {instance.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.refund_policy != instance.refund_policy:
                        changes.append(
                            f"Refund policy Changed from {original_instance.refund_policy} to {instance.refund_policy} by {instance.modified_by.created_by}"
                        )
                    if original_instance.expiration_month != instance.expiration_month:
                        changes.append(
                            f"Expiration month Changed from {original_instance.expiration_month} to {instance.expiration_month} by {instance.modified_by.created_by}"
                        )
                    if original_instance.minimum_amount != instance.minimum_amount:
                        changes.append(
                            f"Minimum Amount Changed from {original_instance.minimum_amount} to {instance.minimum_amount} by {instance.modified_by.created_by}"
                        )
                    if original_instance.maximum_amount != instance.maximum_amount:
                        changes.append(
                            f"maximum_amount Changes from {original_instance.maximum_amount} to {instance.maximum_amount} by {instance.modified_by.created_by}"
                        )
                if changes:
                    create_logs(
                        model=sender,
                        object_id=instance.id,
                        action="update",
                        message=f"{sender.__name__} updated: " + ",".join(changes),
                    )
                else:
                    logger.info(
                        f"No significant changes detected for {sender.__name__} with ID {instance.id}."
                    )
        if hasattr(instance, "_original_instance"):
            delattr(instance, "_original_instance")

    except Exception as e:
        logger.error(f"Error in post_save signal for {sender.__name__}: {str(e)}")


@receiver(post_save, sender=ProductPayment)
def post_save_productpayment_handler(sender, instance, created, **kwargs):
    try:
        if created:
            create_logs(
                model=sender,
                object_id=instance.id,
                action="create",
                message=f"New ProductPayment created with identity '{instance.customer}'",
            )
        else:
            original_instance = getattr(instance, "original_instance", None)
            if original_instance:
                changes = []
                if (
                    original_instance.customer != instance.customer
                    or original_instance.product != instance.product
                    or original_instance.amount != instance.amount
                ):
                    if original_instance.customer != instance.customer:
                        changes.append(
                            f"Customer Changed from {original_instance.customer.identity} to {instance.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.product != instance.product:
                        changes.append(
                            f"Product Changed from {original_instance.product.identity} to {instance.product.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.amount != instance.amount:
                        changes.append(
                            f"Amount Changed from {original_instance.amount} to {instance.amount} by {instance.modified_by.created_by}"
                        )

                if changes:
                    create_logs(
                        model=sender,
                        object_id=instance.id,
                        action="update",
                        message=f"{sender.__name__} updated: " + ",".join(changes),
                    )
                else:
                    logger.info(
                        f"No significant changes detected for {sender.__name__} with ID {instance.id}."
                    )
        if hasattr(instance, "_original_instance"):
            delattr(instance, "_original_instance")

    except Exception as e:
        logger.error(f"Error in post_save signal for {sender.__name__}: {str(e)}")


@receiver(post_save, sender=SchemePayment)
def post_save_schemepayment_handler(sender, instance, created, **kwargs):
    try:
        if created:
            create_logs(
                model=sender,
                object_id=instance.id,
                action="create",
                message=f"New SchemePayment created with identity '{instance.identity}'",
            )
        else:
            original_instance = getattr(instance, "original_instance", None)
            if original_instance:
                changes = []
                if (
                    original_instance.customer != instance.customer
                    or original_instance.scheme != instance.scheme
                    or original_instance.amount != instance.amount
                ):
                    if original_instance.customer != instance.customer:
                        changes.append(
                            f"Customer Changed from {original_instance.customer.identity} to {instance.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.scheme != instance.scheme:
                        changes.append(
                            f"Scheme Changed from {original_instance.scheme.identity} to {instance.scheme.identity} by {instance.modified_by.created_by}"
                        )
                    if original_instance.amount != instance.amount:
                        changes.append(
                            f"Amount Changed from {original_instance.amount} to {instance.amount} by {instance.modified_by.created_by}"
                        )

                if changes:
                    create_logs(
                        model=sender,
                        object_id=instance.id,
                        action="update",
                        message=f"{sender.__name__} updated: " + ",".join(changes),
                    )
                else:
                    logger.info(
                        f"No significant changes detected for {sender.__name__} with ID {instance.id}."
                    )
        if hasattr(instance, "_original_instance"):
            delattr(instance, "_original_instance")

    except Exception as e:
        logger.error(f"Error in post_save signal for {sender.__name__}: {str(e)}")
