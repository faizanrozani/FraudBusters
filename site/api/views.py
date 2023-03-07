from rest_framework.response import Response
from rest_framework.views import APIView
from base.models import urlstorage, ExtensionUser, ReviewStorage
from .serializers import ItemSerializer, UserSerializer, ReviewSerializer


class getData(APIView):
    def get(self, request):
        items = urlstorage.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
class addItem(APIView):
    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class getUser(APIView):
    def get(self, request):
        users = ExtensionUser.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
        
class addUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class addReview(APIView):
    def post(self, request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class getReview(APIView):
    def get(self, request):
        reviews = ReviewStorage.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
