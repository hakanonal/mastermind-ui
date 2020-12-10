<template>
  <div class="hello">
    <h1> Mastermind </h1>
    <div v-for="chance in param_chances" v-bind:key="chance">
      <template v-for="digit in param_digit">
        <Digit :key="(chance*10)+digit" />
      </template>
      {{ red_count }}
      {{ white_count }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Digit from '@/components/Digit.vue'

@Component({
  components: {
    Digit
  }
})
export default class Mastermind extends Vue {
  @Prop({ default: 4 }) public param_digit!: number;
  @Prop({ default: 12 }) public param_chances!: number;
  public white_count = 0;
  public red_count = 0;
}
</script>
