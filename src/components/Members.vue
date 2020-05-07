<template>
    <div>
        <member :key="n" v-for="n in 4"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Member from "@/components/Member.vue";

    @Component({
        components: {Member}
    })
    export default class Members extends Vue {
    }
</script>
