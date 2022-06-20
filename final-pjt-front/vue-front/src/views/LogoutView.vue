<template>
  <div class="container">
    <h1 class="mt-5">다시 만나요!</h1>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    methods: {
      ...mapActions(['logout'])
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    created() {
      // 로그인 되어있으면 : 토큰이 유효하면 : 로그아웃
      if (this.isLoggedIn) {
        setTimeout(() => this.logout(), 2000);
        // this.logout()
      } else {
        alert('잘못된 접근')
        this.$router.back()
      }
    },
  }
</script>

<style></style>
