<template>
  <div :class="{disabled: disabled}">
    <span v-for="(d,index) in this.codeList" :key="index">
      <Digit
        :value="d"
        :index="index"
        :disabled="disabled"
        @digitSelected="processTheSelectedDigit"
      />
    </span>
    <span class="feedback">
      {{ redCount }}
      +
      {{ whiteCount }}
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
  @Prop({ default: 4 }) public digitCount!: number;
  @Prop({ default: 0 }) public code!: number;
  @Prop({ default: 0 }) public redCount!: number;
  @Prop({ default: 0 }) public whiteCount!: number;
  @Prop({ default: false }) public disabled!: boolean;

  public selectedCodeList!: Array<number>;

  get codeList (): Array<number> {
    this.selectedCodeList = Array.from({ length: this.digitCount }, () => 0).map(Number)
    if (this.code === 0) {
      return Array.from({ length: this.digitCount }, () => 0).map(Number)
    }
    return Array.from(this.code.toString()).map(Number)
  }

  processTheSelectedDigit (digit: { value: number; index: number }) {
    this.selectedCodeList[digit.index] = digit.value
    if (!this.hasAnyZero(this.selectedCodeList)) {
      this.$emit('codeSelected', Number(this.selectedCodeList.join('')))
    }
  }

  hasAnyZero (arrayToCheck: Array<number>) {
    for (let i = 0; i < arrayToCheck.length; i++) {
      if (arrayToCheck[i] === 0) {
        return true
      }
    }
    return false
  }
}
</script>

<style scoped>
.disabled
{
  opacity: 30%;
}
.feedback
{
  margin-left: 10px;
  font-size: 30pt;
}
</style>
