from django.urls import path
from .views import (
    FprojectListCreateView,
    FprojectRetrieveUpdateDeleteView,
     OtherProjectListCreateView, OtherProjectDetailView
    # FeaturedProjectsView,
    # OtherProjectsView,
)

urlpatterns = [
    path('featured/', FprojectListCreateView.as_view(), name='project-list-create'),
    path('featured/<int:pk>/',FprojectRetrieveUpdateDeleteView.as_view(), name='project-detail'),
    path('other-projects/', OtherProjectListCreateView.as_view(), name='other-projects'),
    path('other-projects/<int:pk>/', OtherProjectDetailView.as_view(), name='other-project-detail'),
    
    # path('featured/', FeaturedProjectsView.as_view(), name='featured-projects'),
    # path('other/', OtherProjectsView.as_view(), name='other-projects'),
]
