from django.db import models
from apps.BASE.helpers import get_display_name_for_slug
from apps.BASE.models import MAX_CHAR_FIELD_LENGTH
import uuid


class BaseField:
    """Base class for all custom fields."""
    pass


class AppSingleChoiceField(BaseField, models.CharField):
    """Custom field for single-choice options."""

    def __init__(self, choices_config: dict, *args, **kwargs):
        """
        Initialize the single-choice field.

        :param choices_config: Dictionary containing "options" and optional "default".
        """
        self.choices_config = choices_config
        self.options = self.choices_config["options"]

        # Generate choices and determine max length
        generated_choices, max_length = self.generate_choices()

        # Update kwargs with choices and max_length
        kwargs.update(
            {
                "choices": generated_choices,
                "max_length": max_length,
                "default": self.get_default_option(),
            }
        )
        super().__init__(*args, **kwargs)

    def generate_choices(self):
        """Generate valid Django `choices` and determine max length."""
        generated_choices = []
        max_length = 0

        for option in self.options:
            if self.type_of_options() == "list_of_tuples":
                generated_choices.append(option)
                max_length = max(max_length, len(option[0]))
            else:
                display_name = self.get_display_name(option)
                generated_choices.append((option, display_name))
                max_length = max(max_length, len(option))

        return generated_choices, max_length

    def get_display_name(self, option):
        """
        Get the display name for a choice option.

        :param option: The option for which the display name is determined.
        :return: Display name as a string.
        """
        if self.type_of_options() == "dict":
            return self.options[option]
        return get_display_name_for_slug(option)

    def type_of_options(self):
        """Determine the type of `options` (list, list_of_tuples, or dict)."""
        if isinstance(self.options, list):
            if self.options and isinstance(self.options[0], tuple):
                return "list_of_tuples"
            return "list"
        if isinstance(self.options, dict):
            return "dict"
        raise TypeError("Unsupported type for options. Must be list, list_of_tuples, or dict.")

    def get_default_option(self):
        """
        Get the default option from the choices configuration.

        :return: Default option or the first option as fallback.
        """
        if self.type_of_options() == "list_of_tuples":
            return self.choices_config.get("default", self.options[0][0])
        if self.type_of_options() in ["list", "dict"]:
            return self.choices_config.get("default", list(self.options)[0])

    def deconstruct(self):
        """Ensure the field can be serialized by migrations."""
        name, path, args, kwargs = super().deconstruct()
        kwargs["choices_config"] = self.choices_config
        return name, path, args, kwargs

class AppSingleFileField(BaseField, models.FileField):
    """Custom file upload field with unique filename generation and validation."""

    def __init__(self, allowed_extensions=None, max_file_size=None, *args, **kwargs):
        """
        Initialize the file field with validation settings.

        :param allowed_extensions: List of allowed file extensions (e.g., ["jpg", "png", "pdf"]).
        :param max_file_size: Maximum allowed file size in bytes (e.g., 5 * 1024 * 1024 for 5MB).
        """
        self.allowed_extensions = allowed_extensions or []
        self.max_file_size = max_file_size
        kwargs.setdefault("upload_to", "files/")
        kwargs.setdefault("max_length", MAX_CHAR_FIELD_LENGTH)
        super().__init__(*args, **kwargs)

    def pre_save(self, model_instance, add):
        """
        Generate a unique filename, validate file size and extension before saving.

        :param model_instance: The model instance associated with the field.
        :param add: Boolean indicating if this is a new instance.
        :return: Updated file instance.
        :raises ValueError: If the file size or extension is invalid.
        """
        file_field = getattr(model_instance, self.attname)

        if file_field and file_field.name:
            # Validate file extension
            extension = file_field.name.rsplit(".", 1)[-1].lower()
            if self.allowed_extensions and extension not in self.allowed_extensions:
                raise ValueError(
                    f"Invalid file extension '{extension}'. Allowed extensions are: {', '.join(self.allowed_extensions)}."
                )

            # Validate file size
            file_size = file_field.file.size
            if self.max_file_size and file_size > self.max_file_size:
                raise ValueError(
                    f"File size {file_size} exceeds the maximum allowed size of {self.max_file_size} bytes."
                )

            # Generate unique filename
            unique_filename = f"{uuid.uuid4().hex}.{extension}"
            file_field.name = unique_filename

        return super().pre_save(model_instance, add)
