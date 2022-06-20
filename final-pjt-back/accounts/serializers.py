from rest_framework import serializers
from django.contrib.auth import get_user_model
from communities.models import Article

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):

    class ArticleSerializer(serializers.ModelSerializer):

        class Meta:
            model = Article
            fields = ('pk', 'title','created_at')

    articles = ArticleSerializer(many=True)

    class Meta:
        model = User
        fields = ('pk', 'username', 'email', 'articles',)