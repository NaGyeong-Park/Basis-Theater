from django.urls import path
from . import views

app_name = 'communities'

urlpatterns = [
    path('', views.create_or_read_articles),
    path('<int:article_pk>/', views.update_or_delete_article),
    path('<int:article_pk>/comments/', views.create_comment),
    path('<int:article_pk>/comments/<int:comment_pk>/', views.update_or_delete_comment),
]