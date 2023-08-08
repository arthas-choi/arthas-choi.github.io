<script setup>
import {ref} from "vue";

import image1 from "@/assets/images/wedding/jj-10.jpg";
import image2 from "@/assets/images/wedding/jj-11.jpg";
import image3 from "@/assets/images/wedding/jj-12.jpg";
import image4 from "@/assets/images/wedding/jj-13.jpg";
import image5 from "@/assets/images/wedding/jj-14.jpg";
import image6 from "@/assets/images/wedding/jj-15.jpg";
import image7 from "@/assets/images/wedding/jj-16.jpg";
import image8 from "@/assets/images/wedding/jj-17.jpg";
import image9 from "@/assets/images/wedding/jj-18.jpg";
import image10 from "@/assets/images/wedding/jj-19.jpg";
import image11 from "@/assets/images/wedding/jj-20.jpg";
import image12 from "@/assets/images/wedding/jj-21.jpg";
import image13 from "@/assets/images/wedding/jj-22.jpg";
import image14 from "@/assets/images/wedding/jj-23.jpg";
import image15 from "@/assets/images/wedding/jj-24.jpg";
import image16 from "@/assets/images/wedding/jj-25.jpg";
import image17 from "@/assets/images/wedding/jj-26.jpg";
import image18 from "@/assets/images/wedding/jj-27.jpg";
import image19 from "@/assets/images/wedding/jj-28.jpg";



const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])



const items = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19
]

imgsRef.value = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19
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
