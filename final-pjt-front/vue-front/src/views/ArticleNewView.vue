<template>
<div>
  <div class="my-5">
    <img class="w-100" src="../assets/communityText.png" alt="#">
  </div>
  <div class="container">
    <div class="my-5">
      <h1 class="my-5">새 게시글 작성하기</h1>
      <article-form :article="article" action="create"></article-form>
    </div>
  </div>
</div>
</template>

<script>
  import ArticleForm from '@/components/ArticleForm.vue'
  export default {
    name: 'AritcleNewView',
    components: { ArticleForm },
    data() {
      return {
        article: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
  }
</script>

<style></style>
