from django.urls import path
from . import views

urlpatterns = [
    path("signup/",views.signup),
    path("login/",views.handleLogin),
    path("add-blog/",views.addBlog),
    path("blogs/",views.getBlogs),
    path("delete/<int:id>/",views.deleteBlog),
    path('like/<int:id>/',views.likeBlog),
    path('comment/<int:id>/',views.addComment),
    path('comments/<int:id>/',views.getComments),
    path('update/<int:id>/',views.updateBlog),
    path('profile/',views.Profile),
    path("logout/",views.logoutUser),

]