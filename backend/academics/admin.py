from django.contrib import admin
from .models import Program, Department, Faculty, TeachingMethodology

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'duration', 'order', 'is_active']
    list_editable = ['order', 'is_active']

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'program']
    list_filter = ['program']

@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ['name', 'designation', 'department', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    list_filter = ['department', 'is_active']
    search_fields = ['name', 'designation', 'qualification']
    ordering = ['order', 'name']

@admin.register(TeachingMethodology)
class TeachingMethodologyAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    list_editable = ['order']