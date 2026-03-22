from rest_framework import generics
from .models import Notice, NoticeType
from .serializers import NoticeSerializer

class NoticeListView(generics.ListAPIView):
    serializer_class = NoticeSerializer

    def get_queryset(self):
        queryset = Notice.objects.filter(is_active=True)
        notice_type = self.request.query_params.get('type')
        if notice_type:
            queryset = queryset.filter(notice_type=notice_type)
        return queryset

class NoticeDetailView(generics.RetrieveAPIView):
    queryset = Notice.objects.filter(is_active=True)
    serializer_class = NoticeSerializer