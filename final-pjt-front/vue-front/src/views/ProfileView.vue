<template>
  <div class="container">
    <div class="my-5">
      <h1 class="mb-5">{{ profile.profile.username }}님의 근본력</h1>
      <!-- <p class="text-secondary">평가영화 {{ profile.votesCount }} | 작성글 {{ profile.articles }}</p> -->
      <p class="mt-4 mb-1 fw-bold">근본력 : {{ profile.overall_power}}%</p>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" v-bind:style="{width : profile.overall_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">액션력 : {{profile.action_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.action_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">애니력 : {{profile.animation_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.animation_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">코미디력 : {{profile.comedy_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.comedy_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">드라마력 : {{profile.drama_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.drama_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">공포력 : {{profile.horror_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.horror_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p class="mt-4 mb-1">로맨스력 : {{profile.romance_power}}%</p>
      <div class="progress">
        <div class="progress-bar" role="progressbar" v-bind:style="{width : profile.romance_power+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <!-- <div class="mt-3"> -->
        <!-- api 자료 이름 확인 후 변경 예정 -->
        <!-- <h3 v-if="profile.votes">작성한 평가</h3>
        <ul>
          <li v-for="vote in profile.votes" :key="vote.pk"> -->
            <!-- 평점 및 평가한 영화  -->
            <!-- {{ vote.rating }}
            {{ vote.comment }}
            <router-link :to="{ name: 'movie', params: { moviePk: vote.movie_pk } }">
              {{ movie.title }}
            </router-link>
          </li>
        </ul>
      </div> -->

      <!-- <div class="mt-5">
        <h3 v-if="profile.profile.articles">작성한 글</h3>
        <ul class="list-group">
          <li v-for="article in profile.profile.articles" :key="article.pk" class="list-group-item">
            <div class="container">
              <div class="row">
                <div class="col">
                <router-link :to="{ name: 'article', params: { articlePk: article.pk } }" class="text-black text-decoration-none">
                  {{ article.title }}
                </router-link></div>
                <div class="col text-end text-secondary">{{article.created_at.substr(0,10)}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div> -->

    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile']),
    articlesCount() {
      if (this.profile.articles) {
        return this.profile.articles?.length
      } else {
        return 0
      }
    },
    votesCount() {
      if (this.profile.votes) {
        return this.profile.votes?.length
      } else {
        return 0
      }
    },
  },

  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>
