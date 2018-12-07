<template>
  <!-- <div class="navigation">
    
  </div> -->
  <div class="index_layout_box pm_box">
    <img src="http://b2c.wap.800.net:86/images/wap/item_title04.png" alt="中老年医药馆" class="img_title">

    <div class="ep_content_left">
        <div class="ep_left">
            <a href="http://m.800pharm.com/zhuanti/sgzt/wap/?gg_code=Ydsygd1">
                <img src="http://img.800pharm.com/images/20180206/20180206173358_623.jpg">
            </a>
        </div>
        <div class="ep_right">
            <a href="http://m.800pharm.com/zhuanti/zlk/wap/?gg_code=Ydsygd2">
                <img src="http://img.800pharm.com/images/20180206/20180206173413_492.jpg">
            </a>
            <a href="http://m.800pharm.com/zhuanti/yig/wap/?gg_code=Ydsygd3">
                <img src="http://img.800pharm.com/images/20180206/20180206173434_999.jpg">
            </a>
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
  name: "MedicinePavilion",
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

.ep_content_left{
        background: #fff;
        overflow: hidden;
        img{
            width: 100%;
        }
        .ep_left{
            position: relative;
            width: 40.9%;
            float: left;

            &:after{
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 1px;
                background: #e6e6e6;
            }
        }
        .ep_right{
            width: 59.1%;
            float: left;
            a:first-child{
                position: relative;
                display: block;

                &:after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: #e6e6e6;
                }
            }
        }
    }

    .ep_content_right{
        background: #fff;
        overflow: hidden;

        img{
            width: 100%;
        }

        .ep_left{
            width: 59.1%;
            float: left;

            a{
                position: relative;
                display: block;

                &:after{
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    width: 1px;
                    background: #e6e6e6;
                }

                &:first-child{
                    &:before{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 1px;
                        background: #e6e6e6;
                    }
                }
            }
        }

        .ep_right{
            width: 40.9%;
            float: left;
        }
    }
</style>
