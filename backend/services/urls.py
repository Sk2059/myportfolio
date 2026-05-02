from django.urls import path 
from .views import TechlistCreate, TechRUD


urlpatterns = [
    path("tech/", TechlistCreate.as_view(), name="Tech"),
      path("tech/<int:pk>/", TechRUD.as_view())
    
]