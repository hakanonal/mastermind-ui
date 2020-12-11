<template>
  <div class="hello">
    <h1> Mastermind </h1>
    <div v-for="chance in chances" v-bind:key="chance">
      <Code />
      {{ red_count }}
      {{ white_count }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Code from '@/components/Code.vue'
import axios from 'axios'

@Component({
  components: {
    Code
  }
})
export default class Mastermind extends Vue {
  @Prop({ default: 4 }) public digit_count!: number;
  @Prop({ default: 12 }) public chances!: number;

  public apiResult = {}
  public white_count = 0;
  public red_count = 0;

  public refreshGameState () {
    axios
      .get('http://localhost:5000/')
      .then((response) => {
        console.log(response)
        this.apiResult = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  mounted () {
    this.refreshGameState()
  }
}
</script>
