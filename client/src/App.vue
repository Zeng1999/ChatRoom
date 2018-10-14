<template>
    <div id="app">
        <h1>这是一个十分骚气的聊天室（仍在开发中。。。。。。）</h1><br>
        <sign></sign>
    </div>
</template>

<script>
import Sign from "./components/Sign.vue"

export default {
    name: 'app',
    components: {
        Sign
    },
    data (){
        return {
        };
    }
}
</script>

<style>
#app {
    font-family: 'Monaco', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
