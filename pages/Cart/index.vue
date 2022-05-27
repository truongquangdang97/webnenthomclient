<template>
  <div>
    <div class="container">
      <div class="row">
        <div style="text-align: center">
          <h1>Bảng tra cứu thông tin các đơn hàng  </h1>
          <div>
        
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="nameProduct"
            v-model="search.nameProduct"
          />
          <input type="text" placeholder="nameUser" v-model="search.nameUser" />
          <input type="text" placeholder="phone" v-model="search.phone" />
          <input type="text" placeholder="userId" v-model="search.userId" />
          <input type="number" placeholder="status" v-model="search.status" />
          <input
            type="date"
            placeholder="Từ ngày này trở đi "
            v-model="search.start"
          />
          <input
            type="date"
            placeholder="Từ ngày này trở về "
            v-model="search.end"
          />
          <button @click="searchOrder()">Search</button>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>Tình trạng</th>
              <th>Tổng tiền</th>
              <th>Đơn hàng</th>
              <th>Người đặt</th>
              <th>Sdt người đặt</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in listOrder" :key="index">
              <th>{{ order.status }}</th>
              <th>{{ order.totalPrice }}</th>
              <th>
                <button @click="orderDetail(order.orderDetails)">Chi tiết từng đơn hàng</button>
              </th>
              <th>{{ order.user.nameUser }}</th>
              <th>{{ order.user.phone }}</th>
            </tr>
          </tbody>
        </table>
        <paginate :page="page" @pageNumber="pageNumber"/>
        <modal
          v-if="showModal1"
          @close="showModal1 = false"
          size="model-lg"
          parent="parent"
        >
          <template v-slot:orders>
            <table class="table">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Product Id</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Chi tiết </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in modalData" :key="index">
                  <th>{{item.id.orderId}}</th>
                  <th>{{item.id.productId}}</th>
                  <th>{{item.quantity}}</th>
                  <th>{{item.unitPrice}}</th>
                  <th>
                    <button @click="productDetails(item.product)" >Nhấn để xem chi tiết sản phẩm </button>
                  </th>
                </tr>
              </tbody>
            </table>  
          </template>
          <template v-slot:model-footer>
          </template>
        </modal>
        <modal v-if="showModal2" @close="showModal2 = false">
          <template v-slot:product>
            <table class="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm </th>
                  <th>Tên sản phẩm </th>
                  <th>Ảnh</th>
                  <th>Giá</th>
                  <th>Slug</th>
                  <th>Trạng thái </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{{productDetail.id}}}</th>
                  <th>{{productDetail.name}}</th>
                  <th>
                    <img :src="productDetail.thumbnails" alt="">
                  </th>
                  
                  <th>{{productDetail.price}}</th>
                  <th>{{productDetail.slug}}</th>
                  <th>{{productDetail.status}}</th>

                </tr>
              </tbody>
            </table>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>

import paginate from "../Pagition/Paginate.vue";
import axios from "axios";
import modal from "../Popup/Modal.vue"
export default {
  components: {
    paginate,
    modal
  },
  methods: {
    pageNumber(val){
        this.search.page = val;
        this.searchOrder()
    },
    productDetails(product){
      this.productDetail=product
      console.log(this.productDetail)
      this.showModal2=true
    },
      orderDetail(item){
        this.modalData=item
        console.log(this.modalData)
        this.showModal1=true
      },
      callApiCartItem() {
        axios
          .post("http://localhost:8080/api/v1/orders", this.search)
          .then((response) => {
            this.listOrder = response.data.content;
            this.page=response.data.size
          });
      },
      searchOrder() {
        console.log(this.search)
        axios
          .post("http://localhost:8080/api/v1/orders", this.search)
          .then((response) => {
            this.listOrder = response.data.content;
          });
      },
      
  },
  data() {
    return {
      page:0,
      productDetail:{},
      modalData:[],

      showModal1: false,
      showModal2: false,

      time: [],

      value: null,
      search: {
        page: 1,
        limit: 10,
        nameProduct: "",
        nameUser: "",
        phone: "",
        userId: "",
        status: 2,
        start: "",
        end: "",
      },
      listOrder: [],
    };
  },
  
  created() {
    this.callApiCartItem();
  },
};
</script>

<style>
.model-lg {
  width: 1000px !important;
  left: calc(50% - 500px) !important;
}
.model-body img {
  max-width: 100%;
}
.model-sm {
  width: 300px !important;
  left: calc(50% - 150px) !important;
}
</style>