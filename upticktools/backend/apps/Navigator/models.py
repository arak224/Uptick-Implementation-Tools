from django.db import models

# Create your models here.
class User(models.Model):
    UserEmail = models.CharField(max_length=100)
    UserPassword = models.CharField(max_length=30)
    UserCompany = models.CharField(max_length=100)
    UserFirstName = models.CharField(max_length=30)
    UserLastName = models.CharField(max_length=50)

