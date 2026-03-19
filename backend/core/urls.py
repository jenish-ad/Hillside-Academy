from django.urls import path
from . import views

urlpatterns = [
    path('hero/', views.HeroSlideListView.as_view(), name='hero-list'),
    path('stats/', views.SchoolStatListView.as_view(), name='stats-list'),
    path('about/', views.AboutSectionListView.as_view(), name='about-list'),
    path('principal/', views.PrincipalMessageView.as_view(), name='principal'),
    path('why-choose-us/', views.WhyChooseUsListView.as_view(), name='why-choose-us'),
]