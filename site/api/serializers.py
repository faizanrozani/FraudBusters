from rest_framework import serializers
from base.models import urlstorage
from base.models import ExtensionUser
from base.models import ReviewStorage

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = urlstorage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtensionUser
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewStorage
        fields = '__all__'