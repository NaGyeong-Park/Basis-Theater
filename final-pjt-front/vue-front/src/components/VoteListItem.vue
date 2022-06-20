<template>
  <div>
    
    <div v-if="!isEditing">
      <span class="star">
        ★★★★★
      <span :style="{ width : vote.rate*10 + '%' }" >★★★★★</span></span>
      <br>
    <router-link :to="{ name: 'profile', params: { username: vote.username } }" class="fw-bold text-black text-decoration-none">
      {{vote.username}}<span class="mx-2"></span>
    </router-link>
      {{vote.content}}<br>

    </div>
    <div class="text-secondary">
      <span v-if="isEditing">
        <span @input.prevent="starRate" class="star">
        ★★★★★
        <span :style="{ width : starValue }" >★★★★★</span>
        <input type="range" name="rate"  id="rate"  v-model="rate" step="1" min="0" max="10">
        </span><br>
        <input type="text" id="content" placeholder="별점이 없으면 평가가 지워집니다." v-model="content">
        <a @click="onUpdate"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">  Update</a> |
        <a @click="switchIsEditing"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">Cancle</a>
      </span>
      <span v-if="currentUser.pk === vote.user && !isEditing">
        <a @click="switchIsEditing"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
        Edit</a> |
        <a @click="deleteVote(payload)"
        onmouseover="this.style.color='orange';" onmouseout="this.style.color='';">
        Delete</a>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VoteForm  from '../components/VoteForm.vue'

export default {
  name: "VoteListItem",
  conponents: {VoteForm},
  props: { vote : Object },
  data() {
    return {
      moviePk: this.vote.movie,
      rate: this.vote.rate,
      content: this.vote.content,
      isEditing: false,
      myVote: 0,
      starValue: '',
      
      payload: { 
        moviePk: this.vote.movie,
        votePk: this.vote.id,
        rate: this.vote.rate,
        content: this.vote.content,
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser','movie']),
  },
  methods: {
    ...mapActions(['createVote','deleteVote','setVote',]),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.createVote({ moviePk: this.moviePk, rate: this.rate, content: this.content,})
      this.isEditing = false
      this.content= ''
      this.rate= ''
    },
    isVote() {
      if ( this.currentUser.pk === this.vote.user) {
        this.myVote = this.vote.rate
      }
    },
    starRate() {
      this.starValue = this.rate*10 + '%'
    },
  },
  created() {
    this.isVote()
    this.starRate()
  }

}
</script>

<style>

  .star {
    position: relative;
    font-size: 2rem;
    color: #ddd;
  }
  .star span {
    width: 0;
    position: absolute; 
    left: 0;
    color: red;
    overflow: hidden;
    pointer-events: none;
  }
  #content {
    width: 300px;
  }
</style>