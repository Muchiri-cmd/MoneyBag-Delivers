from django.shortcuts import render
from .models import Prospect
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import ProspectSerializer


class ProspectsView(APIView):
  serializer_class = ProspectSerializer

  def get(self,request):
    prospects = Prospect.objects.all()
    serializer = ProspectSerializer(prospects,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = ProspectSerializer(data=request.data)

    if serializer.is_valid():
      serializer.save()

    return Response(serializer.data)