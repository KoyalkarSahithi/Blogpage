# import json
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate,login,logout
# from django.http import JsonResponse
# from django.shortcuts import render
# from .models import Blog
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from .models import Blog,Comment


# Create your views here.
@csrf_exempt
def signup(request):
    if request.method=="POST":
        data=json.loads(request.body)
        User.objects.create_user(
            username=data['username'],
            password=data['password'])
        return JsonResponse({'message':'signup successful'})
    return JsonResponse({'message':'Invalid'})
    
@csrf_exempt
def handleLogin(request):
    if request.method=="POST":
        data=json.loads(request.body)
        user=authenticate(
            username=data['username'],
            password=data['password'])
        if user:
            login(request,user)
            return JsonResponse({'message':'login success'})
    return JsonResponse({'message':'Invalid'})

@csrf_exempt
def addBlog(request):
    print("USER:", request.user)
    if not request.user.is_authenticated:
        return JsonResponse(
            {'message':'Login required'},
            status=403
        )
    Blog.objects.create(
        user=request.user,
        title=request.POST['title'],
        content=request.POST['content'],
        image=request.FILES.get('image'))
    return JsonResponse({'message':'added'})
    # data=json.loads(request.body)
    # Blog.objects.create(
    #     user=request.user,
    #     title=data['title'],
    #     content=data['content'])
    # return JsonResponse({'message':'added'})

@csrf_exempt
def getBlogs(request):
    blogs=list(Blog.objects.all().values('id','title','content','likes','image'))
    return JsonResponse(blogs,safe=False)

@csrf_exempt
def deleteBlog(request,id):
    Blog.objects.get(id=id).delete()
    return JsonResponse({'message':'deleted'})

@csrf_exempt
def likeBlog(request,id):
    blog=Blog.objects.get(id=id)
    blog.likes+=1
    blog.save()
    return JsonResponse({'likes':blog.likes})

@csrf_exempt
def addComment(request,id):
    if not request.user.is_authenticated:
        return JsonResponse({'message':'login required'},status=403)
    data=json.loads(request.body)
    blog=Blog.objects.get(id=id)
    Comment.objects.create(user=request.user,blog=blog,text=data['text'])
    return JsonResponse({'message':'comment added'})

@csrf_exempt
def getComments(request,id):
    comments=list(Comment.objects.filter(blog_id=id).values('text','user__username'))
    return JsonResponse(comments,safe=False)

@csrf_exempt
def updateBlog(request,id):
    data=json.loads(request.body)
    blog=Blog.objects.get(id=id)
    blog.title=data['title']
    blog.content=data['content']
    blog.save()
    return JsonResponse({'message':'updated'})

@csrf_exempt
def Profile(request):
    if not request.user.is_authenticated:
        return JsonResponse({'message':'Login REquired'},status=403)
    blogs=list(Blog.objects.filter(user=request.user).values('id','title'))
    user_data={
        'username':request.user.username,
        'date_joined':str(request.user.date_joined)
    }
    return JsonResponse({
        'user':user_data,
        'blogs':blogs
    })

@csrf_exempt
def logoutUser(request):
    logout(request)
    return JsonResponse({'message':'logout'})