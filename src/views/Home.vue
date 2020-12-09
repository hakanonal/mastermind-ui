<template>
  <div class="home">
    <Mastermind />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Mastermind from '@/components/Mastermind.vue' // @ is an alias to /src

@Options({
  components: {
    Mastermind
  }
})
export default class Home extends Vue {}
</script>
