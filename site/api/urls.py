from django.urls import path
from . import views
from .views import getUser, addUser

urlpatterns = [
    path('', views.getData),
    path('add/', views.addItem),
    path('getUser/', getUser.as_view()),
    path('addUser/', addUser.as_view())
]