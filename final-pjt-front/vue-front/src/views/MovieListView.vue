<template>
<div>
  <!--main -->
  <div id="main" class="my-5" style="text-align:center;">
    <div class="">
      <img class="img-fluid text-center mb-5" src="@/assets/mainImg.png" alt="mainImg">
    </div>
  </div>

  <!-- movieList -->

  <div class="container">
    <div v-for="(genre, name) in movies" :key="genre">
      <h1 class="mt-5 fw-bold" v-if="name==='actions'">근본 액션 영화</h1>
      <h1 class="mt-5 fw-bold" v-if="name==='animations'">근본 애니메이션</h1>
      <h1 class="mt-5 fw-bold" v-if="name==='comedys'">근본 코미디 영화</h1>
      <h1 class="mt-5 fw-bold" v-if="name==='dramas'">근본 드라마</h1>
      <h1 class="mt-5 fw-bold" v-if="name==='horrors'">근본 공포 영화</h1>
      <h1 class="mt-5 fw-bold" v-if="name==='romances'">근본 로맨스 영화</h1>
      <genre-movies :movieList="genre"></genre-movies>
        
    </div>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import genreMovies from '../components/genreMovies.vue'

  export default {
    name: 'MovieList',
    components: { genreMovies },
    computed: {
      ...mapGetters(['movies']),
    },
    methods: {
      ...mapActions(['fetchMovies']),
    },
    created() {
      this.fetchMovies()
    },
  }
</script>
