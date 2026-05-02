from rest_framework import generics
from .models import Project,OtherProject
from .serializers import ProjectSerializer,OtherProjectSerializer
from rest_framework.permissions import AllowAny,IsAdminUser

class FprojectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

class FprojectRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]

class OtherProjectListCreateView(generics.ListCreateAPIView):
    queryset = OtherProject.objects.all().order_by('-created_at')
    serializer_class = OtherProjectSerializer
    permission_classes = [AllowAny]

class OtherProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OtherProject.objects.all()
    serializer_class = OtherProjectSerializer
    permission_classes = [IsAdminUser]



# class FeaturedProjectsView(generics.ListAPIView):
#     serializer_class = ProjectSerializer

#     def get_queryset(self):
#         return Project.objects.filter(type='featured').order_by('-created_at')

# class OtherProjectsView(generics.ListAPIView):
#     serializer_class = ProjectSerializer

#     def get_queryset(self):
#         return Project.objects.filter(type='other').order_by('-created_at')
