from django.contrib import admin
from .models import ContactSubmission, ContactInfo

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'subject', 'submitted_at', 'is_read']
    list_editable = ['is_read']
    list_filter = ['is_read']
    search_fields = ['full_name', 'email', 'subject']
    readonly_fields = ['full_name', 'email', 'phone', 'subject', 'message', 'submitted_at']
    ordering = ['-submitted_at']
    date_hierarchy = 'submitted_at'

    def has_delete_permission(self, request, obj=None):
        return request.user.is_superuser

    def has_add_permission(self, request):
        return False

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ['email', 'phone_primary', 'updated_at']