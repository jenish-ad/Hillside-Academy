from django.contrib import admin
from .models import HeroSlide, SchoolStat, AboutSection, PrincipalMessage, WhyChooseUs

@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    ordering = ['order']

@admin.register(SchoolStat)
class SchoolStatAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'order']
    list_editable = ['order']

@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ['heading', 'updated_at']

@admin.register(PrincipalMessage)
class PrincipalMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'designation', 'updated_at']

@admin.register(WhyChooseUs)
class WhyChooseUsAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    list_editable = ['order']