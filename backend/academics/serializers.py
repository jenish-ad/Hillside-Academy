from rest_framework import serializers
from .models import Program, Department, Faculty, TeachingMethodology

class TeachingMethodologySerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachingMethodology
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    department_name = serializers.CharField(
        source='department.name', read_only=True
    )

    class Meta:
        model = Faculty
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    faculty_members = FacultySerializer(many=True, read_only=True)

    class Meta:
        model = Department
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    departments = DepartmentSerializer(many=True, read_only=True)

    class Meta:
        model = Program
        fields = '__all__'

class ProgramListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for listing programs without nested data"""
    class Meta:
        model = Program
        fields = ['id', 'name', 'description', 'duration', 'image', 'order']