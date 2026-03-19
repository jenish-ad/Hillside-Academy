from rest_framework import serializers
from .models import AdmissionInfo, Scholarship, AdmissionEnquiry

class AdmissionInfoSerializer(serializers.ModelSerializer):
    program_name = serializers.CharField(
        source='program.name', read_only=True
    )

    class Meta:
        model = AdmissionInfo
        fields = '__all__'

class ScholarshipSerializer(serializers.ModelSerializer):
    program_name = serializers.CharField(
        source='program.name', read_only=True
    )

    class Meta:
        model = Scholarship
        fields = '__all__'

class AdmissionEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionEnquiry
        fields = '__all__'
        read_only_fields = ['submitted_at', 'is_read']