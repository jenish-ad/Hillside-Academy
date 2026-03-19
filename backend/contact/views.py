from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import ContactSubmission, ContactInfo
from .serializers import ContactSubmissionSerializer, ContactInfoSerializer

class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]

class ContactInfoView(generics.ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer