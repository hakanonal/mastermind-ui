declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue-swatches'
declare module 'vue-confetti'

declare module 'vue/types/vue' {
  import { VueConfetti } from 'vue-confetti'
  import Vue from 'vue'
  interface Vue {
    $confetti: typeof VueConfetti;
  }
}
