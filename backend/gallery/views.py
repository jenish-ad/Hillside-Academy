from rest_framework import generics
from .models import GalleryAlbum, GalleryImage
from .serializers import (
    GalleryAlbumSerializer, GalleryAlbumListSerializer, GalleryImageSerializer
)

class GalleryAlbumListView(generics.ListAPIView):
    queryset = GalleryAlbum.objects.filter(is_active=True)
    serializer_class = GalleryAlbumListSerializer

class GalleryAlbumDetailView(generics.RetrieveAPIView):
    queryset = GalleryAlbum.objects.filter(is_active=True)
    serializer_class = GalleryAlbumSerializer