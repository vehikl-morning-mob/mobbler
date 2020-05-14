<template>
  <div class="container">
    <fieldset>
      <label for="swell">Swell</label>
      <br />
      <input id="swell" type="text" placeholder="Good day">
    </fieldset>

    <br />

    <fieldset>
      <label for="swole">Swole</label>
      <br />
      <input id="swole" type="text" placeholder="Great day">
    </fieldset>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Goals extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  box-shadow: 15px 4px 54px rgba(0, 0, 0, 0.05);
  min-width: 300px;
  width: 33%;
  height: 100vh;
  padding: 2rem;
  label {
    font-weight: bold;
    margin: 0.5rem 0;
  }
  fieldset {
    margin-bottom: 1rem;
  }
}


</style>
