from rest_framework import serializers
from .models import HeroSlide, SchoolStat, AboutSection, PrincipalMessage, WhyChooseUs

class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlide
        fields = '__all__'

class SchoolStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolStat
        fields = '__all__'

class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = '__all__'

class PrincipalMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrincipalMessage
        fields = '__all__'

class WhyChooseUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChooseUs
        fields = '__all__'