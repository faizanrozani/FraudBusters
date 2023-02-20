from django.db import models

# Create your models here.

class urlstorage(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=1000)

    def __str__(self) -> str:
        return self.name

    class Meta: 
        managed = True

class ExtensionUser(models.Model):
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=24)

    def __str__(self) -> str:
        return self.email

    class Meta: 
        managed = True
    