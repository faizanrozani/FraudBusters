from django.urls import path
from . import views
from .views import getUser, addUser, getData, addItem,getReview, addReview

urlpatterns = [
    path('', getData.as_view()),
    path('add/', addItem.as_view()),
    path('getUser/', getUser.as_view()),
    path('addUser/', addUser.as_view()),
    path('getReview/', getReview.as_view()),
    path('addReview/', addReview.as_view())
]