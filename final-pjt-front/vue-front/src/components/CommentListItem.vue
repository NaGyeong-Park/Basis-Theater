<template>
  <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }" class="fw-bold text-black text-decoration-none">
      {{ comment.user.username }}
    </router-link>
    <div v-if="!isEditing">
      <div class="mt-2 mb-2">{{ payload.content }} <br></div>
      <div class="fs-6 text-muted">{{comment.created_at.substr(0,10)}} {{comment.created_at.slice(11,16)}}</div>
    </div>
    <div class="text-secondary">
      <span v-if="isEditing">
        <input type="text" v-model="payload.content" required><br>
        <a @click="onUpdate" onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">Update</a> |
        <a @click="switchIsEditing" onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">Cancle</a>
      </span>
      <span v-if="currentUser.username === comment.user.username && !isEditing">
        <a @click="switchIsEditing"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
        Edit</a> |
        <a @click="deleteComment(payload)"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
        Delete</a>
      </span>
    </div>
    <hr>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
ul{
   list-style:none;
   padding-left:0px;
   }
</style>