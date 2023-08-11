<script setup>
const 타이틀 = 'Jaehwan & Jihyun';
const 일시 = '2023. 11. 11. SAT PM 01:00';
const 장소 = '서울 상록아트홀 L층 그랜드볼룸홀';
</script>

<template>
  <div class="container invitation">
    <h2>INVITATION</h2>
    <p>같은 학교, 같은 전공, 같은 동아리에서 만나<br>
      시트콤 같은 연인이 된 지 13년,<br>
      많은 사람들이 기다린 저희가<br>
      평생을 함께하는 첫날입니다.
    </p>

    <p>뜻깊은 이날, 아껴주시는 모든 분들의 <br>
      축복 받고 싶은 마음에 초대장을 드립니다.</p>

    <p>소중한 시간을 조금만 내어주시어<br>
      자리를 빛내주시기 바랍니다.</p>

    <p>우리 드디어 결혼합니다!</p>
    <ul>
      <li>최만호 김미숙<span>의 아들</span>&nbsp;최재환</li>
      <li>김대기 김임순<span>의 &nbsp;&nbsp;&nbsp;딸</span>&nbsp;김지현</li>
    </ul>
    <img src="../assets/images/wedding/jj-2.jpg" alt="">
  </div>
</template>

<style scoped>
.invitation {
  text-align: right;
}

.invitation p {
  font-size: 16px;
  line-height: 30px;
  padding-bottom: 30px;
}

.invitation ul {
  padding-top: 40px;
  padding-bottom: 40px;
}

.invitation ul li {
  padding-bottom: 5px;
}

.invitation ul li span {
  font-size: 12px;
}

.invitation img {
  width: 100%;
  padding-bottom: 60px;
}
.invitation span {
  white-space: pre;
}
</style>
