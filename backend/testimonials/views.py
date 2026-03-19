from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListView(generics.ListAPIView):
    serializer_class = TestimonialSerializer

    def get_queryset(self):
        queryset = Testimonial.objects.filter(is_active=True)
        testimonial_type = self.request.query_params.get('type')
        if testimonial_type:
            queryset = queryset.filter(testimonial_type=testimonial_type)
        return queryset