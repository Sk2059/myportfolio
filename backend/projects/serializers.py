from rest_framework import serializers
from .models import Project, OtherProject

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class OtherProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherProject
        fields = '__all__'