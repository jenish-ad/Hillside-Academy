from rest_framework import generics
from .models import DownloadCategory, DownloadFile
from .serializers import DownloadCategorySerializer, DownloadFileSerializer

class DownloadCategoryListView(generics.ListAPIView):
    queryset = DownloadCategory.objects.all()
    serializer_class = DownloadCategorySerializer

class DownloadFileListView(generics.ListAPIView):
    serializer_class = DownloadFileSerializer

    def get_queryset(self):
        queryset = DownloadFile.objects.filter(is_active=True)
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__id=category)
        return queryset