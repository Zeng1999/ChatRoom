<template>
<div class="box">
    <div v-if="login">
    <div id="container">
    <div v-for="item in items" :key="item.id">
        <p>{{ item }}</p>
    </div></div>
    <input type="text" v-model="input.text" /><br>
    <input id="button" type="submit" value="Add Message !" @click="add"><br></div>
</div>
</template>

<script>
export default {
    name: "message-box",
    props: {
        login: Boolean,
        username: String,
        items: Array
    },
    sockets: {
    },
    methods: {
        add: function() {
            this.$socket.emit("send", {
                name: this.username,
                text: this.input.text
            });
            this.input.text = "";
        }
    },
    data() {return {
        input: {
            text: ""
        }
    };}
}
</script>

<style scoped>
#container{
    height: 500px;
    width: 800px;
    text-align: center;
}
.box{
    text-align: center;
}
</style>
