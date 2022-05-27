<template>
  <div>
      <h1>Giỏ hàng</h1>
      <div>
          <table class="table">
              <thead>
                  <tr>
                      <!-- <th>Mã sản phẩm</th> -->
                      <th>Tên sản phẩm </th>
                      <th>Ảnh</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Trạng thái</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(item,index) in dataCartItem " :key="index">
                        <!-- <th>{{item.id}}</th> -->
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
          .get("http://localhost:8080/api/v1/cartItems", {params: {shoppingCartId: 'e02e928b-9daa-45d4-b760-aca62e4ac02b'}})
          .then((response) => {
            this.dataCartItem = response.data;
            console.log(this.dataCartItem)
          });
      },
    },
    created(){
        this.callApiCartItem()
    }
}
</script>

<style>

</style>