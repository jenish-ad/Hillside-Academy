from django.urls import path
from . import views

urlpatterns = [
    path('', views.GalleryAlbumListView.as_view(), name='gallery-list'),
    path('<int:pk>/', views.GalleryAlbumDetailView.as_view(), name='gallery-detail'),
]