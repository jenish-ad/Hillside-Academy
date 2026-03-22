from rest_framework import generics
from .models import Event
from .serializers import EventSerializer
import datetime

class EventListView(generics.ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        queryset = Event.objects.filter(is_active=True)
        upcoming = self.request.query_params.get('upcoming')
        if upcoming:
            queryset = queryset.filter(event_date__gte=datetime.date.today())
        return queryset

class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.filter(is_active=True)
    serializer_class = EventSerializer