<template>
  <div class="container">
    <h1 class="my-5 pt-5">{{recommend.message}}</h1>
    <h4 class="my-5">{{recommend.message2}}</h4>
    <br><br>
    <div class="row m-2 vh-100">
      <div class="col-4" v-for="movie in recommend.recommended_movies" :key="movie.pk">
        <router-link 
          :to="{ name: 'movie', params: {moviePk: movie.id} }">
          <div>
            <img id="posterRow" class="vh-25 vw-25" :src="imgUrl+movie.poster_path" alt="#">
          </div>
          <div class="m-3">
            <h4 class="align-self-center mx-2 fw-bold fs-4 mt-4 mb-4">{{movie.title}}
              <!-- ({{movie.release_date.slice(0,4)}}) -->
            <div class=" btn btn-danger ms-2" type="button">
<<<<<<< HEAD
              {{ movie.average_rate.toFixed(1)}}
=======
              {{movie.average_rate.toFixed(1)}}
>>>>>>> ddaa5a8393a2b8b70dc4c9d302f7f62d85af3609
            </div></h4>
          </div>
        </router-link>
        <div class="row">
          <div class="col-auto btn btn-light mb-3 me-1" type="button" v-for="genre in movie.genre_ids" :key="genre.pk">
            {{genre.name}}
          </div>
        </div>
        {{movie.overview.slice(0,200)}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieRecommendation',
  data() {
    return {
      imgUrl: `https://image.tmdb.org/t/p/original`,
    }
  },
  computed: {
    ...mapGetters(['recommend']),
  },
  methods : {
    ...mapActions(['fetchRecommend'])
  },
  created() {
      this.fetchRecommend()
  },
}
</script>

<style>
#posterRow{
  border-radius: 30px;
  width: 100%;
  height: 600px;
}
</style>