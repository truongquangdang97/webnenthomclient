<template>
  <div>
      <label for="">User Name</label>
      <input type="text" v-model="account.username">
      <label for="">PassWord</label>
      <input type="text" v-model="account.password">
      <button class="btn btn-primary" @click="login()">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            account:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        login(){
             axios
          .post("http://localhost:8080/api/v1/login",this.account)
          .then((response) => {
            console.log(response.data.accessToken)
            window.axios = require('axios')
            sessionStorage.setItem('token',response.data.accessToken);
            console.log(sessionStorage.getItem('token'))
            //  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
          });
        }
    }
}
</script>

<style>

</style>