from django.contrib import admin
from .models import urlstorage
from .models import ExtensionUser

# Register your models here.
admin.site.register(urlstorage)
admin.site.register(ExtensionUser)