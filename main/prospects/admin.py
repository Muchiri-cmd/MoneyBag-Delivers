from django.contrib import admin
from .models import Prospect

# Register your models here.
class ProspectAdmin(admin.ModelAdmin):
  list_display = ("name","phone","comments","ig","x","tiktok","linkedIn")

  def display_phone(self,obj):
    return obj.phone if obj.phone else "N/A"
  display_phone.short_description="Phone"

admin.site.register(Prospect,ProspectAdmin)