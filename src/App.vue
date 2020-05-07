<template>
    <div id="app" class="grid">
        <div v-show="false">
            <label for="timerId">Timer ID</label>
            <input id="timerId" v-model="timerId" type="text"/>
            <input type="button" value="join/ create" @click="joinOrCreateTimer"/>
        </div>

        <Goals class="goals"/>
        <Timer class="timer"/>
        <Members class="members"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Timer from "./components/Timer.vue";
    import Members from "@/components/Members.vue";
    import Goals from "@/components/Goals.vue";
    import Service from "./services/websocket";

    @Component({
        components: {
            Goals,
            Members,
            Timer
        }
    })
    export default class App extends Vue {
        private timerId = "";

        joinOrCreateTimer(): void {
            new Service(this.timerId, this.tokenHandler);
        }

        tokenHandler(data: any) {
            console.log('data from ws', data);
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .grid {
        display: grid;
        grid-template-areas: 'goals-list timer support-buttons' 'goals-list users-list support-buttons';
        grid-template-rows: 10rem 1fr;
    }

    .timer {
        grid-area: timer;
    }

    .goals {
        grid-area: goals-list;
    }

    .members {
        grid-area: users-list;
    }
</style>
