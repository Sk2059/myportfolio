from rest_framework import serializers
from .models import TechOffer

class TechOfferSerilalizer(serializers.ModelSerializer):
     class Meta:
        model = TechOffer
        fields = "__all__"