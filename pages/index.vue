<template>
  <div class="home">
    <div class="home_category">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div>
              <img class="home_category_img" src="../asset/cach-lam-nen-thom-14.jpg" alt="" width="100%">
              <div class="home_category_img_title">
                Nến thơm cảm xúc
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <img class="home_category_img" src="../asset/cach-lam-nen-thom-14.jpg" alt="" width="100%">
              <div class="home_category_img_title">
                Sô thơm
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <img class="home_category_img" src="../asset/cach-lam-nen-thom-14.jpg" alt="" width="100%">
              <div class="home_category_img_title">
                Gỗ xanh
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home_best_sale">
        <h2> Sản phẩm bán chạy </h2>
        <p class="home_best_sale_gach"></p>
      </div>

      <div class="home_best_sale">
        <h2> Kiến thức và chia sẻ </h2>
        <p class="home_best_sale_gach"></p>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div>
            <img class="chiase_img" src="../asset/cach-lam-nen-thom-14.jpg" alt="">
          </div>
        </div>
        <div class="col-md-7">
          <div class="chiase_img_title">
            24 tháng 5, 2022
            <h3>Palo Santo và câu chuyện khai thác nhân đạo</h3>
            Có ai đó nói rằng: “Điều tuyệt vời nhất là cái cây chết chỉ để đem lại sự sống”. Palo Santo là một loại cây
            như thế! Trải qua khoảng 30 – 35 năm tồn tại và sau 4 – 5 năm chết trong môi trường tự nhiên, Palo Santo hấp
            thụ được linh khí của đất trời, tạo ra nguồn năng lượng mạnh, thu hút tần số tích cực và xua đuổi
          </div>
        </div>

     

      </div>
  


    </div>
  </div>

</template>

<script>
export default {

  created() {
    // this.router.push("/login/index.vue")
  }
}
</script>
<style>
.chiase {
  margin-left: 10%;
}
.chiase_img_title{
  margin-top: 20px;
  margin-left: 5%;
}

.chiase_img {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}

.chiase_title {}

.home_best_sale_gach {
  margin: auto;
  width: 100px;
  height: 2px;
  background-color: goldenrod;
  margin-bottom: 30px;
}

.home_best_sale {
  text-align: center;
}

.home_category_img {
  border-radius: 50%;
  margin-top: 20px;
}

.home_category_img_title {
  text-align: center;
  margin-top: 30px;
  font-size: 22px;
  font-weight: 600;
  color: #184a41;
  margin-bottom: 30px;

}
</style>
