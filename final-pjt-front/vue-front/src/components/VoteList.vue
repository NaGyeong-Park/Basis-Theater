<template>
  <div>
    <ul>
      <div v-for="vote in votes" :key="vote.pk">
        <vote-list-item :vote="vote">
        </vote-list-item>
      </div>
      <div class="border border-warning border-2 rounded-3 my-5 p-3">
        <h5 class="">한 줄 평가하기</h5>
        <vote-form></vote-form>
      </div>
    </ul>

  </div>
</template>

<script>
import VoteListItem from '@/components/VoteListItem'
import VoteForm from '@/components/VoteForm'


export default {
  name: 'VoteList',
  components: { VoteForm, VoteListItem },
  props: { votes: Array },
  computed: {
  }
}
</script>