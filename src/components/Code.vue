<template>
  <div>
    <span v-for="(d,index) in this.codeList" :key="index">
      <Digit :value="d"/>
    </span>
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
export default class Code extends Vue {
  @Prop({ default: 4 }) public digit_count!: number;
  @Prop({ default: 0 }) public code!: number;

  get codeList (): Array<number> {
    if (this.code === 0) {
      return Array.from({ length: this.digit_count }, () => 0).map(Number)
    }
    return Array.from(this.code.toString()).map(Number)
  }
}
</script>
