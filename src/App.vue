<script setup>
import Bowser from 'bowser';
import {onMounted} from "vue";
import Title from "@/components/Title.vue";
import Invitation from "@/components/Invitation.vue";
import Call from "@/components/Call.vue";
import Gallery from "@/components/Gallery.vue";
import Divider from "@/components/Divider.vue";
import WeddingMap from "@/components/WeddingMap.vue";

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
</style>
