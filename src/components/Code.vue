<template v-for="d in digit_count">
  <Digit />
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
}
</script>
