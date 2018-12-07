<template>
  <div class="hello">
    <SlideShow />
    <Navigation />
    <FlashSale />
    <!-- 推荐商品 -->
    <RecommendCommodity />
    <Coupon />
    <StarMerchant />
    <CommonDisease />
    <MedicinePavilion />
    <Footer />
  </div>
</template>

<script>


import SlideShow from "./SlideShow";
import Navigation from "./Navigation";
import FlashSale from "./FlashSale";
import RecommendCommodity from "./RecommendCommodity";
import Coupon from "./Coupon";
import StarMerchant from "./StarMerchant";
import CommonDisease from "./CommonDisease";
import MedicinePavilion from "./MedicinePavilion";
import Footer from "./Footer";

export default {
  name: "Index",
  // props: {k
  //   msg: String
  // },
  components: {
    // HelloWorld
    SlideShow,
    Navigation,
    FlashSale,
    RecommendCommodity,
    Coupon,
    StarMerchant,
    CommonDisease,
    MedicinePavilion,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-bottom: 55px;
  background: #f5f5f5;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
