from django.contrib import admin
from .models import GalleryAlbum, GalleryImage

class GalleryImageInline(admin.TabularInline):
    model = GalleryImage
    extra = 3
    fields = ['image', 'caption', 'order']

@admin.register(GalleryAlbum)
class GalleryAlbumAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'created_at']
    list_editable = ['is_active']
    search_fields = ['title']
    inlines = [GalleryImageInline]

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['album', 'caption', 'order']
    list_editable = ['order']
    list_filter = ['album']