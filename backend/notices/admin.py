from django.contrib import admin
from .models import Notice

@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = ['title', 'notice_type', 'is_pinned', 'is_active', 'published_at']
    list_editable = ['is_pinned', 'is_active']
    list_filter = ['notice_type', 'is_pinned', 'is_active']
    search_fields = ['title', 'body']
    ordering = ['-published_at']
    date_hierarchy = 'published_at'