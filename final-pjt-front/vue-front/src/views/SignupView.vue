<template>
  <div class="container">
    <h1 class="mt-5">회원가입</h1>

    <account-error-list v-if="authError"></account-error-list>

    <form @submit.prevent="signup(credentials)">
      <div>
        <label for="username">아이디  </label>
        <input  v-model="credentials.username" type="text" id="username" class="mb-1 mt-4" style="margin-left:80px;" required/>
      </div>
      <div>
        <label for="password1">비밀번호  </label>
        <input v-model="credentials.password1" type="password" id="password1" class="my-1" style="margin-left:65px;" required />
      </div>
      <div>
        <label for="password2">비밀번호 확인 </label>
        <input v-model="credentials.password2" type="password" id="password2" class="mt-1 mb-4" style="margin-left:30px;" required />
      </div>
      <div>
        <button>회원가입</button>
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style></style>
