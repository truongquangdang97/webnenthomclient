<template>
  <div class="header"> 
          <div class="row">
              <div class="col-md-2">
                  <img src="../asset/logo.svg" alt=""  width="auto"/>
              </div>
              <div class="col-md-8">
                  <div class="menu">
                      <div class="menu-class">
                          <nuxt-link to="/">Trang chủ</nuxt-link>
                      </div>
                      <div class="menu-class">
                          <nuxt-link to="/Product">Sản phẩm</nuxt-link>
                          
                      </div>
                      <div class="menu-class">
                          <nuxt-link to="/Category">Thể loại</nuxt-link>
                          
                      </div>
                      <div class="menu-class">
                          chi tiết & liên hệ 
                      </div>
                       <div class="menu-class">
                          Lịch sử
                      </div>

                      <div class="menu-class">
                          <nuxt-link to="/OrderDetail">Đơn hàng</nuxt-link>
                      </div>
                       <div class="menu-class">
                            <nuxt-link to="/cart">
                             Lịch sử đơn hàng 
                         </nuxt-link>
                      </div>
                      <div class="menu-class">
                            <nuxt-link to="/login">
                             Login
                         </nuxt-link>
                      </div>


                  </div>
              </div>
              <div class="col-md-2">
                  <div class="cart">
                         <nuxt-link to="/giohang">
                            <img src="../asset/cart.svg" alt="" />
                         </nuxt-link>
                    </div>
              </div>
          </div>
      <!-- </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cart {
  margin-top: 14px;
  margin-right: 34px;
  padding-left: 8px;
  padding-right: 34px;
  padding-top: 17px;
  width: 43px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #bc9f7d;
  position: relative;
  float:right
}
.menu {
display: flex;
  justify-content: center;

}

.menu-class {
font-size: 20px;
    padding: 20px 20px;
    margin: 10px;
    float: left;
}
.menu-class :hover{
    text-decoration: none;

}

.header{
    background-color: #cbaf8f;

}

/* @media (min-width: 1200px) */
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1500px;
}

</style>