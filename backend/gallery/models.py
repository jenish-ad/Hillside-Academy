from django.db import models

class GalleryAlbum(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    cover_image = models.ImageField(upload_to='gallery/covers/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    album = models.ForeignKey(
        GalleryAlbum, on_delete=models.CASCADE, related_name='images'
    )
    image = models.ImageField(upload_to='gallery/images/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.album.title} - {self.caption or self.id}"