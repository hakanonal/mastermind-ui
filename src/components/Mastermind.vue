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
      <a-alert
        v-if="connectionErrorMessage!=''"
        type="error"
        :message="connectionErrorMessage"
      />
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
import { ApiResult } from '@/models/interfaces/ApiResult'

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Code from '@/components/Code.vue'
import axios from 'axios'
import { Button } from 'ant-design-vue'

const connectingToAPIText = 'Connecting to API...'

@Component({
  components: {
    Code,
    Button
  }
})
export default class Mastermind extends Vue {
  @Prop({ default: 4 }) public digitCount!: number;
  @Prop({ default: 12 }) public chances!: number;

  public apiResult: ApiResult = {};
  public endPoint = process.env.VUE_APP_END_POINT
  public connectionErrorMessage = connectingToAPIText

  public refreshGameState () {
    this._callAPI('', '')
  }

  public resetGameState () {
    this._callAPI('reset', '')
    this.$confetti.stop()
  }

  public async playChance (code: number) {
    this.connectionErrorMessage = connectingToAPIText
    let stateCheck: ApiResult = {}
    await axios
      .get(this.endPoint)
      .then((response) => {
        stateCheck = response.data
        this.connectionErrorMessage = ''
      })
      .catch((error) => {
        console.log(error)
        this.connectionErrorMessage = error.message
      })
    if (JSON.stringify(stateCheck) === JSON.stringify(this.apiResult)) {
      this._callAPI('play/', String(code))
    } else {
      this.connectionErrorMessage = 'Another playerer is playing! Please come another time'
      this.apiResult = stateCheck
    }
  }

  protected _callAPI (route: string, param: string) {
    this.connectionErrorMessage = connectingToAPIText
    axios
      .get(this.endPoint + route + param)
      .then((response) => {
        this.apiResult = response.data
        this.connectionErrorMessage = ''
      })
      .catch((error) => {
        console.log(error)
        this.connectionErrorMessage = error.message
      })
  }

  mounted () {
    this.refreshGameState()
  }

  play (playedCode: number) {
    this.playChance(playedCode)
  }

  @Watch('apiResult')
  protected _checkEndOfGame () {
    if (this.apiResult.end === true && this.apiResult.chance === this.chances) {
      this.connectionErrorMessage = 'You have lost the game!'
    } else if (this.apiResult.end === true) {
      this.$confetti.start()
    }
  }
}
</script>

<style>
.header
{
  margin-bottom: 10px;
}
.header > *
{
  margin-bottom: 10px;
}
</style>
