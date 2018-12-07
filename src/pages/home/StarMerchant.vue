<template>
  <!-- <div class="navigation">
    
  </div> -->
  <div class="index_layout_box season_common_box">
    <img src="http://b2c.wap.800.net:86/images/wap/item_title02.png" alt="明星商家" class="img_title">
    <div class="brand_content">
        <div class="brand_img_list">
            <ul>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100516.html">
                        <img src="http://img.800pharm.com/images/20181025/20181025143456_406.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100302.html">
                        <img src="http://img.800pharm.com/images/20180322/20180322110731_561.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100913.html">
                        <img src="http://img.800pharm.com/images/20180824/20180824133411_206.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100098.html">
                        <img src="http://img.800pharm.com/images/20180322/20180322110739_398.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100299.html">
                        <img src="http://img.800pharm.com/images/20180322/20180322110746_197.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100795.html">
                        <img src="http://img.800pharm.com/images/20180321/20180321120318_291.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100090.html">
                        <img src="http://img.800pharm.com/images/20180321/20180321120309_418.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop-100068.html">
                        <img src="http://img.800pharm.com/images/20180321/20180321120324_702.jpg">
                    </a>
                </li>
                <li>
                    <a href="http://b2c.wap.800.net:86/shop_star">
                        <img src="http://b2c.wap.800.net:86/images/wap/bran_more.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

import Vue from "vue";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";

// Vue.use(VueAwesomeSwiper);

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        // autoplay:{
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
        loop: true,
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  name: "StarMerchant",
  // props: {
  //   msg: String
  // },
  computed: {
    
  },
  mounted() {
    
  },
  components: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
.img_title {
    max-width: 100%;
    vertical-align: top;
    background-color: #f5f5f5;
}
.brand_content{
  padding: 10px 18px;
  background: #fff;
  .brand_img_list{
    table,td,{
      border: 1px solid #f2f2f2;
      img{
        width: 100%;
      }
    }
    ul{
      width: 100%;
      overflow: hidden;
      border: 1px solid #f2f2f2;
      box-sizing: border-box;
      li{
        float: left;
        width: 33.33%;
        box-sizing: border-box;
        border-bottom: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;
        &:nth-child(3n){
            border-right: 0;
        }
        &:nth-last-child(1){
            border-bottom: 0;
        }
        &:nth-last-child(2){
            border-bottom: 0;
        }
        &:nth-last-child(3){
            border-bottom: 0;
        }
        img{
            width: 100%;
        }
      }
    }
  }
}

</style>
