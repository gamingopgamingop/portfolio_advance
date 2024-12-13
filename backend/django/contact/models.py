from django.db import models
from django.core.exceptions import ValidationError
import re

class Contact(models.Model):
    name = models.CharField(max_length=100, verbose_name="Full Name")
    email = models.EmailField(unique=True, verbose_name="Email Address")
    message = models.TextField(verbose_name="Message")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")

    # Custom clean method to add any additional validation
    def clean(self):
        # Validate the email pattern (if necessary)
        if not re.match(r"[^@]+@[^@]+\.[^@]+", self.email):
            raise ValidationError({'email': "Invalid email address format."})

    def __str__(self):
        return f"Contact from {self.name} ({self.email})"

    class Meta:
        verbose_name = "Contact Form Submission"
        verbose_name_plural = "Contact Form Submissions"
        ordering = ['-created_at']  # Order by latest submissions
