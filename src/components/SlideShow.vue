<template>
  <div class="hello">
    <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
     <swiper-slide><img style="with:100%;" src="http://img.800pharm.com/images/20181121/20181121092036_876.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181112/20181112093906_127.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181116/20181116162944_971.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181101/20181101104230_138.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181029/20181029094055_895.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181111/20181111095211_75.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20180716/20180716165407_186.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181109/20181109090845_421.jpg" alt=""></swiper-slide>
     <swiper-slide><img src="http://img.800pharm.com/images/20181111/20181111095052_130.jpg" alt=""></swiper-slide>
     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
     <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
     <!-- <div class="swiper-button-next" slot="button-next"></div> -->
     <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>

import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay:{
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  name: "SlideShow",
  // props: {
  //   msg: String
  // },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  },
  components: {
    // HelloWorld
    swiper,
    swiperSlide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.hello{
  width: 100%;
}
.hello img{
  width: 100%;
  height: 100%;
  display: block;
  min-height: 165px;
}

</style>
