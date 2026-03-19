from django.db import models

class NoticeType(models.TextChoices):
    NOTICE = 'notice', 'Notice'
    NEWS = 'news', 'News & Announcement'
    CIRCULAR = 'circular', 'Circular'

class Notice(models.Model):
    title = models.CharField(max_length=300)
    body = models.TextField(blank=True)
    notice_type = models.CharField(
        max_length=20,
        choices=NoticeType.choices,
        default=NoticeType.NOTICE
    )
    attachment = models.FileField(upload_to='notices/', blank=True, null=True)
    is_pinned = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    published_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_pinned', '-published_at']

    def __str__(self):
        return self.title