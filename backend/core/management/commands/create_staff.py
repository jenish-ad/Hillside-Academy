from django.core.management.base import BaseCommand
from django.contrib.auth.models import User, Permission
from django.contrib.contenttypes.models import ContentType

class Command(BaseCommand):
    help = "Creates a staff user for school admin"

    def handle(self, *args, **kwargs):
        if User.objects.filter(username="schooladmin").exists():
            self.stdout.write("Staff user already exists.")
            return

        user = User.objects.create_user(
            username="schooladmin",
            email="info@hillsideacademy.edu.np",
            password="Hillside@2075",   # school will change this on first login
            first_name="School",
            last_name="Admin",
        )
        user.is_staff = True      # can access /admin/
        user.is_superuser = False  # cannot do everything

        # Grant permissions only to content models school needs
        allowed_models = [
            ("notices",      "notice"),
            ("core",         "heroslide"),
            ("core",         "schoolstat"),
            ("core",         "aboutsection"),
            ("core",         "principalmessage"),
            ("core",         "whychooseus"),
            ("academics",    "faculty"),
            ("academics",    "program"),
            ("academics",    "department"),
            ("events",       "event"),
            ("gallery",      "galleryalbum"),
            ("gallery",      "galleryimage"),
            ("downloads",    "downloadfile"),
            ("downloads",    "downloadcategory"),
            ("testimonials", "testimonial"),
            ("contact",      "contactinfo"),
            ("admissions",   "admissioninfo"),
            ("admissions",   "scholarship"),
        ]

        for app_label, model_name in allowed_models:
            try:
                ct = ContentType.objects.get(
                    app_label=app_label,
                    model=model_name
                )
                # give add, change, delete, view permissions
                perms = Permission.objects.filter(content_type=ct)
                user.user_permissions.add(*perms)
            except ContentType.DoesNotExist:
                self.stdout.write(f"Skipping {app_label}.{model_name}")

        user.save()
        self.stdout.write(self.style.SUCCESS(
            "Staff user created: username=schooladmin password=Hillside@2075"
        ))
