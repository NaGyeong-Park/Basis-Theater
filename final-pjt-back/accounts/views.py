from .serializers import ProfileSerializer
from django.shortcuts import get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from movies.models import Movie, Vote

User = get_user_model()

# @login_required
# @permission_classes([IsAuthenticated])
@api_view(['GET'])
def profile(request, username):
    user = User.objects.get(username=username)
    user_id=user.pk
    movies = Movie.objects.all().values('id', 'genre_ids')
    votes = Vote.objects.filter(user_id=user_id).values('movie_id')
    # 액션(1), 애니메이션(3), 코미디(4), 드라마(7), 공포(11), 로맨스(14)
    movie_ids=set()
    action_ids=set()
    animation_ids=set()
    comedy_ids=set()
    drama_ids=set()
    horror_ids=set()
    romance_ids=set()
    for movie in movies:
        movie_ids.add(movie['id'])
        if movie['genre_ids']==1:
            action_ids.add(movie['id'])
        if movie['genre_ids']==3:
            animation_ids.add(movie['id'])
        if movie['genre_ids']==4:
            comedy_ids.add(movie['id'])
        if movie['genre_ids']==7:
            drama_ids.add(movie['id'])
        if movie['genre_ids']==11:
            horror_ids.add(movie['id'])
        if movie['genre_ids']==14:
            romance_ids.add(movie['id'])
    vote_ids=set()
    for vote in votes:
        vote_ids.add(vote['movie_id'])
    overall_len=len(movie_ids)
    action_len=len(action_ids)
    animation_len=len(animation_ids)
    comedy_len=len(comedy_ids)
    drama_len=len(drama_ids)
    horror_len=len(horror_ids)
    romance_len=len(romance_ids)

    overall_cnt=0
    action_cnt=0
    animation_cnt=0
    comedy_cnt=0
    drama_cnt=0
    horror_cnt=0
    romance_cnt=0

    for num in vote_ids:
        overall_cnt+=1
        if num in action_ids:
            action_cnt+=1
        if num in animation_ids:
            animation_cnt+=1
        if num in comedy_ids:
            comedy_cnt+=1
        if num in drama_ids:
            drama_cnt+=1
        if num in horror_ids:
            horror_cnt+=1
        if num in romance_ids:
            romance_cnt+=1

    serializer = ProfileSerializer(user)

    return Response({
        'profile' : serializer.data,
        'overall_power' : round(overall_cnt/overall_len*100,2),
        'action_power' : round(action_cnt/action_len*100,2),
        'animation_power' : round(animation_cnt/animation_len*100,2),
        'comedy_power' : round(comedy_cnt/comedy_len*100,2),
        'drama_power' : round(drama_cnt/drama_len*100,2),
        'horror_power' : round(horror_cnt/horror_len*100,2),
        'romance_power' : round(romance_cnt/romance_len*100,2),
        })
