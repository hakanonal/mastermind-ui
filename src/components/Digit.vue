<template>
  <span>
    <VSwatches
      v-model="color"
      :swatches="swatches"
      row-length="6"
      shapes="circles"
      show-border
      show-labels
      popover-x="left"
      :trigger-style='{ borderWidth: "1px", borderStyle: "solid", borderColor: "black", marginRight: "5px" }'
    ></VSwatches>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VSwatches from 'vue-swatches'

@Component({
  components: {
    VSwatches
  }
})
export default class Digit extends Vue {
  public color? = '#FFFFFF';
  public swatches = [
    {
      color: '#F64272',
      showBorder: true,
      label: '1'
    },
    {
      color: '#F64271',
      showBorder: true,
      label: '2'
    },
    {
      color: '#F6648B',
      showBorder: true,
      label: '3'
    },
    {
      color: '#F493A7',
      showBorder: true,
      label: '4'
    },
    {
      color: '#F891A6',
      showBorder: true,
      label: '5'
    },
    {
      color: '#FFCCD5',
      showBorder: true,
      label: '6'
    }];

  get value () {
    const selectedColor = this.swatches.find((element) => { return element.color === this.color })
    if (selectedColor === undefined) {
      return '0'
    }
    return selectedColor.label
  }

  set value (v) {
    const givenColor = this.swatches.find((element) => { return element.label === v })?.color
    if (givenColor === undefined) {
      this.color = '#FFFFFF'
    } else {
      this.color = givenColor
    }
  }
}
</script>
