<template>
<div class="container">
  <div class="account-error-list">
    <p v-for="(errors, field) in authError" :key="field">
      {{field}}
      <ul>
        <li v-for="(error, idx) in errors" :key="idx">
          {{error}}
        </li>
      </ul>
    </p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AccountErrorList',
  computed : {
    ...mapGetters(['authError'])
  },
}
</script>

<style>

</style>