<template>
  <nav class="container mb-3 mt-4">
    <div class="d-flex align-items-center">
      <div class="flex-grow-1">
        <router-link :to="{ name: 'movies' }">
          <img src="@/assets/근본극장.png" alt="logo" style="width:80px">
        </router-link>
      </div>

      <div class="m-2" v-if="!isLoggedIn">
        <router-link :to="{ name: 'login' }">로그인</router-link>
      </div>
      <div class="m-2" v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }">회원가입</router-link>
      </div>

      <div class="m-2" v-if="isLoggedIn">
        <router-link :to="{ name: 'recommendations' }">추천영화</router-link>
      </div>
      <div class="m-2" v-if="isLoggedIn">
        <router-link :to="{ name: 'articles' }">커뮤니티</router-link>
      </div>
      <div class="m-2" v-if="isLoggedIn">
        <router-link :to="{ name: 'profile', params: { username } }">
          <!-- {{ currentUser.username }}'s page -->
          프로필
        </router-link>
      </div>
      <div class="m-2" v-if="isLoggedIn">
        <router-link :to="{ name: 'logout' }">로그아웃</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
  }
</script>

<style>
a{
  font-weight: bold;
  color: black;
  text-decoration-line: none;
}
</style>
