from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=200)       # e.g. Science, Management
    description = models.TextField()
    duration = models.CharField(max_length=100)   # e.g. "2 Years"
    image = models.ImageField(upload_to='programs/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=200)
    program = models.ForeignKey(
        Program, on_delete=models.SET_NULL,
        null=True, blank=True, related_name='departments'
    )

    def __str__(self):
        return self.name


class Faculty(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    qualification = models.CharField(max_length=200, blank=True)
    department = models.ForeignKey(
        Department, on_delete=models.SET_NULL,
        null=True, blank=True, related_name='faculty_members'
    )
    photo = models.ImageField(upload_to='faculty/', blank=True, null=True)
    bio = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = 'Faculty'

    def __str__(self):
        return self.name


class TeachingMethodology(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name_plural = 'Teaching Methodologies'

    def __str__(self):
        return self.title