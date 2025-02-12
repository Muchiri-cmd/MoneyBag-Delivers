from rest_framework import serializers
from .models import *
from prospects.serializer import ProspectSerializer

class ProposalSerializer(serializers.ModelSerializer):
    prospect = ProspectSerializer(read_only=True) 
    prospect_id = serializers.PrimaryKeyRelatedField(
        queryset=Prospect.objects.all(), write_only=True
    ) 

    class Meta:
        model = Proposal
        fields = '__all__'

    def create(self, validated_data):
        prospect = validated_data.pop('prospect_id')  
        proposal = Proposal.objects.create(prospect=prospect, **validated_data)
        return proposal

    def update(self, instance, validated_data):
        prospect = validated_data.pop('prospect_id', None)  
        if prospect:
            instance.prospect = prospect
        return super().update(instance, validated_data)
