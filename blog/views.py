
from re import A
from typing import List
from django.core import paginator
from django.db.models import manager
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator, EmptyPage
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils.datastructures import MultiValueDictKeyError
from .models import *
from .serializer import *

# Create your views here.
@api_view(["GET"])
def article_api(request):
    article = Article.objects.all()
    serializer = ArticleSerializer(article, many=True)
    return Response(serializer.data, status=200)

@api_view(["GET"])
def filterd_article_api(request):
    if request.method == "GET":
        page_no = request.GET["page"]
        catagory = request.GET["catagories"]
        if catagory != "All":
            article = Article.objects.filter(catagories=catagory).order_by("date")
        else:
            article = Article.objects.all().order_by("date")
        all_catagories = Article_catagories.objects.all()
        serializer2 = Article_catagoriesSerializer(all_catagories, many=True)
        paginate = Paginator(article, 6)
        paginated = paginate.page(page_no)
        page_num = paginate.num_pages
        serializer = ArticleSerializer(paginated, many=True)
        return Response({"article": serializer.data, "article2": serializer2.data, "page_number": page_num}, status=200)


@api_view(["GET"])
def news_api(request):
    page = request.GET["page"]
    news = News.objects.all().order_by("date")
    news2 = News.objects.all().order_by("date")
    paginator = Paginator(news, 6)
    paginated = paginator.page(page)
    page_number = paginator.num_pages
    serializer = NewsSerializer(paginated, many=True)
    serializer2 = NewsSerializer(news2, many=True)
    return Response({"news": serializer.data, "news2": serializer2.data , "page_number": page_number}, status=200)

@api_view(["GET"])
def search_api(request):
    if request.method == "GET":
        try:
            page = request.GET["page"]
        except MultiValueDictKeyError:
            page = 1
        try:
            page2 = request.GET["page2"]
        except MultiValueDictKeyError:
            page2 = 1
        searchData = request.GET["searchData"]
        article = Article.objects.filter(title__icontains=searchData).order_by("date")
        paginator = Paginator(article, 6)
        paginated = paginator.page(page)
        page_number1 = paginator.num_pages
        serializer = ArticleSerializer(paginated, many=True)
        news = News.objects.filter(title__icontains=searchData).order_by("date")
        paginator2 = Paginator(news, 6)
        paginated2 = paginator2.page(page2)
        page_number2 = paginator2.num_pages
        serializer2 = NewsSerializer(paginated2, many=True)
        print("search="+searchData)
        return Response({ "article": serializer.data, "news": serializer2.data, "page_number": page_number1, "page_number2": page_number2  }, status=200)


@api_view(["GET"])
def news_data(request, id):
    news = News.objects.get(id=id)
    news.view_count = news.view_count + 1
    news.save()
    serializer = NewsSerializer(news, many=False)
    return Response(serializer.data, status=200)

@api_view(["GET"])
def article_data(request, id):
    article = Article.objects.get(id=id)
    related_article = Article.objects.filter(catagories=article.catagories).exclude(id=id).order_by("date")
    serializer = ArticleSerializer(article, many=False)
    serializer2 = ArticleSerializer(related_article, many=True)
    return Response({ "article": serializer.data, "article2": serializer2.data }, status=200)