<template>
  <div class="home">
    <Mastermind />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Mastermind from '@/components/Mastermind.vue' // @ is an alias to /src

@Component({
  components: {
    Mastermind
  }
})
export default class Home extends Vue {}
</script>
