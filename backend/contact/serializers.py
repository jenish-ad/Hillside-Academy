from rest_framework import serializers
from .models import ContactSubmission, ContactInfo

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = '__all__'
        read_only_fields = ['submitted_at', 'is_read']

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'