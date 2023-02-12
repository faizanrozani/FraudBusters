from django.db import models

# Create your models here.

class urlStorage(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=1000)

    def __str__(self) -> str:
        return self.name