from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
from uuid import UUID


class CustomViewSet(ViewSet):
    """
    A dynamic ViewSet for handling GET, POST, PATCH, DELETE operations 
    with additional metadata for table and dropdowns.
    """

    model = None  # Placeholder for the dynamic model
    serializer_class = None  # Placeholder for the dynamic serializer

    @classmethod
    def set_model_and_serializer(cls, model, serializer):
        """
        Dynamically set the model and serializer for the viewset.
        """
        cls.model = model
        cls.serializer_class = serializer

    def list(self, request):
        """
        Handles GET requests to retrieve all items with metadata.
        """
        if not self.model or not self.serializer_class:
            return Response(
                {"error": "Model and serializer are not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        items = self.model.objects.all()
        serializer = self.serializer_class(items, many=True)

        return Response(
            {
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )

    def retrieve(self, request, pk=None):
        """
        Handles GET requests to retrieve a single item by UUID.
        """
        if not self.model or not self.serializer_class:
            return Response(
                {"error": "Model and serializer are not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        try:
            UUID(pk)  # Validate UUID format
            item = self.model.objects.get(pk=pk)
            serializer = self.serializer_class(item)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except self.model.DoesNotExist:
            return Response(
                {"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except ValueError:
            return Response(
                {"error": "Invalid UUID format"}, status=status.HTTP_400_BAD_REQUEST
            )

    def create(self, request):
        """
        Handles POST requests to create a new item.
        """
        if not self.serializer_class:
            return Response(
                {"error": "Serializer is not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        """
        Handles PATCH requests to update an item by UUID.
        """
        if not self.model or not self.serializer_class:
            return Response(
                {"error": "Model and serializer are not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        try:
            UUID(pk)  # Validate UUID format
            item = self.model.objects.get(pk=pk)
        except self.model.DoesNotExist:
            return Response(
                {"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except ValueError:
            return Response(
                {"error": "Invalid UUID format"}, status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.serializer_class(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        """
        Handles DELETE requests to remove an item by UUID.
        """
        if not self.model:
            return Response(
                {"error": "Model is not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        try:
            UUID(pk)  # Validate UUID format
            item = self.model.objects.get(pk=pk)
            item.delete()
            return Response(
                {"message": "Item deleted successfully"},
                status=status.HTTP_204_NO_CONTENT,
            )
        except self.model.DoesNotExist:
            return Response(
                {"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except ValueError:
            return Response(
                {"error": "Invalid UUID format"}, status=status.HTTP_400_BAD_REQUEST
            )
