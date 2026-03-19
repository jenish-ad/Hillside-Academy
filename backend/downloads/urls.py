from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.DownloadCategoryListView.as_view(), name='download-categories'),
    path('files/', views.DownloadFileListView.as_view(), name='download-files'),
]