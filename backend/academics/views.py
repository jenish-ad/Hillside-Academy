from rest_framework import generics
from .models import Program, Faculty, TeachingMethodology
from .serializers import (
    ProgramSerializer, ProgramListSerializer,
    FacultySerializer, TeachingMethodologySerializer
)

class ProgramListView(generics.ListAPIView):
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramListSerializer

class ProgramDetailView(generics.RetrieveAPIView):
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramSerializer

class FacultyListView(generics.ListAPIView):
    serializer_class = FacultySerializer

    def get_queryset(self):
        queryset = Faculty.objects.filter(is_active=True)
        department = self.request.query_params.get('department')
        if department:
            queryset = queryset.filter(department__id=department)
        return queryset

class TeachingMethodologyListView(generics.ListAPIView):
    queryset = TeachingMethodology.objects.all()
    serializer_class = TeachingMethodologySerializer