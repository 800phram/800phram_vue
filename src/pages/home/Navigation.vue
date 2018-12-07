<template>
  <div class="navigation">
    <swiper :options="swiperOption" ref="mySwiper">
     <!-- slides -->
     <swiper-slide>
        <div class="list">
          <a href="" class="drug_sort">
              <span class="icon drug_sort-icon"></span>
              <p>分类找药</p>
          </a>
          <a href="http://m.800pharm.com/coupon-list" class="coupon_center">
              <span class="icon coupon_center-icon"></span>
              <p>领券中心</p>
          </a>
          <a href="" class="earn_lottry">
              <span class="icon earn_lottry-icon"></span>
              <p>赚取积分</p>
          </a>
          <a href="" class="shop_cart">
              <span class="icon shop_cart-icon"></span>
              <p>购物车</p>
          </a>
          <a href="" class="cardiovascular_division">
              <span class="icon cardiovascular_division-icon"></span>
              <p>心脑血管科</p>
          </a>
          <a href="" class="hepatology">
              <span class="icon hepatology-icon"></span>
              <p>肝胆科</p>
          </a>
          <a href="" class="oncology">
              <span class="icon oncology-icon"></span>
              <p>肿瘤科</p>
          </a>
          <a href="" class="andrology">
              <span class="icon andrology-icon"></span>
              <p>男科</p>
          </a>
        </div>
     </swiper-slide>
     <swiper-slide>
       <div class="list">
          <a href="http://m.800pharm.com/special/anticarcinogen/anticarcinogen.html" class="">
              <span class="icon">
                  <img style="display: block;height: 100%;" src="http://m.800pharm.com/images/wap/home_nav_02_02.png">
              </span>
              <p>抗癌新药</p>
          </a>
          <a href="http://m.800pharm.com/special/hepatitisC/hepatitisC.html" class="">
              <span class="icon">
                  <img style="display: block;height: 100%;" src="http://m.800pharm.com/images/wap/home_nav_02_01.png">
              </span>
              <p>丙肝新药</p>
          </a>
          <a href="http://m.800pharm.com/category/1_19.html" class="maternal_child_division">
              <span class="icon maternal_child_division-icon"></span>
              <p>母婴科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_397.html" class="pediatrics">
              <span class="icon pediatrics-icon"></span>
              <p>儿科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_2.html" class="gynecology">
              <span class="icon gynecology-icon"></span>
              <p>妇科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_398.html" class="gender_health">
              <span class="icon gender_health-icon"></span>
              <p>两性健康</p>
          </a>
          <a href="http://m.800pharm.com/category/1_7.html" class="gastroenterology">
              <span class="icon gastroenterology-icon"></span>
              <p>消化科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_4.html" class="neurology">
              <span class="icon neurology-icon"></span>
              <p>神经科</p>
          </a>
       </div>
     </swiper-slide>
     <swiper-slide>
       <div class="list">
          <a href="http://m.800pharm.com/category/1_17.html" class="urology">
              <span class="icon urology-icon"></span>
              <p>泌尿科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_10.html" class="endocrinology">
              <span class="icon endocrinology-icon"></span>
              <p>内分泌科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_8.html" class="ent">
              <span class="icon ent-icon"></span>
              <p>五官科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_5.html" class="dermatology">
              <span class="icon dermatology-icon"></span>
              <p>皮肤科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_3.html" class="respiratory_diseases">
              <span class="icon respiratory_diseases-icon"></span>
              <p>呼吸科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_11.html" class="rheumatism_orthopedics">
              <span class="icon rheumatism_orthopedics-icon"></span>
              <p>风湿骨科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_15.html" class="psychiatry">
              <span class="icon psychiatry-icon"></span>
              <p>精神科</p>
          </a>
          <a href="http://m.800pharm.com/category/1_6.html" class="nutritious_department">
              <span class="icon nutritious_department-icon"></span>
              <p>滋补调养科</p>
          </a>
        </div>
     </swiper-slide>
     <!-- Optional controls -->
     <div class="swiper-pagination"  slot="pagination"></div>
     <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
     <!-- <div class="swiper-button-next" slot="button-next"></div> -->
     <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>

// import Vue from "vue";
// import VueAwesomeSwiper from "vue-awesome-swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
  name: "Navigation",
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
.navigation .swiper-slide{
  
}
.navigation .list{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 12px;
}
.navigation a{
  width: 25%;
  /*flex: 1;*/
}
.navigation a .icon{
  width: 55px;
  height: 55px;
  display: inline-block;
}
.drug_sort-icon{
  background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat 0 0;
  background-size: 800%;
}
.coupon_center-icon{
  background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -55px 0;
  background-size: 800%;
}
.earn_lottry-icon{
  background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -110px 0;
  background-size: 800%;
}
.shop_cart-icon{
  background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -165px 0;
  background-size: 800%;
}
.cardiovascular_division-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -220px 0;
    background-size: 800%;
}
.hepatology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -275px 0;
    background-size: 800%;
}
.oncology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -330px 0;
    background-size: 800%;
}
.andrology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -385px 0;
    background-size: 800%;
}
.maternal_child_division-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat 0 -55px;
    background-size: 800%;
}
.pediatrics-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -55px -55px;
    background-size: 800%;
}
.gynecology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -110px -55px;
    background-size: 800%;
}
.gender_health-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -165px -55px;
    background-size: 800%;
}
.gastroenterology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -220px -55px;
    background-size: 800%;
}
.neurology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -275px -55px;
    background-size: 800%;
}
.urology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -330px -55px;
    background-size: 800%;
}
.endocrinology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -385px -55px;
    background-size: 800%;
}
.ent-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat 0 -110px;
    background-size: 800%;
}
.dermatology-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -55px -110px;
    background-size: 800%;
}
.respiratory_diseases-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -110px -110px;
    background-size: 800%;
}
.rheumatism_orthopedics-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -165px -110px;
    background-size: 800%;
}
.psychiatry-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -220px -110px;
    background-size: 800%;
}
.nutritious_department-icon {
    background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -275px -110px;
    background-size: 800%;
}

</style>
