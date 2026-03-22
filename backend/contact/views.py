from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle
from .models import ContactSubmission, ContactInfo
from .serializers import ContactSubmissionSerializer, ContactInfoSerializer

class ContactFormThrottle(AnonRateThrottle):
    rate = '5/hour'   # max 5 contact form submissions per IP per hour

class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]
    throttle_classes = [ContactFormThrottle]

class ContactInfoView(generics.ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer