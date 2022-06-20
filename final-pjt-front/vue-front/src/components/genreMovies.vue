<template>
<div class="container">
  <div class="genre-movies">
  <div class="container pt-4 pb-5">
      <div class="row">
      <genre-movie class="col-lg-3 " v-for="movie in movieList" :key="movie.pk" :movie="movie"></genre-movie>
      </div>
  </div>
  </div>

</div>
</template>

<script>
import genreMovie from './genreMovie.vue'

export default {
  name: 'genreMovies',
  props: { movieList : Array },
  components: { genreMovie },
}
</script>

<style>
#poster{
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.5s ease-in-out;
}
#poster:hover{
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}
</style>