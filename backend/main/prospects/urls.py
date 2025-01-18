from django.urls import path
from .views import *

app_name='prospects'

urlpatterns = [
  path('',get_prospects,name='prospects')    
]
