<template>
<div>
  <div class="my-5">
    <img class="w-100" src="../assets/communityText.png" alt="#">
  </div>
  <div id="body" class="container">
    <div id="community">
      <br>
      <div class="row">
        <div class="col">총 {{articles.length}}개의 게시물이 있습니다.</div>
        <div class="col text-end m-0" v-if="isLoggedIn">
          <router-link :to="{ name: 'articleNew' }" class="text-secondary text-decoration-none">작성하기</router-link>
        </div>
      </div>
      <hr>
      <div class="container" v-for="article in articles" :key="article.pk">
        <div class="m-3">
          <!-- 글 이동 링크 (제목) -->
          <h3>
          <router-link class="fw-bold text-black text-decoration-none"
            :to="{ name: 'article', params: {articlePk: article.pk} }">
            {{ article.title }} <span class="fs-4">[{{ article.comments.length }}]</span>
          </router-link></h3>
          <div class="my-3">{{article.content.slice(0,20)}}</div>
          <p class="text-secondary ">
          <!-- 작성자 -->          
          <router-link :to="{ name: 'profile', params: { username : article.user.username } }">
            {{ article.user.username }}
          </router-link>
          | {{article.created_at.substr(0,10)}}
          </p><hr>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ArticleList',
    computed: {
      ...mapGetters(['articles', 'isLoggedIn'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style>
#body {
  height: 800px;
}
  </style>
