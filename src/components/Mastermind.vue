<template>
  <div class="hello">
    <h1> Mastermind </h1>
    <div class="header">
      <a-button
        type="primary"
        @click="resetGameState()"
      >
        Restart
      </a-button>
    </div>
    <div v-for="(chance,index) in apiResult.state" v-bind:key="index">
      <Code
        :code="chance[2]"
        :redCount="chance[0]"
        :whiteCount="chance[1]"
        :disabled="index+1!==apiResult.chance || apiResult.end"
        :digitCount="digitCount"
        @codeSelected="play"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Code from '@/components/Code.vue'
import axios from 'axios'
import { Button } from 'ant-design-vue'

@Component({
  components: {
    Code,
    Button
  }
})
export default class Mastermind extends Vue {
  @Prop({ default: 4 }) public digitCount!: number;
  @Prop({ default: 12 }) public chances!: number;

  public apiResult = {}
  public endPoint = 'http://localhost:5000/'

  public refreshGameState () {
    axios
      .get(this.endPoint)
      .then((response) => {
        this.apiResult = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public resetGameState () {
    axios
      .get(this.endPoint + 'reset')
      .then((response) => {
        this.apiResult = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public playChance (code: number) {
    axios
      .get(this.endPoint + 'play/' + code)
      .then((response) => {
        this.apiResult = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  mounted () {
    this.refreshGameState()
  }

  play (playedCode: number) {
    this.playChance(playedCode)
  }
}
</script>

<style>
.header
{
  margin-bottom: 10px;
}
</style>
