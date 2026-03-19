from django.contrib import admin
from .models import DownloadCategory, DownloadFile

class DownloadFileInline(admin.TabularInline):
    model = DownloadFile
    extra = 2
    fields = ['title', 'file', 'thumbnail', 'is_active']

@admin.register(DownloadCategory)
class DownloadCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'order']
    list_editable = ['order']
    inlines = [DownloadFileInline]

@admin.register(DownloadFile)
class DownloadFileAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_active', 'uploaded_at']
    list_editable = ['is_active']
    list_filter = ['category', 'is_active']
    search_fields = ['title', 'description']
    ordering = ['-uploaded_at']