from rest_framework import serializers
from .models import Testimonial

class TestimonialSerializer(serializers.ModelSerializer):
    testimonial_type_display = serializers.CharField(
        source='get_testimonial_type_display', read_only=True
    )

    class Meta:
        model = Testimonial
        fields = '__all__'