from django.db import models

# Create your models here.
class Prospect(models.Model):
  name = models.CharField(max_length=255)
  phone = models.CharField(max_length=15,blank=True,null=True)
  email = models.EmailField(blank=True,null=True)
  ig = models.URLField(blank=True,null=True)
  x = models.URLField(blank=True,null=True)
  tiktok = models.URLField(blank=True,null=True)
  linkedIn = models.URLField(blank=True,null=True)
  comments = models.TextField(blank=True,max_length=255)

  def __str__(self):
    return self.name
  