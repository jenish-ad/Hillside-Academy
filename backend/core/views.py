from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import HeroSlide, SchoolStat, AboutSection, PrincipalMessage, WhyChooseUs
from .serializers import (
    HeroSlideSerializer, SchoolStatSerializer, AboutSectionSerializer,
    PrincipalMessageSerializer, WhyChooseUsSerializer
)

class HeroSlideListView(generics.ListAPIView):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer

class SchoolStatListView(generics.ListAPIView):
    queryset = SchoolStat.objects.all()
    serializer_class = SchoolStatSerializer

class AboutSectionListView(generics.ListAPIView):
    queryset = AboutSection.objects.all()
    serializer_class = AboutSectionSerializer

class PrincipalMessageView(generics.ListAPIView):
    queryset = PrincipalMessage.objects.all()
    serializer_class = PrincipalMessageSerializer

class WhyChooseUsListView(generics.ListAPIView):
    queryset = WhyChooseUs.objects.all()
    serializer_class = WhyChooseUsSerializer