from django.db import models

class HeroSlide(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    image = models.ImageField(upload_to='hero/')
    button_text = models.CharField(max_length=50, blank=True)
    button_link = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class SchoolStat(models.Model):
    label = models.CharField(max_length=100)  # e.g. "Students Enrolled"
    value = models.CharField(max_length=50)   # e.g. "1200+"
    icon = models.CharField(max_length=50, blank=True)  # icon name for frontend
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.label


class AboutSection(models.Model):
    heading = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='about/', blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.heading


class PrincipalMessage(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    message = models.TextField()
    photo = models.ImageField(upload_to='principal/', blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class WhyChooseUs(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title