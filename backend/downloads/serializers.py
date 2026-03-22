from rest_framework import serializers
from .models import DownloadCategory, DownloadFile

class DownloadFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DownloadFile
        fields = '__all__'

class DownloadCategorySerializer(serializers.ModelSerializer):
    files = DownloadFileSerializer(many=True, read_only=True)

    class Meta:
        model = DownloadCategory
        fields = '__all__'