<template>
  <div>
    <div class="">
      {{shoppingCartId}}
      {{productAdd.cartItemDTOSet}}
    </div>
      <h1>Danh sách sản phẩm </h1>
      <table class="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Thông tin </th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Nhu cầu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in listProduct" :key="index">
            <th>{{item.id}}</th>
            <th>{{item.name}}</th>
            <th>{{item.thumbnails}}</th>
            <th>{{item.description}}</th>
            <th>{{item.price}}</th>
            <th>{{item.status}}</th>
            <th>
              <button @click="addToCart(item.id)">Đặt hàng </button>
            </th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // middleware:['auth'],
  data(){
    return{
      shoppingCartId:'',
      dataCartItem:[],    
      listProduct:[],
      productAdd:{
        userId:"quang",
        cartItemDTOSet:[]
      }
    }
  },
  created(){
    this.callApiShoppingCart()

  },
  mounted(){
      this.productWithToken();  
  },
  methods:{
    // callApiShoppingCart(){
    //   axios
    //       .get("http://localhost:8080/api/v1/shopping-cart/get-all")
    //       .then((response) => {
    //         this.shoppingCartId = response.data[0].id
    //         this.callApiCartItem()
    //       });
    // },
    callApiShoppingCart(){
      axios
          .get("http://localhost:8080/api/v1/shopping-cart",{params: {userId: this.productAdd.userId}})
          .then((response) => {
            console.log(response.data.id)
            this.shoppingCartId = response.data.id
            this.callApiCartItem()
          });
    },
    callApiCartItem() {
        axios
          .get("http://localhost:8080/api/v1/cartItems", {params: {shoppingCartId: this.shoppingCartId}})
          .then((response) => {
            this.productAdd.cartItemDTOSet=response.data
          });
      },
    productWithToken(){
      let token = sessionStorage.getItem("token");
      console.log(token)
      if( token ){
        window.axios = require('axios')
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
         this.callApiProduct()
      } else{
        this.$router.push("/login")
      }
    },
     callApiProduct() {
        let token = sessionStorage.getItem("token");
        axios
          .get("http://localhost:8080/api/v1/products", {headers: { Authorization: `Bearer ${token}` }})
          .then((response) => {
            this.listProduct = response.data.content;
          });
      },
      addToCart(id){
        var cartItem={
          productId:"",
          quantity:1
        }
        cartItem.productId=id
        var x = this.productAdd.cartItemDTOSet.find(x=>x.productId===id);
        if(x){
          x.quantity++
        }else{
          this.productAdd.cartItemDTOSet.push(cartItem) 
        }
        axios.post("http://localhost:8080/api/v1/shopping-cart",this.productAdd).then((response)=>{
        })
      },
    
  },
}
</script>

<style>

</style>