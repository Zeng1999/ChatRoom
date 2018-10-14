<template>
    <div class="box">
        <message-box :login="login" :username="room.username" :items="message"></message-box><br>
        <div v-if="!login">
            Username:<input type="text" v-model="input.name"/><br>
            Password:<input type="password" v-model="input.pass"/><br>
            <input type="submit" value="Sign up" @click="signup" /> or 
            <input type="submit" value="Sign in" @click="signin" />
        </div>
        <div v-if="login">
        <div>
            <p>Current user : {{ room.username }}</p>
            <p>Number of people online : {{ room.onlineCount }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import MessageBox from "./MessageBox.vue";

export default {
    name: "sign",
    components: {
        MessageBox
    },
    methods: {
        signin: async function() {
            await this.sign("/signin");
        },

        signup: async function() {
            await this.sign("/signup");
        },

        sign: async function(path) {
            if(this.input.name == "") {
                alert("User name can't be empty !");
                return;
            }
            if(this.input.pass == "") {
                alert("Password can't be empty !");
                return;
            }
            if(this.input.name.length > 40) {
                alert("User name is too long !");
                return;
            }
            if(this.input.pass.length > 40) {
                alert("Password is too long !");
                return;
            }
            var res = await this.$axios.post(this.url + path, {
                name: this.input.name,
                pass: this.input.pass
            });
            console.log(res.data.Message);
            if(res.data.Ok) {
                this.login = true;
                this.room.username = this.input.name;
                var that = this;
                this.$socket.on("receive", function(msg) {
                    if(that.message.length > 20) {
                        that.message = [];
                    }
                    that.message.push(msg.name + " : " + msg.text);
                });
                this.$socket.on("important", function(msg) {
                    that.room.onlineCount = msg.onlineCount;
                });
            } else {
                alert(res.data.Message);
            }
        }
    },
    data() {return {
        url: "http://192.168.0.111:7001",
        room: {
            id: 123,
            onlineCount: 0,
            username: ""
        },
        input: {
            name: "",
            pass: ""
        },
        message: [
            "Send a message !"
        ],
        login: false
    };}
}
</script>

<style>
#box{
    text-align: center;
}
</style>
