<script setup>
import {onMounted, ref} from "vue";

const 타이틀 = 'Jaehwan & Jihyun';
const 일시 = '2023. 11. 11. SAT PM 01:00';
const 장소 = '서울 상록아트홀 L층 그랜드볼룸홀';
const map = ref({});

onMounted(() => {
  if (!window.kakao || !window.kakao.maps) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=23394778e57b179d0098d8231aa92b33&libraries=clusterer,drawing,services'
    /* eslint를 사용한다면 kakao 변수가 선언되지 않았다고
     * 오류를 내기 때문에 아래 줄과 같이 전역변수임을
     * 알려주어야 한다. */
    /* global kakao */
    script.addEventListener('load', () => {
      kakao.maps.load(() => {
        // 카카오맵 API가 로딩이 완료된 후 지도의 기본적인 세팅을 시작해야 한다.
        initMap()
      })
    })
    document.head.appendChild(script)
  } else {
    // 이미 카카오맵 API가 로딩되어 있다면 바로 지도를 생성한다.
    initMap()
  }
})

const initMap = function () {
  const position = new kakao.maps.LatLng(35.242526157924374, 128.86878515119685);

  const container = document.getElementById('map')

  const options = {
    // 처음 지도의 위치를 lat, lng(위도, 경도) 값으로 설정한다.
    center: position,
    level: 3
  }
  // center: new kakao.maps.LatLng(925262, 489017),
  map.value = new kakao.maps.Map(container, options)

  const marker = new window.kakao.maps.Marker({
    position: position
  });

  marker.setMap(map.value);

}

const kakao_navi = function () {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad",
    "iPod"];
  let flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;    //如果是手机版本返回false
      break;
    }
  }

  if(flag) {
    alert('모바일 기기 전용 기능입니다')
  } else {
  Kakao.init("23394778e57b179d0098d8231aa92b33");
  Kakao.Navi.start({
    name: '메르시앙웨딩홀', //목적지
    x: 128.86878515119685,
    y: 35.242526157924374,
    coordType: 'wgs84'
  });
  }
}
</script>

<template>
  <div class="wedding_map container">
    <h2>LOCATION</h2>
    <div id="map" class="map">
    </div>

    <div class="icon">
      <ul class="appLink">
        <li>
          <a
              target="_blank"
              href="https://apis.openapi.sk.com/tmap/app/routes?appKey=Raz1TF3nSOalrQT9dqbGZ3KiBXHwRJNr4yESZk5C&name=메르시앙웨딩&lon=128.8687851511968&lat=35.242526157924374"><img
              src="../assets/images/icon/tmap.png" alt="">
            <p>티맵</p></a></li>
        <li><a href="#" @click.prevent="kakao_navi"><img src="../assets/images/icon/kakaonavi.png" alt="">
          <p>카카오 내비</p></a></li>
        <li><a href="http://kko.to/UhzdTzd0SN" target="_blank"><img src="../assets/images/icon/kakao.png" alt="">
          <p>카카오 맵</p></a></li>
        <li><a href="https://map.naver.com/v5/directions/-/14345572.615555514,4196842.290666608,%EB%A9%94%EB%A5%B4%EC%8B%9C%EC%95%99%EC%9B%A8%EB%94%A9%ED%99%80,1148587003,PLACE_POI/-/transit?c=7,0,0,0,dh"
               target="_blank"><img src="../assets/images/icon/naver.png" alt="">
          <p>네이버 지도</p></a></li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.wedding_map {
  padding-bottom: 60px;
}

.map {
  width: 100%;
  height: 50vh;
  max-height: 500px;
}

.icon {
  margin-top: 35px;
}

.icon .appLink {
  display: flex;
  justify-content: center;
  text-align: center;
}

.icon .appLink a {
  text-decoration: none;
  color: #606060;
}

.icon ul li:not(:last-child) {
  padding-right: 30px;
}

.icon ul li a p {
  font-size: 10px;
}

</style>
