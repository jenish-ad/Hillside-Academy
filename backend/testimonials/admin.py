from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'testimonial_type', 'program', 'batch_year', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    list_filter = ['testimonial_type', 'is_active']
    search_fields = ['name', 'message', 'program']
    ordering = ['order']