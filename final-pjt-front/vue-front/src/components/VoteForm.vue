<template>
<div>
  <form @submit.prevent="onSubmit" class="vote-list-form">
    <span @input.prevent="startRate" class="star" id="starSpan">
    ★★★★★
    <span :style="{ width : starValue }">★★★★★</span>
    <input type="range" name="rate" id="rate" class="my-2" v-model="rate" value="1" step="1" min="0" max="10">
    </span>
    <br>
    <input id="inputContent" class="mb-3" type="text" placeholder="별점이 없으면 평가가 지워집니다." v-model="content">
    <button class="btn btn-warning mx-3 mb-1">vote</button>
  </form>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VoteForm',
  data() {
    return {
      rate : 0,
      content: '',
      moviePk: 0,
      starValue: 0,
    }
  },
  computed: {
    ...mapGetters(['currentUser','myrate','movie']),
  },
  methods: {
    ...mapActions(['createVote','fetchMovie']),
    getMovie() {
      this.moviePk = this.$route.params.moviePk;
    },
    onSubmit() {
      this.createVote({ moviePk: this.moviePk, rate: this.rate, content: this.content, })
      this.rate = 0
      this.content = ''
      this.starValue = 0
    },
    startRate() {
      this.starValue = this.rate*10 + '%'
    },
  },
  created() {
    this.getMovie()
  },
}
</script>

<style>
.comment-list-form {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
  .star {
    position: relative;
    font-size: 2rem;
    color: #ddd;
  }
  
  .star input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .star span {
    width: 0;
    position: absolute; 
    left: 0;
    color: red;
    overflow: hidden;
    pointer-events: none;
  }
  #inputContent {
    width: 300px;
  }
</style>