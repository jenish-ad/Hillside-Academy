from django.db import models
from academics.models import Program

class AdmissionInfo(models.Model):
    program = models.OneToOneField(
        Program, on_delete=models.CASCADE, related_name='admission_info'
    )
    eligibility = models.TextField()
    procedure = models.TextField()
    fee_structure = models.TextField(blank=True)
    seats_available = models.PositiveIntegerField(default=0)
    is_open = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Admission Info - {self.program.name}"


class Scholarship(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    criteria = models.TextField()
    program = models.ForeignKey(
        Program, on_delete=models.SET_NULL,
        null=True, blank=True, related_name='scholarships'
    )
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class AdmissionEnquiry(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    program = models.ForeignKey(
        Program, on_delete=models.SET_NULL,
        null=True, blank=True, related_name='enquiries'
    )
    message = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-submitted_at']
        verbose_name_plural = 'Admission Enquiries'

    def __str__(self):
        return f"{self.full_name} - {self.program}"