<template>
   <div >
    <div class="container">
      <!-- <pre>{{ listOrder }}</pre> -->
      <div class="row">
        <div style="text-align: center">
          <h1> Chi tiết đơn hàng</h1>
          <div>
          </div>
        </div>
        

        <table class="table table-hover">
          <thead>
            <tr>
          
              <th>ProductID</th>
              <th>OrderID</th>
              <th>Số lượng </th>
              <th>Giá tiền </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(orderDetail, index) in dataOrderDetail" :key="index">
              <th>{{ orderDetail.id.productId }}</th>
              <th>{{ orderDetail.id.orderId }}</th>
               <th>{{orderDetail.quantity}}</th>
               <th>{{ orderDetail.unitPrice }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      dataOrderDetail:[]
    }
  },
  methods:{
    callApiCartItem() {
      axios
        .get("http://localhost:8080/api/v1/orderDetails")
        .then((response) => {
          this.dataOrderDetail = response.data.content;
          console.log(this.dataOrderDetail)
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