from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.AdmissionInfoListView.as_view(), name='admission-info'),
    path('scholarships/', views.ScholarshipListView.as_view(), name='scholarships'),
    path('enquiry/', views.AdmissionEnquiryCreateView.as_view(), name='enquiry'),
]