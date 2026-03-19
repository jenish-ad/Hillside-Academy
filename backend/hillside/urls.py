from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/core/', include('core.urls')),
    path('api/notices/', include('notices.urls')),
    path('api/academics/', include('academics.urls')),
    path('api/admissions/', include('admissions.urls')),
    path('api/events/', include('events.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/downloads/', include('downloads.urls')),
    path('api/testimonials/', include('testimonials.urls')),
    path('api/contact/', include('contact.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)