from django.shortcuts import render
from .models import Prospect

# Create your views here.
def get_prospects(request):
  prospects = Prospect.objects.all()

  context = {
    'prospects':prospects,
  }

  return render(request,'prospects.html',context)
