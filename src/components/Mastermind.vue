<template>
  <div class="hello">
    <h1> Mastermind </h1>
    <Digit/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Digit from '@/components/Digit.vue'

@Options({
  components: {
    Digit
  }
})
export default class HelloWorld extends Vue {

}
</script>
