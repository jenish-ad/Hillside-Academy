from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import AdmissionInfo, Scholarship, AdmissionEnquiry
from .serializers import (
    AdmissionInfoSerializer, ScholarshipSerializer, AdmissionEnquirySerializer
)

class AdmissionInfoListView(generics.ListAPIView):
    queryset = AdmissionInfo.objects.filter(is_open=True)
    serializer_class = AdmissionInfoSerializer

class ScholarshipListView(generics.ListAPIView):
    queryset = Scholarship.objects.filter(is_active=True)
    serializer_class = ScholarshipSerializer

class AdmissionEnquiryCreateView(generics.CreateAPIView):
    queryset = AdmissionEnquiry.objects.all()
    serializer_class = AdmissionEnquirySerializer
    permission_classes = [AllowAny]