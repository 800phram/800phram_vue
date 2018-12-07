<template>
  <!-- <div class="navigation">
    
  </div> -->
  <div class="index_layout_box coupon_box">
    <img src="http://b2c.wap.800.net:86/images/wap/item_title01.png" alt="先领券后购物" class="img_title">
    <div class="cb_slide_box">
      <ul>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <li>
              <div class="cb_box">
                <a href="http://b2c.wap.800.net:86/coupon-list">
                  <div class="cb_content">
                    <div class="cb_price">
                        <span class="card_type">优惠券</span>
                        <p>¥<span class="price">30</span></p>
                    </div>
                    <div class="cb_text">
                      <p class="store_name">大赢药业</p>
                      <span class="card_desc">满299元使用</span>
                      <div class="card_btn">点击领取</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="cb_box">
                <a href="http://b2c.wap.800.net:86/coupon-list">
                  <div class="cb_content">
                    <div class="cb_price">
                      <span class="card_type">优惠券</span>
                      <p>¥<span class="price">50</span></p>
                    </div>
                    <div class="cb_text">
                      <p class="store_name">大赢药业</p>
                      <span class="card_desc">满399元使用</span>
                      <div class="card_btn">点击领取</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li>
              <div class="cb_box">
                <a href="http://b2c.wap.800.net:86/coupon-list">
                  <div class="cb_content">
                    <div class="cb_price">
                      <span class="card_type">优惠券</span>
                      <p>¥<span class="price">10</span></p>
                    </div>
                    <div class="cb_text">
                      <p class="store_name">大赢药业</p>
                      <span class="card_desc">满99元使用</span>
                      <div class="card_btn">点击领取</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="cb_box">
                <a href="http://b2c.wap.800.net:86/coupon-list">
                  <div class="cb_content">
                    <div class="cb_price">
                      <span class="card_type">优惠券</span>
                      <p>¥<span class="price">20</span></p>
                    </div>
                    <div class="cb_text">
                      <p class="store_name">大赢药业</p>
                      <span class="card_desc">满199元使用</span>
                      <div class="card_btn">点击领取</div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </ul>
    </div>
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
        // autoplay:{
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
        loop: true,
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  name: "Coupon",
  // props: {
  //   msg: String
  // },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    
  },
  components: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
.coupon_box{
  background: #fff;
  padding-bottom: 12px;
  .img_title{
    display:block;
    width: 100%;
  }
  .cb_slide_box{
    position: relative;
    overflow: hidden;
    &:after{
      content: '';
      display: block;
      width: 100%;
      padding-top: 108px;
    }
    ul{
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      li{
        position: absolute;
        background-color:#fff;
        left: 0;
        top: 0;
        width: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: box;
        padding: 8px 6px 36px;
        box-sizing: border-box;
        &:first-child{
          z-index: 1;
        }
        .cb_box{
          position: relative;
          overflow: hidden;
          -moz-box-flex:1;
          -webkit-box-flex:1;
          box-flex:1;
          width: 50%;
          padding:0 6px;
          .cb_content{
            display: -webkit-box;
            display: -moz-box;
            display: box;
            overflow:hidden;
          }
          .cb_price,.cb_text{
            box-sizing: border-box;
            padding:6px;
            height:80px;
          }
          .cb_price{
            position: relative;
            width:40%;
            max-width:40%;
            color:#fff;
            background: url(http://b2c.wap.800.net:86/images/wap/coupon_bg.png) no-repeat;
            background-size: 100% 100%;
            p{
              overflow:hidden;
              white-space:nowrap;
              text-overflow:ellipsis;
              padding-top: 1rem;
            }
            .price{
              font-size:20px;
            }
          }
          .cb_text{
            -moz-box-flex:1;
            -webkit-box-flex:1;
            box-flex:1;
            border:.1rem solid #cd0183;
            border-radius:0 3px 3px 0;
            p{
              font-size: 14px;
              font-weight: 600;
              overflow: hidden;
              line-height: 18px;
              height: 18px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            span{
              font-size: 12px;
              display:block;
              padding-top:1px;
              overflow: hidden;
              line-height: 18px;
              height: 18px;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .card_btn{
              font-size: 12px;
              color: #cf0180;
              border-radius: 8px;
              border: 1px solid #cf0180;
              height: 19px;
              line-height: 19px;
              width: fit-content;
              padding: 0 6px;
              margin-top: 3px;
            }
          }
          a{
            display: block;
            height:100%;
          }
        }
      }
    }
  }
  .dot{
    width: 100%;
    font-size: 0;
    text-align: center;
    span{
      display: inline-block;
      width: 18px;
      height: 3px;
      margin-left: 7px;
      background-color: #dedede;
    }
    .cur{
      background-color: #e6186f;
    }
  }
}

</style>
