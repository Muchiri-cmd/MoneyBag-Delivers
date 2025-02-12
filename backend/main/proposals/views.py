from django.shortcuts import render
from .models import Proposal
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *


class ProposalsView(APIView):
  serializer_class = ProposalSerializer

  def get(self,request):
    proposals = Proposal.objects.all()
    serializer = ProposalSerializer(proposals,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = ProposalSerializer(data=request.data)

    if serializer.is_valid():
      serializer.save()

    return Response(serializer.data)