from django.contrib import admin
from .models import AdmissionInfo, Scholarship, AdmissionEnquiry

@admin.register(AdmissionInfo)
class AdmissionInfoAdmin(admin.ModelAdmin):
    list_display = ['program', 'seats_available', 'is_open', 'updated_at']
    list_editable = ['is_open']
    list_filter = ['is_open']

@admin.register(Scholarship)
class ScholarshipAdmin(admin.ModelAdmin):
    list_display = ['title', 'program', 'is_active']
    list_editable = ['is_active']
    list_filter = ['program', 'is_active']
    search_fields = ['title', 'description']

@admin.register(AdmissionEnquiry)
class AdmissionEnquiryAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'program', 'submitted_at', 'is_read']
    list_editable = ['is_read']
    list_filter = ['program', 'is_read']
    search_fields = ['full_name', 'email', 'phone']
    readonly_fields = ['full_name', 'email', 'phone', 'program', 'message', 'submitted_at']
    ordering = ['-submitted_at']
    date_hierarchy = 'submitted_at'

    def has_delete_permission(self, request, obj=None):
        # only superuser can delete enquiries
        return request.user.is_superuser

    def has_add_permission(self, request):
        return False   # nobody manually adds enquiries