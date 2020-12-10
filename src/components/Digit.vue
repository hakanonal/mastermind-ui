<template>
  <div class="form__field">
    <div class="form__label">
      <strong>Please choose a color:</strong>
    </div>
    <div class="form__input">
      <VSwatches
        v-model="color"

        :swatches="swatches"

        row-length="6"
        shapes="circles"
        show-border
        popover-x="left"
      ></VSwatches>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import VSwatches from 'vue-swatches'

@Component({
  components: {
    VSwatches
  }
})
export default class Digit extends Vue {
  @Prop({ default: '#F64272' }) public color!: string;
  @Prop({ default () { return ['#F64272', '#F6648B', '#F493A7', '#F891A6', '#FFCCD5', ''] } }) public swatches!: Array<string>;
}
</script>
