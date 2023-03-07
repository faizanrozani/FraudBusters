from django.contrib import admin
from .models import urlstorage
from .models import ExtensionUser
from .models import ReviewStorage

# Register your models here.
admin.site.register(urlstorage)
admin.site.register(ExtensionUser)
admin.site.register(ReviewStorage)