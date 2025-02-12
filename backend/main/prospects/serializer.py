from rest_framework import serializers
from .models import *
from proposals.models import Proposal

class ProspectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Prospect
    fields = '__all__'

class ProposalSerializer(serializers.ModelSerializer):
  prospect = ProspectSerializer(read_only=True)

  class Meta:
    model = Proposal
    fields = '__all__'