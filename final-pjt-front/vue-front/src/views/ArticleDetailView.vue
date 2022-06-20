<template>
  <div class="container">
    <div class="my-5">
      <div class="m-2 mb-5">
        <router-link class="text-success" :to="{ name: 'articles' }">>> 목록</router-link>
      </div>
      <h1>{{ article.title }}</h1>
      <div>
        <div>
          <router-link :to="{ name: 'profile', params: { username } }" class="fw-bold text-black text-decoration-none">
            {{ username }}
          </router-link>
        </div>
        <div>{{article.created_at.slice(0,10)}} {{article.created_at.slice(11,16)}}</div>
      </div>
      <hr>

      <div class="my-5">
        <pre style="font-family:Cafe24SsurroundAir;" class="fs-6">{{ article.content }}</pre>
      </div>
      <!-- Article Edit/Delete UI -->
      <div v-if="isAuthor" class="text-end" >
        <router-link :to="{ name: 'articleEdit', params: { articlePk } }">
          <a onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">Edit</a>
        </router-link>
        |
        <a @click="deleteArticle(articlePk)" 
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
        Delete</a>
      </div>

      <!-- <div id="authorProfile">
        <router-link class="text-secondary" :to="{ name: 'profile', params: { username } }">
          {{ article.user.username }}님의 게시글 더보기 >
        </router-link>
      </div> -->
    </div>

    <!-- Comment UI -->
    <p class="fw-bold mt-5 pt-5">댓글 {{article.comments.length}}</p>
    <hr>
      <comment-list :comments="article.comments"></comment-list>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'



  export default {
    name: 'ArticleDetail',
    components: { CommentList },
    data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article', 'username']),
    },
    methods: {
      ...mapActions([
        'fetchArticle',
        'likeArticle',
        'deleteArticle',
      ])
    },
    created() {
      this.fetchArticle(this.articlePk)
    },
  }
</script>

<style></style>
