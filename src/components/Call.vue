<script setup>
import { ModalsContainer, VueFinalModal } from 'vue-final-modal'
import {ref} from "vue";
import groomIcon from "@/assets/images/icon/groop_icon.png";
import brideIcon from "@/assets/images/icon/bride_icon.png";
import { copyToClipboard } from './composable';
const getInitialValues = () => ({
  teleportTo: 'body',
  modelValue: false,
  displayDirective: 'if',
  hideOverlay: false,
  overlayTransition: 'vfm-fade',
  contentTransition: 'vfm-fade',
  clickToClose: true,
  escToClose: true,
  background: 'non-interactive',
  lockScroll: true,
  reserveScrollBarGap: true,
  swipeToClose: 'none',
})

const options = ref(getInitialValues())
const modalData = ref({})
function reset() {
  options.value = getInitialValues()
}

const groomOpen = () => {
  console.log("groom open")
  modalData.value = {
    icon: groomIcon,
    title: "신랑측 계좌번호",
    accounts: [
      {
        name : '부)최만호',
        bankName : '국민은행',
        bankAccount : '652-05- 0044970'
      },
      {
        name : '모)김미숙',
        bankName : '농협',
        bankAccount : '356-1058-7101-83'
      },
      {
        name : '최재환',
        bankName : '카카오뱅크',
        bankAccount : '3333-02-5992814'
      }
    ]
  }
  options.value.modelValue = true;
}


const brideOpen = () => {
  modalData.value = {
    icon: brideIcon,
    title: "신부측 계좌번호",
    accounts: [
      {
        name : '부) 김대기',
        bankName : '(구)외환',
        bankAccount : '259-890218-75007'
      },
      {
        name : '신부) 김지현',
        bankName : '기업은행',
        bankAccount : '010-4028-2252'
      }
    ]
  }
  options.value.modelValue = true;
}

const onCopySuccess = () => {
  console.log("copySuccess");
}

const onCopyError = () => {
  console.log("onCopyError");
}

const onCopyClick = async (bankAccount) => {
  try {
    copyToClipboard(bankAccount);
        console.log('Copied to clipboard')
  } catch (e) {
    console.error(e)
  }
}


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
          <a href="#" @click.prevent="groomOpen">
            <img :src="groomIcon" alt="">
          </a>
          <p> 신랑측 계좌번호</p>
        </li>
        <li>
          <a href="#" @click.prevent="brideOpen">
            <img :src="brideIcon" alt="">
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


  <VueFinalModal
      v-model="options.modelValue"
      :teleport-to="options.teleportTo"
      :display-directive="options.displayDirective"
      :hide-overlay="options.hideOverlay"
      :overlay-transition="options.overlayTransition"
      :content-transition="options.contentTransition"
      :click-to-close="options.clickToClose"
      :esc-to-close="options.escToClose"
      :background="options.background"
      :lock-scroll="options.lockScroll"
      :reserve-scroll-bar-gap="options.reserveScrollBarGap"
      :swipe-to-close="options.swipeToClose"
      class="flex justify-center items-center"
      content-class="max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
  >
    <div class="modal">
        <h3 class="modal-title">
          <img class="img-icon" :src="modalData.icon" alt="">
          {{ modalData.title }}
        </h3>
      <div v-for="item in modalData.accounts" class="modal-content-item"
           @click.prevent="onCopyClick(item.bankAccount)">
        <div>{{ item.name }}</div>
        <div class="account"> {{ item.bankName }} {{ item.bankAccount }}</div>
      </div>
    </div>
  </VueFinalModal>
  <ModalsContainer />
</template>

<style scoped>
.container {
  margin-bottom: 80px;
}
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

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  width: 95%;
  min-width: 200px;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
}
.modal .modal-title{
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 1.0em
}

.modal .modal-title .img-icon{
  background-color: #f29f05;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.modal .modal-content-item{
  padding: 0.5rem;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.0rem;
}

.modal .modal-content-item .account{
  margin-top: 0.5rem;
  color: #000c;
  font-size: 0.9rem;
}
</style>
