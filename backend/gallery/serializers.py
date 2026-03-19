from rest_framework import serializers
from .models import GalleryAlbum, GalleryImage

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'

class GalleryAlbumSerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True, read_only=True)
    image_count = serializers.SerializerMethodField()

    class Meta:
        model = GalleryAlbum
        fields = '__all__'

    def get_image_count(self, obj):
        return obj.images.count()

class GalleryAlbumListSerializer(serializers.ModelSerializer):
    """Lightweight — no nested images, just cover and count"""
    image_count = serializers.SerializerMethodField()

    class Meta:
        model = GalleryAlbum
        fields = ['id', 'title', 'description', 'cover_image', 'image_count', 'created_at']

    def get_image_count(self, obj):
        return obj.images.count()