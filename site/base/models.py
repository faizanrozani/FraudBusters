from django.db import models

# Create your models here.

class urlstorage(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=1000)
    reportText = models.CharField(max_length=400)
    created_at = models.DateTimeField(auto_now_add=True)

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

class ReviewStorage(models.Model):
    rating = models.CharField(max_length=14)
    rating_reason = models.CharField(max_length = 40)

    def __str__(self) -> str:
        return self.rating