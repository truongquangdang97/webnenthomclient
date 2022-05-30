import Vuex from  'vuex'
import axios from "axios";

const createStore = () =>{
    return new Vuex.Store({
        state:{
            token : null
        },
        mutations:{
            setToken(state,token){
                state.token=token
            }
        },
        actions:{
            authenticateUser(vuexContext,credentials){
                axios
                .post("http://localhost:8080/api/v1/login",this.account)
                .then((response) => {
                  console.log(response.data.accessToken)
                //   window.axios = require('axios')
                //   sessionStorage.setItem('token',response.data.accessToken);
                //   console.log(sessionStorage.getItem('token'))
                });
            }
        },
        getters:{

        }
    })
}


export default createStore;