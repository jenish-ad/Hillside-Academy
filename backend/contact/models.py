from django.db import models

class ContactSubmission(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.full_name} - {self.subject}"


class ContactInfo(models.Model):
    address = models.TextField()
    phone_primary = models.CharField(max_length=20)
    phone_secondary = models.CharField(max_length=20, blank=True)
    email = models.EmailField()
    map_embed_url = models.TextField(blank=True)  # Google Maps embed iframe src
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "Contact Information"