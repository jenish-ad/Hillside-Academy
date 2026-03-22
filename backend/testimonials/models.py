from django.db import models

class TestimonialType(models.TextChoices):
    STUDENT = 'student', 'Student'
    GUARDIAN = 'guardian', 'Guardian'
    TOPPER = 'topper', 'Topper'
    ALUMNI = 'alumni', 'Alumni'

class Testimonial(models.Model):
    name = models.CharField(max_length=150)
    testimonial_type = models.CharField(
        max_length=20,
        choices=TestimonialType.choices,
        default=TestimonialType.STUDENT
    )
    batch_year = models.CharField(max_length=10, blank=True)  # e.g. "2080"
    program = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    message = models.TextField()
    rank = models.CharField(max_length=50, blank=True)  # for toppers e.g. "Rank 1"
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-batch_year']

    def __str__(self):
        return f"{self.name} ({self.get_testimonial_type_display()})"