<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="title" class="form-label">글 제목</label>
      <input v-model="newArticle.title" type="text" class="form-control" id="title" placeholder="제목을 입력해주세요" required>
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">글 내용</label>
      <textarea v-model="newArticle.content" class="form-control" id="content"  placeholder="내용을 입력해주세요" rows="3" required></textarea>
    </div>
    <div class="text-end">
      <button class="btn btn-outline-secondary">{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
    props: {
      article: Object,
      action: String,
    },
    data() {
      return {
        newArticle: {
          title: this.article.title,
          content: this.article.content,
        }
      }
    },

    methods: {
      ...mapActions(['createArticle', 'updateArticle']),
      onSubmit() {
        if (this.action === 'create') {
          this.createArticle(this.newArticle)
        } else if (this.action === 'update') {
          const payload = {
            articlePk: this.article.pk,
            ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
    },
  }
</script>

<style></style>
