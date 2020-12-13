<template>
  <span>
    <VSwatches
      v-model="color"
      :swatches="swatches"
      row-length="3"
      shapes="circles"
      show-border
      show-labels
      popover-x="left"
      :trigger-style='{ borderWidth: "1px", borderStyle: "solid", borderColor: "black", marginRight: "5px" }'
      :disabled="disabled"
      @close="getSelectedDigit()"
    ></VSwatches>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import VSwatches from 'vue-swatches'

@Component({
  components: {
    VSwatches
  }
})
export default class Digit extends Vue {
  @Prop({ type: Number }) public value!: number
  @Prop({ type: Number }) public index!: number
  @Prop({ default: false }) public disabled!: boolean;
  public color? = '#FFFFFF';
  public swatches = [
    {
      color: '#FF0000',
      showBorder: true,
      label: '1'
    },
    {
      color: '#00FF00',
      showBorder: true,
      label: '2'
    },
    {
      color: '#0000FF',
      showBorder: true,
      label: '3'
    },
    {
      color: '#FFFF00',
      showBorder: true,
      label: '4'
    },
    {
      color: '#00FFFF',
      showBorder: true,
      label: '5'
    },
    {
      color: '#FF00FF',
      showBorder: true,
      label: '6'
    }];

  get valueLocal (): number {
    const selectedColor = this.swatches.find((element) => { return element.color === this.color })
    if (selectedColor === undefined) {
      return 0
    }
    return Number(selectedColor.label)
  }

  set valueLocal (v: number) {
    const givenColor = this.swatches.find((element) => { return Number(element.label) === this.value })?.color
    if (givenColor === undefined) {
      this.color = '#FFFFFF'
    } else {
      this.color = givenColor
    }
  }

  mounted () {
    this.valueLocal = this.value
  }

  @Watch('value')
  onValueChanged () {
    this.valueLocal = this.value
  }

  getSelectedDigit () {
    this.$emit('digitSelected', { value: this.valueLocal, index: this.index })
  }
}

</script>
