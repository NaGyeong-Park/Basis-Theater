<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <div class="container">
      <p class="fw-bold row mb-0">{{currentUser.username}}</p>
      <input class="row w-100" placeholder="댓글을 남겨보세요" type="text" id="comment" v-model="content" required>
      <button class="row justify-content-end"
      onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
      Comment</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['article','currentUser']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ articlePk: this.article.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style>
.comment-list-form {
  border: 1px solid gray;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
}
#comment {
  border: none;
}
</style>