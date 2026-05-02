from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import TechOffer
from .serializers import TechOfferSerilalizer
from rest_framework.permissions import AllowAny,IsAdminUser

class TechlistCreate(ListCreateAPIView):
    queryset = TechOffer.objects.all().order_by("created_at")
    serializer_class = TechOfferSerilalizer
    permission_classes = [AllowAny]

class TechRUD(RetrieveUpdateDestroyAPIView):
    queryset = TechOffer.objects.all()
    serializer_class = TechOfferSerilalizer
    permission_classes = [IsAdminUser]