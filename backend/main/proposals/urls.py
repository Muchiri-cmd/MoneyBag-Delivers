from django.urls import path
from .views import * 

app_name = 'proposals'

urlpatterns = [
  path('',ProposalsView.as_view(),name='proposals')    
]


