<template>
  <div>
      <h1>Giỏ hàng</h1>
      <div>
          <table class="table">
              <thead>
                  <tr>
                      <th>Mã đơn hàng</th>
                      <th>Tên sản phẩm </th>
                      <th>Ảnh</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Trạng thái</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item,index) in dataCartItem " :key="index">
                        <th>{{item.id.shoppingCartId}}</th>
                      <th>{{item.productName}}</th>
                      <th>{{item.productThumbnail}}</th>
                      <th>{{item.unitPrice}}</th>
                      <th>{{item.quantity}}</th>
                      <th>{{item.cartItemStatus}}</th>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            dataCartItem:[]
        }
    },
    methods:{
        callApiCartItem() {
        axios
          .get("http://localhost:8080/api/v1/cartItems")
          .then((response) => {
            this.dataCartItem = response.data.content;
            console.log(this.dataCartItem)
          });
      },
      productWithToken(){
      let token = sessionStorage.getItem("token");
      console.log(token)
      if( token ){
        window.axios = require('axios')
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
         this.callApiCartItem()
      } else{
        this.$router.push("/login")
      }
    },
      
    },
    created(){
        this.callApiCartItem()
    },
     mounted(){
      this.productWithToken();  
  },
}
</script>

<style>

</style>