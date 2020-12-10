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

@Component({
  components: {
    Code
  }
})
export default class Mastermind extends Vue {
  @Prop({ default: 4 }) public digit_count!: number;
  @Prop({ default: 12 }) public chances!: number;
  public white_count = 0;
  public red_count = 0;
}
</script>
