from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.movie_list),
    path('<int:movie_pk>/', views.movie_detail),
    path('<int:movie_pk>/votes/', views.create_vote),
    path('<int:movie_pk>/votes/<int:vote_pk>/', views.update_or_delete_vote),
    path('recommendations/', views.recommendations)
]