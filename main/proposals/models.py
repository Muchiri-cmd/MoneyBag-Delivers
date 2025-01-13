from django.db import models
from prospects.models import Prospect

STATUS = (
    ('Draft', 'The proposal is being prepared and has not yet been sent to the prospect.'),
    ('Sent', 'The proposal has been sent to the prospect but has not yet received a response.'),
    ('Viewed', 'The prospect has opened or reviewed the proposal, indicating interest or acknowledgment.'),
    ('Under Review', 'The prospect is actively considering the proposal .'),
    ('Declined', 'The prospect has declined the proposal'),
    ('On Hold', 'The proposal is temporarily paused due to external factors or a delay in decision-making.'),
    ('Expired', 'The proposal\'s validity period has lapsed without action or decision from the prospect.'),
    ('Won', 'The proposal has been accepted, and the deal has been closed.'),
    ('Lost', 'The proposal was declined and the opportunity was lost'),
)

# Create your models here.
class Proposal(models.Model):
  proposal = models.ForeignKey(Prospect,on_delete=models.CASCADE)
  status = models.CharField(max_length=255,choices=STATUS,default='Draft')