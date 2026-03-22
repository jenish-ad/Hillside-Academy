from django.db import models

class DownloadCategory(models.Model):
    name = models.CharField(max_length=100)  # e.g. Brochures, Syllabus, Forms
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Download Categories'

    def __str__(self):
        return self.name


class DownloadFile(models.Model):
    category = models.ForeignKey(
        DownloadCategory, on_delete=models.CASCADE, related_name='files'
    )
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to='downloads/')
    thumbnail = models.ImageField(upload_to='downloads/thumbnails/', blank=True, null=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-uploaded_at']

    def __str__(self):
        return self.title