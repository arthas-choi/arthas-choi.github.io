<script setup>
import {ref} from "vue";

import a from "@/assets/images/wedding/ty-1-1.jpg";
import b from "@/assets/images/wedding/ty-2-1.jpg";
import c from "@/assets/images/wedding/ty-3-1.jpg";
import d from "@/assets/images/wedding/ty-4-1.jpg";
import e from "@/assets/images/wedding/ty-1-2.jpg";
import f from "@/assets/images/wedding/ty-2-2.jpg";
import g from "@/assets/images/wedding/ty-3-2.jpg";
import h from "@/assets/images/wedding/ty-4-2.jpg";
import i from "@/assets/images/wedding/ty-1-3.jpg";
import j from "@/assets/images/wedding/ty-2-3.jpg";
import k from "@/assets/images/wedding/ty-3-3.jpg";
import l from "@/assets/images/wedding/ty-1-4.jpg";
const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])



const items = [
  a,
    b,c,d,e,f,g,h,i,j,k,l
]

imgsRef.value = [
  a,
  b,c,d,e,f,g,h,i,j,k,l
];

const onShow = (index) => {
  indexRef.value = index ? index : 0;
  visibleRef.value = true
}

const onHide = () => (visibleRef.value = false)

</script>

<template>
    <div class="container gallery">
      <h2>GALLERY</h2>
      <masonry-wall :items="items"  :min-columns="3" :max-columns="3" :gap="10">
        <template #default="{ item, index }">
          <button @click="onShow(index)">
          <img :src="item"  alt="">
          </button>
        </template>
      </masonry-wall>

      <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
      ></vue-easy-lightbox>

    </div>
</template>

<style scoped>
.gallery figure{
  width: 100%;
  height: 210px;
}

.gallery .image_gallery {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.masonry-item img {
    object-fit: cover;
    margin: 0 auto;
    width: 100%;
}

.masonry-item button {
  border: none;
}
</style>
