<template>
  <!-- <div class="navigation">
    
  </div> -->
  <div class="index_layout_box season_common_box">
    <img src="http://b2c.wap.800.net:86/images/wap/item_title03.png" alt="季节常见病" class="img_title">
    <div class="sc_content">
      <div class="sc_img_list">
        <table width="100%" border="1">
          <tbody>
            <tr>
              <td rowspan="2">
                  <a href="http://m.800pharm.com/zhuanti/sgzt/wap/?gg_code=wap_jibing_1">
                      <img src="http://img.800pharm.com/images/20180208/20180208171527_993.jpg">
                  </a>
              </td>
              <td>
                  <a href="http://m.800pharm.com/special/sepDermatology/index.html?gg_code=wap_jibing_2">
                      <img src="http://img.800pharm.com/images/20180208/20180208171729_372.jpg">
                  </a>
              </td>
              <td>
                  <a href="http://m.800pharm.com/zhuanti/yszt/wap/?gg_code=wap_jibing_4">
                      <img src="http://img.800pharm.com/images/20180208/20180208171849_355.jpg">
                  </a>
              </td>
              <td>
                  <a href="http://m.800pharm.com/search/鼻炎.html?gg_code=wap_jibing_5">
                      <img src="http://img.800pharm.com/images/20180206/20180206111433_885.jpg">
                  </a>
              </td>
            </tr>
            <tr>
              <td>
                  <a href="http://m.800pharm.com/zhuanti/wbzt/wap/?gg_code=wap_jibing_3">
                      <img src="http://img.800pharm.com/images/20180206/20180206111455_546.jpg">
                  </a>
              </td>
              <td colspan="2">
                  <a href="http://m.800pharm.com/special/augRheumatism/index.html?gg_code=wap_jibing_6">
                      <img src="http://img.800pharm.com/images/20180206/20180206111424_497.jpg">
                  </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="sc_content m_top_1rem">
      <div class="health_information">
        <div class="hi_title"></div>
        <div class="hi_slide_box">
            <ul style="transition: all 0s ease 0s; transform: translate3d(0px, 0px, 0px);">
              <li style="transition: all 0s ease 0s; transform: translate3d(0px, -35px, 0px);">
                  <a href="/news/">
                    <p>熊胆粉有什么注意事项</p>
                    <p>熊胆粉的禁忌是什么</p>
                  </a>
              </li>
              <li style="transition: all 0s ease 0s; transform: translate3d(0px, 0px, 0px);">
                  <a href="/news/">
                    <p>复方杜仲健骨颗粒的价格如何？</p>
                    <p>复方杜仲健骨颗粒的注意事项有哪些呢？</p>
                  </a>
              </li>
              <li style="transition: all 0s ease 0s; transform: translate3d(0px, 35px, 0px);">
                  <a href="/news/">
                    <p>熊胆粉有什么注意事项</p>
                    <p>熊胆粉的禁忌是什么</p>
                  </a>
              </li>
              <li style="transition: all 0s ease 0s; transform: translate3d(0px, 70px, 0px);">
                  <a href="/news/">
                    <p>复方杜仲健骨颗粒的价格如何？</p>
                    <p>复方杜仲健骨颗粒的注意事项有哪些呢？</p>
                  </a>
              </li>
            </ul>
        </div>
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
  name: "CommonDisease",
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

.sc_content{
        padding: 10px 18px;
        background: #fff;
        .sc_img_list{
            table,td,{
                border: 1px solid #fff;
                img{
                    width: 100%;
                }
            }
        }
        .health_information{
            position: relative;
            overflow: hidden;
            padding-left: 42px;
            .hi_title{
                position: absolute;
                top: 0;
                left: 0;
                width: 36px;
                height: 36px;
                background: url(http://b2c.wap.800.net:86/images/wap/i_jkzx.png) no-repeat top left;
                background-size: contain;
            }

            .hi_slide_box{
                position: relative;
                overflow: hidden;

                &:after{
                    content: '';
                    display: block;
                    width: 100%;
                    padding-top: 35px;
                }

                ul{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 35px;

                    li{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        background: #fff;

                        p{
                            position: relative;
                            padding-left: 10px;
                            font-size: 16px;
                            overflow: hidden;
                            line-height: 18px;
                            height: 18px;
                            white-space: nowrap;
                            text-overflow: ellipsis;

                            &:before{
                                position: absolute;
                                left: 1px;
                                top: 6px;
                                content: " ";
                                width: 4px;
                                height: 4px;
                                display: block;
                                border-radius: 50%;
                                background: #777;
                            }
                        }
                    }
                }
            }

        }
    }
</style>
