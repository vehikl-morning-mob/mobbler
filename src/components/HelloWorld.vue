<template>
    <div class="hello">
        <button @click="show = true">click me</button>
        <div v-if="show">
            TACOOOS
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class HelloWorld extends Vue {
        private show = false;
    }
</script>
