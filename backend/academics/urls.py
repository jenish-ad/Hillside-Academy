from django.urls import path
from . import views

urlpatterns = [
    path('programs/', views.ProgramListView.as_view(), name='program-list'),
    path('programs/<int:pk>/', views.ProgramDetailView.as_view(), name='program-detail'),
    path('faculty/', views.FacultyListView.as_view(), name='faculty-list'),
    path('methodology/', views.TeachingMethodologyListView.as_view(), name='methodology-list'),
]