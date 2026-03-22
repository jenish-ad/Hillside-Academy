from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle
from .models import AdmissionInfo, Scholarship, AdmissionEnquiry
from .serializers import (
    AdmissionInfoSerializer, ScholarshipSerializer, AdmissionEnquirySerializer
)

class EnquiryFormThrottle(AnonRateThrottle):
    rate = '5/hour'   # max 5 enquiries per IP per hour

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
    throttle_classes = [EnquiryFormThrottle]



#Now Vercel deployment. The important thing to understand first:

    #**Vercel only hosts the React frontend — it cannot run Django.**

#So the deployment plan is:
#React (Vite)  → Vercel        (free, perfect)
#Django API    → Railway        (free tier, easy)
#SQLite DB     → stays in Django on Railway
#Media files   → also on Railway (temporary, fine for internship)