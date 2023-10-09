<script setup>
import Bowser from 'bowser';
import {computed, onMounted, ref} from "vue";
import Title from "@/components/Title.vue";
import Invitation from "@/components/Invitation.vue";
import Call from "@/components/Call.vue";
import Gallery from "@/components/Gallery.vue";
import Divider from "@/components/Divider.vue";
import WeddingMap from "@/components/WeddingMap.vue";
import {useSound} from "@vueuse/sound";
import bgm from '@/assets/sounds/bgm.mp3'
import volume_off_img from "@/assets/images/icon/volume-off.png";
import volume_on_img from "@/assets/images/icon/volume-on.png";
import copy from "@/assets/images/icon/copy.png";
import {copyToClipboard2} from "@/components/composable";

const { play, stop, isPlaying } = useSound(bgm, {
  loop: true,
})

const handleBGMClick = () => {
  if(isPlaying.value) {
    stop()
  } else {
    play();
  }
}

const bgmImage = computed(() => {
  if(isPlaying.value) {
    return volume_off_img;
  } else {
    return volume_on_img;
  }
})

const bgmText = computed(() => {
  if(isPlaying.value) {
    return "음악 끄기";
  } else {
    return "음악 켜기";
  }
})

const copyLink = () => {
  copyToClipboard2("https://arthas-choi.github.io");
}
const setScreenSize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onMounted(() => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  if (parser.getPlatformType() !== 'mobile') {
    window.addEventListener('resize', setScreenSize);
  }
  setScreenSize();
})

</script>

<template>
  <header>
    <Divider/>
    <Title/>
  </header>

  <main>
    <Invitation/>

<!--    None -->
    <Gallery/>

    <WeddingMap/>

    <Call/>
<!--    <Account/>-->

  </main>

  <div class="float-button-container">
    <Button class="float-button" @click="handleBGMClick" label="Trumpet">
      <img class="float-button-image" :src="bgmImage" />
      <span>{{  bgmText }}</span>
    </Button>
    <Button class="float-button" @click="copyLink" label="Trumpet">
      <img class="float-button-image" :src="copy" />
      <span> 청첩장 공유</span>
    </Button>
  </div>

</template>

<style scoped>

/*header {*/
/*  line-height: 1.5;*/
/*}*/

/*.logo {*/
/*  display: block;*/
/*  margin: 0 auto 2rem;*/
/*}*/

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/
/*}*/

.float-button-container {
  z-index: 1000;
  position: fixed;
  transform: translate(-50%, 0%);
  left: 50%;
  bottom: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding:0 10px;

  background: white;
  height: 40px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  border:1px solid #e9e9e9;
  border-radius: 30px;
  text-decoration: none !important;
}

.float-button {
  display: flex;
  align-items: center;
  padding:0 20px;

  cursor: pointer;
  color:#2b2b2b !important;
  font-size: 12px;
  text-decoration: none !important;
  white-space: nowrap;
  font-weight: bold;
  transition: 0.5s;
  background-color: white;
  border: none;
}

.float-button:hover {
  transform: translate(0%, -20%);

  background-color: white;
  border: none;
}

.float-button-image {
  height: 15px;
  margin-right:5px;

}
</style>
