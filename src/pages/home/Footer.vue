<template>
  <div class="footer">
    <a href="tel:4008855171" class="kf_tell_index">
      <img src="http://b2c.wap.800.net:86/images/wap/kufu_bg.png">
    </a>
    <div class="tip_index">关注【八百方】微信号，订阅健康资讯，领红包！</div>
    <div class="index_layout_box">
      <div class="bbf_healthy_links cf">
        <a href="/news/">健康资讯</a>
        <a href="http://b2c.wap.800.net:86/ask">健康问答</a>
        <a href="http://b2c.wap.800.net:86/cpk">产品库</a>
        <a href="http://b2c.wap.800.net:86/ppk">品牌库</a>
        <a href="http://b2c.wap.800.net:86/tyk">通用名库</a>
        <a href="http://b2c.wap.800.net:86/ck">搜索词库</a>
        <a href="http://b2c.wap.800.net:86/zzk">症状库</a>
        <a href="http://b2c.wap.800.net:86/jbk">疾病库</a>
        <a href="http://b2c.wap.800.net:86/xjsp">下架商品</a>
        <a href="https://a.app.qq.com/o/simple.jsp?pkgname=com.pharm800&amp;fromcase=40002">下载APP</a>
        <a href="http://b2c.wap.800.net:86/personal/about">关于八百方</a>
        <a href="http://m.800pharm.com/zhuanti/zs/wap/">招商入驻</a>
      </div>
    </div>
    <div class="certifications_box">
      <p>互联网交易服务资格证书：国A20140001</p>
      <p>- 八百方 正品药 -</p>
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
  name: "Footer",
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

.kf_tell_index{
      display: block;
      margin-top: 12px;

      img{
          max-width: 100%;
          vertical-align: top;
      }
  }

  .tip_index{
      width: 100%;
      text-align: center;
      background: #fff;
      padding: 12px 0;
      color: #0b65b3;
      font-size: 14px;
      font-weight: 600;
      margin-top: 12px;
  }

  .bbf_healthy_links{
      padding: 12px 24px;
      overflow: hidden;

      a{
          text-align: center;
          width: 25%;
          float: left;
          border-right: 1px solid #b9b9b9;
          box-sizing: border-box;
          margin: 5px 0 11px;
          color: #222;

          &:nth-child(4n){
              margin-right: 0;
              border-right: 0;
          }
      }
  }

  .certifications_box{
      color: #666;
      padding: 0;
  }
</style>
