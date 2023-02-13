from rest_framework import serializers
from base.models import urlstorage

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = urlstorage
        fields = '__all__'
