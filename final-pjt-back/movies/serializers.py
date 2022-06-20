from rest_framework import serializers
from .models import Movie, Vote, Genre
from django.db.models import Avg

class VoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vote
        fields = '__all__'

class GenreNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class MovieListSerializer(serializers.ModelSerializer):

    average_rate = serializers.SerializerMethodField()
    genre_ids = GenreNameSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'
    
    def get_average_rate(self, obj):
        average = obj.vote_set.all().aggregate(Avg('rate')).get('rate__avg')
        if average == None:
            return 0.0
        return average

class MovieDetailSerializer(serializers.ModelSerializer):

    vote_set = VoteSerializer(many=True, read_only=True)
    vote_count = serializers.IntegerField(source='vote_set.count', read_only=True)
    average_rate = serializers.SerializerMethodField()
    genre_ids = GenreNameSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'
    
    def get_average_rate(self, obj):
        average = obj.vote_set.all().aggregate(Avg('rate')).get('rate__avg')
        if average == None:
            return 0
        return average

class VoteSerializer(serializers.ModelSerializer):
    
    vote_set = VoteSerializer(many=True, read_only=True)
    class Meta:
        model = Vote
        fields = '__all__'
        read_only_fields = ('movie', 'user',)