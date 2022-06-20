<template>
<div class="vh-25 vw-25">
  <!-- 글 이동 링크 (제목) -->
  <router-link 
    :to="{ name: 'movie', params: {moviePk: movie.id} }">
    <div id="box" class="">
      <img id="poster" class="h-100 w-100" :src="poster+movie.poster_path" :alt="movie.title">
    </div>
      <h5 class="m-3">{{movie.title}}
        <br>
        <div class="d-inline-flex mb-2 mt-2 me-1 fw-bold fs-6" id="rate" :style="{color: rateColor}">
                  ★{{movie.average_rate === 0 ? 0 : movie.average_rate.toFixed(1)}}
                </div>
      </h5>
  </router-link>
  </div>        
</template>

<script>
export default {
  name: 'genreMovie',
  props: { movie : Object },
  data() {
    return { 
      poster: "https://image.tmdb.org/t/p/original",
      rateColor: "gray",
    }
  },
  methods: {
    colorChange() {
      if (this.movie.average_rate) {
        this.rateColor = "red"
      }
    }
  },
  created() {
    this.colorChange()
  }
}
</script>

<style>
#box {
  border-radius: 10px;
  overflow: hidden;
  height: 400px;
}
</style>