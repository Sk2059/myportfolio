from django.urls import path
from .views import ContactMessageCreateView,ContactMessageView,ContactDeleteView,home

urlpatterns = [
    path('', home, name='home'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact-create'),
    path('message/', ContactMessageView.as_view(), name='message'),
    path('messages/<int:pk>/delete/', ContactDeleteView.as_view(), name='message-delete'),
]