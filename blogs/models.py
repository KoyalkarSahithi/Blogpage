from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Blog(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    content=models.TextField()
    image=models.ImageField(upload_to='blog_images/',null=True,blank=True)
    likes=models.IntegerField(default=0)
    created_at=models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.title


class Comment(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    blog=models.ForeignKey(Blog,on_delete=models.CASCADE)
    text=models.TextField()