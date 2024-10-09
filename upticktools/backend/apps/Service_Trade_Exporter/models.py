from django.db import models

class Connection(models.Model):
    ConnectionURL = models.CharField(max_length=100)
    

