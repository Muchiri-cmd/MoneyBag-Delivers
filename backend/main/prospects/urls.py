from django.urls import path
from .views import *
from .views import ProspectsView

app_name='prospects'

urlpatterns = [
  path('',ProspectsView.as_view(),name='prospects')    
]
