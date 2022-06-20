<template>
  <div>
    <div id="main" class="my-5" style="text-align:center;">
    <div id="movieBox">
      <div id="backImg" class="position-absolute mh-100">
        <img class="img-fluid opacity-25" :src="imgUrl+movie.backdrop_path" alt="#">
      </div>
      <div class="d-flex p-5 justify-content-md-center" id="detailBox">
            <div class="row">
              <img id="posterRow" class="h-100 w-100" :src="imgUrl+movie.poster_path" alt="#">
            </div>
            <div class="text-white col-4 m-5">
              <h1>{{ movie.title }} ({{ movie.release_date.slice(0,4) }})
                <div class="d-inline-flex btn btn-danger mb-2 me-1" type="button">
                  {{movie.average_rate.toFixed(1)}}
                </div></h1>
              <div class="d-flex">
                <div class="d-inline-flex btn btn-dark mb-2 me-1" type="button" v-for="genre in movie.genre_ids" :key="genre.id">
                  {{genre.name}}
                </div>
              </div>
              <p>{{ movie.overview.slice(0,250) }}...</p>
              <p></p>
            </div>
      </div>
    </div>
    </div>

    <div id="votes" class="container">
      <h1 class="mb-4">유저들의 평가</h1>
        <vote-list :votes="movie.vote_set" :movie="movie" ></vote-list>
    </div>

  </div>
    <!-- 더 추가해야함 -->
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import VoteList from '../components/VoteList.vue'

  export default {
    name: 'MovieDetail',
    components: { VoteList },
    computed: {
      ...mapGetters(['movie', 'poster']),
    },
    data() {
      return {
        moviePk: this.$route.params.moviePk,
        imgUrl: `https://image.tmdb.org/t/p/original`,
      }
    },
    methods: {
      ...mapActions([
        'fetchMovie',
      ]),
    },
    created() {
      setTimeout(() => this.fetchMovie(this.moviePk), 300);
      // this.fetchMovie(this.moviePk)
    },
  }
</script>

<style>
#movieBox{
  position: relative;
  height: 500px;
  overflow: hidden;
  background-color: black;
}
#detailBox{
  text-align: left;
  position: absolute;
	display:block;
	width: auto;
	height:500px;
}
#backImg{
  height: 100%;
}
#posterRow{
  border-radius: 30px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, .8));
  width: 100%;
  height: 100%;
}
</style>
