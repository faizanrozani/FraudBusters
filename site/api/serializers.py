from rest_framework import serializers
from base.models import urlstorage
from base.models import ExtensionUser

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = urlstorage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtensionUser
        fields = '__all__'

