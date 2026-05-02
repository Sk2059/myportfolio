from django.db import models


class TechOffer(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    my_skills = models.JSONField(default=list)
    status = models.BooleanField(default=True)
    icon = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
