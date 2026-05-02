# backend/contact/views.py
from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from rest_framework.permissions import AllowAny,IsAdminUser

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

class ContactMessageView(generics.ListCreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

class ContactDeleteView(generics.DestroyAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [IsAdminUser]