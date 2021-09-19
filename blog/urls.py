from django.urls import path
from rest_framework import views
from .views import *

urlpatterns = [
    path("article", article_api),
    path("Blog", filterd_article_api ),
    path("newsList", news_api),
    path("search_article", search_api),
    path("news_data/<str:id>/", news_data),
    path("article_data/<str:id>/", article_data)
]
