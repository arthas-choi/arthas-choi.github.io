<script setup>
</script>

<template>
  <div class="call container">
    <h2>마음 전하실 곳</h2>
    <div>
      <ul class="phone">
        <li>
          <a href="tel:010-9669-7339">
            <img src="../assets/images/icon/blue_phone.png" alt="">
          </a>
          <p> 신랑에게 전화하기</p>
        </li>
        <li>
          <a href="tel:010-4028-2252">
            <img src="../assets/images/icon/pink_phone.png" alt="">
          </a>
          <p>신부에게 전화하기</p>
        </li>
      </ul>
      <ul class="account">
        <li>
          <a href="tel:010-9669-7339">
            <img src="../assets/images/icon/groop_icon.png" alt="">
          </a>
          <p> 신랑측 계좌번호</p>
        </li>
        <li>
          <a href="tel:010-4028-2252">
            <img src="../assets/images/icon/bride_icon.png" alt="">
          </a>
          <p>신부측 계좌번호</p>
        </li>
      </ul>
    </div>
    <div>

<!--      groom-icon-->
<!--      신랑측 계좌번호 확인-->
<!--      bride-icon-->
<!--      신부측 계좌번호 확인-->
    </div>

  </div>

</template>

<style scoped>

.call .phone{
  text-align: center;
  height: 160px;
}
.call .phone li{
  display: inline-block;
  padding-top: 45px;
  padding-bottom: 45px;
  color: #606060;
  font-size: 14px;
  padding-right: 20px;
}
.call .phone li:last-child{
  padding-right: 0;
}
.call .phone p{
  padding-top: 10px;
}



.call .account{
  text-align: center;
  height: 160px;
}
.call .account li{
  display: inline-block;
  padding-top: 45px;
  padding-bottom: 45px;
  color: #606060;
  font-size: 14px;
  padding-right: 20px;
}
.call .account li:last-child{
  padding-right: 0;
}
.call .account p{
  padding-top: 10px;
}
.call .account img {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
