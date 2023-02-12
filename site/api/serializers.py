from rest_framework import serializers
from base.models import urlStorage

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = urlStorage
        fields = '__all__'
