from django.shortcuts import render
from .models import Proposal

# Create your views here.
def get_proposals(request):
  proposals = Proposal.objects.all()

  context = {
    'proposals':proposals
  }

  return render(request,'proposals.html',context,)