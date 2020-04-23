<template>
  <div class="container">
    <label for="swell">Swell</label>
    <br />
    <input id="swell" type="text">

    <br />

    <label for="swole">Swole</label>
    <br />
    <input id="swole" type="text">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Goals extends Vue {}
</script>

<style lang="scss">
.container {
  box-shadow: 15px 4px 54px rgba(0, 0, 0, 0.05);
  width: 33%;
  height: 100vh;
}
</style>
