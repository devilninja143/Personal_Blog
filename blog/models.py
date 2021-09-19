from django.db import models

# Create your models here.

class Article_catagories(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Article(models.Model):
    img = models.ImageField(upload_to="Img/Article")
    title = models.CharField(max_length=255)
    catagories = models.ForeignKey(Article_catagories, on_delete=models.CASCADE)
    desc = models.TextField()
    date = models.DateField(auto_created=True, auto_now_add=True)

class News(models.Model):
    img = models.ImageField(upload_to="Img/News")
    title = models.CharField(max_length=255)
    desc = models.TextField()
    date = models.DateField(auto_created=True, auto_now_add=True)
    view_count = models.IntegerField(default=0)
