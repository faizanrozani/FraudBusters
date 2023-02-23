from rest_framework.response import Response
from rest_framework.views import APIView
from base.models import urlstorage, ExtensionUser
from .serializers import ItemSerializer, UserSerializer


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



