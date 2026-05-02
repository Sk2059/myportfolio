from django.db import models

class Project(models.Model):
    # PROJECT_TYPES = [
    #     ('featured', 'Featured'),
    #     ('other', 'Other'),
    # ]

    title = models.CharField(max_length=200)
    description = models.TextField()

    image = models.ImageField(upload_to='projects_img/', null=True, blank=True)

    tech = models.JSONField(default=list)          
    highlights = models.JSONField(default=list)    

    github_link = models.URLField(max_length=500, blank=True)
    live_link = models.URLField(max_length=500, blank=True)
    other_link = models.URLField(max_length=500, blank=True)

    # type = models.CharField(max_length=10, choices=PROJECT_TYPES)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class OtherProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech = models.JSONField(default=list)  # ['React', 'Tailwind', ...]
    icon_name = models.CharField(max_length=100)  # Example: "HiOutlineSparkles"
    link = models.URLField(max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title