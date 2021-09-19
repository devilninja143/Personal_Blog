from django.db.models import fields
from rest_framework.fields import ReadOnlyField
from rest_framework.relations import StringRelatedField
from .models import *
from rest_framework import serializers

class Article_catagoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article_catagories
        fields = "__all__"

class ArticleSerializer(serializers.ModelSerializer):
    catagory_name = serializers.StringRelatedField(source="catagories.name")
    class Meta:
        model = Article
        fields = "__all__"

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"