<template>
  <div>
    {{ timer }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Timer extends Vue {
  private timer = 10;
  private timerInterval: any;

  created() {
    this.timerInterval = setInterval(this.reduceTime, 1000);
  }

  reduceTime() {
    this.timer--;
    if (this.timer === 0) {
      this.$emit("timesUp", true);
      clearInterval(this.timerInterval);
    }
  }
}
</script>
