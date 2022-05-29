<template>
  <div class="footer">
    <div class="row">
      <div class="logo">
        <img src="../asset/logo1.svg" alt="" width="200px">
      </div>
    </div>
    <!-- <div class="row">
      <div class="menu">
        <div class="menu-class">Chính sách bảo mật </div>
        <div class="menu-class">Chính sách đổi trả </div>
        <div class="menu-class">Điều khoản giao hàng </div>
        <div class="menu-class">Chính sách thanh toán </div>
        <div class="menu-class">Liên hệ mua hàng </div> 
      </div>
    </div> -->
    <div class="row">
      <div class="end">
        © 2021 thechillinghome.com | All Rights Reserved 
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.end{
  margin: auto;
  padding: 0px 0px 45px 0px;
}
.menu {
  margin: auto;
  display: flex;
  justify-content: center;

}

.menu-class {
font-size: 20px;
    padding: 20px 20px;
    margin: 10px;
    float: left;
}
.logo{
  margin: auto;
}

.footer{
  background-color: #f7f7f7;
}
</style>