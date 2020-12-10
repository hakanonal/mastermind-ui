<template>
  <div class="hello">
    <h1> Mastermind </h1>
    <Digit/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Digit from '@/components/Digit.vue'

@Component({
  components: {
    Digit
  }
})
export default class Mastermind extends Vue {

}
</script>
