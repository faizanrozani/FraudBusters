from django.urls import path
from . import views
from .views import getUser, addUser, getData, addItem

urlpatterns = [
    path('', getData.as_view()),
    path('add/', addItem.as_view()),
    path('getUser/', getUser.as_view()),
    path('addUser/', addUser.as_view())
]