<template>
  <div>
    <div class="container">

      <div class="product_title">
        <h3>Nến thơm</h3>
        <p class="product_title_gach"></p>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="product_detail">
            <div class="product_detail_addToCart">
              <img @click="showModal()" class="product_detail_addToCart_icon" src="../../asset/carts.svg" alt="">
            </div>
            <a class="product_detail_link" href="" style="text-decoration: none;">
              <img class="product_detail_img" src="../../asset/cach-lam-nen-thom-14.jpg" alt="">
              <div class="product_detail_info">
                Nến thơm cao cấp Tender Midnight nhóm hương hoa
              </div>
              <p class="product_detail_price">100000 ₫</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="showModal1" @close="showModal1 = false" size="model-lg" parent="parent">
      <template v-slot:product>
        <div class="product_detail_addToCart_modal">
          <span>
            <img src="../../asset/cach-lam-nen-thom-14.jpg" alt="" width="200px">
          </span>
          <div class="product_detail_addToCart_modal_detail">
            <p>Teen sp</p>
            <p>Gias </p>
            <span>Số lượng :</span>
            <div class="totalAddToCart">
              <span class="addToCartMinus" @click="plusMinus(-1)">
                -</span>
              <span class="addToCartPlusMinusTotal">{{ totalAddCart }}</span>
              <span class="addToCartPlus" @click="plusMinus(1)">+</span>
            </div>
            <p></p>
            

          </div>
          
        </div>

      </template>
  
      <template  v-slot:footer>
        <button class="btn btn-danger">Them vào giỏ hàng</button>
      </template>
    </modal>


    <!-- <h1>Danh sách sản phẩm </h1>
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
        <tr v-for="(item, index) in listProduct" :key="index">
          <th>{{ item.id }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.thumbnails }}</th>
          <th>{{ item.description }}</th>
          <th>{{ item.price }}</th>
          <th>{{ item.status }}</th>
          <th>
            <button @click="addToCart(item.id)">Đặt hàng </button>
          </th>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import modal from "../Popup/Modal.vue"

// import axios from "axios";
export default {
  middleware: "router-log",
  components: {
    modal
  },
  data() {
    return {
      totalAddCart: 0,
      showModal1: false,
      shoppingCartId: '',
      dataCartItem: [],
      listProduct: [],
      productAdd: {
        userId: "02100eed-e340-4b06-8ab8-9d76c155cbe5",
        cartItemDTOSet: []
      }
    }
  },
  //   created() {
  //     this.callApiShoppingCart()

  //   },
  // mounted() {
  //   this.productWithToken();
  // },
  methods: {
    showModal() {
      this.showModal1 = true
    },
    plusMinus(val) {
      // if (this.totalAddCart > 0) {
      //   this.totalAddCart--
      // }


      if (val > 0) {
        this.totalAddCart++
      } else {

        if (this.totalAddCart == 0) {
          this.totalAddCart = 0
        }
        this.totalAddCart--
      }
      console.log(val)
      console.log(this.totalAddCart)
    },
    //     callApiShoppingCart() {
    //       axios
    //         .get("http://localhost:8080/api/v1/shopping-cart", { params: { userId: this.productAdd.userId } })
    //         .then((response) => {
    //           console.log(response.data.id)
    //           this.shoppingCartId = response.data.id
    //           this.callApiCartItem()
    //         });
    //     },
    //     callApiCartItem() {
    //       axios
    //         .get("http://localhost:8080/api/v1/cartItems/shoppingCartId", { params: { shoppingCartId: this.shoppingCartId } })
    //         .then((response) => {
    //           this.productAdd.cartItemDTOSet = response.data
    //         });
    //     },
    // productWithToken() {
    //   let token = sessionStorage.getItem("token");
    //   console.log(token)
    //   if (token) {
    //     window.axios = require('axios')
    //     window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    //     this.callApiProduct()
    //   } else {
    //     this.$router.push("/login")
    //   }
    // },
    //     callApiProduct() {
    //       let token = sessionStorage.getItem("token");
    //       axios
    //         .get("http://localhost:8080/api/v1/products", { headers: { Authorization: `Bearer ${token}` } })
    //         .then((response) => {
    //           this.listProduct = response.data.content;
    //         });
    //     },
    //     addToCart(id) {
    //       var cartItem = {
    //         productId: "",
    //         quantity: 1
    //       }
    //       cartItem.productId = id
    //       var x = this.productAdd.cartItemDTOSet.find(x => x.productId === id);
    //       if (x) {
    //         x.quantity++
    //       } else {
    //         this.productAdd.cartItemDTOSet.push(cartItem)
    //       }
    //       axios.post("http://localhost:8080/api/v1/shopping-cart", this.productAdd).then((response) => {
    //       })
    //     },

  },
}
</script>

<style>
.totalAddToCart {
  /* padding: 5px 0; */
  margin-left: 30px;
  float: right;
  border: 1px solid #b1154a;
}

.addToCartPlusMinusTotal {
  padding: 0px 15px;
}

.addToCartPlus {
  font-size: 20px;
  padding: 0px 15px;
  border-left: 1px solid #b1154a;
}

.addToCartMinus {
  border-right: 1px solid #b1154a;
  font-size: 20px;
  padding: 0px 15px;
}


.product_detail_addToCart_modal_detail {
  position: absolute;
  top: 15px;
  left: 230px;
}

.product_detail_addToCart_modal {
  position: relative;
  margin-top: 20px;
  padding: 20px;
}

.product_detail_addToCart {
  background-color: #f4f4f4;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
}

.product_detail_addToCart_icon {
  background-color: #f4f4f4;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.product_detail_link {
  color: #184a41;
}

.product_detail_link:hover {
  color: #184a41;

}

.product_detail_price {
  color: #e13f3f;
  padding: 10px;
  font-weight: 700;
}

.product_detail {
  position: relative;
  height: auto;
  background-color: #f4f4f4;
}

.product_detail_info {
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
}

.product_detail_img {
  height: 250px;
  width: 100%;
}

.product_title {
  margin-top: 50px;
}

.product_title_gach {
  margin-bottom: 40px;
  height: 2px;
  width: 100px;
  background-color: goldenrod;
}

.model-lg {
  width: 600px !important;
  left: calc(50% - 300px) !important;
}
</style>