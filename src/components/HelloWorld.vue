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
    import {ipcRenderer} from "electron";

    @Component
    export default class HelloWorld extends Vue {
        private show = false;

        created() {
            ipcRenderer.on('showTheStuff', (e, args) => {
                this.show = true;
            });
        }
    }
</script>
