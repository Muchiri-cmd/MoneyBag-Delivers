from django.contrib import admin
from .models import Proposal

# Register your models here.
class ProposalAdmin(admin.ModelAdmin):
  list_display = ("prospect","status")

admin.site.register(Proposal,ProposalAdmin)