<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{date}}</p>
    </div>
</template>

<style>
h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {
    private title: string = "Hello, world";
    private date: string = new Date().toISOString();
}
</script>
