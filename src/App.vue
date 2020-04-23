<template>
  <div id="app">
    <Goals />
    <Timer />
    <Members />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Timer from "./components/Timer.vue";
import Members from "@/components/Members.vue";
import Goals from "@/components/Goals.vue";

@Component({
  components: {
    Goals,
    Members,
    Timer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
