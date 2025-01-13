from django.urls import path
from .views import * 

app_name = 'proposals'

urlpatterns = [
  path('',get_proposals,name='proposals')    
]


