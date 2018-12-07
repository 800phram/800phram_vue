<template>
  <div>
    <div class="flashsale">
      <div class="index_layout_box panic_buying_box">
        <div class="buy_header">
          <p class="buy_title">
              <i class="icon_buy"></i>
              限时抢购
          </p>
          <p class="count_down">
              还剩 <span id="hour">16</span> : <span id="mini">44</span> : <span id="sec">53</span> 结束
          </p>
        </div>
        <div class="buying_pro_wrapper">
          <!-- 100px*数量 -->
          <ul class="buying_pro_box" style="width: 1000px;">
            <li v-for="(list,index) in flashsale">
                <a :href="list.link">
                    <img v-lazy="list.img">
                    <p class="buying_pro_title">{{list.title}}</p>
                    <p class="buying_pro_price">¥{{list.shop_price}} <span>/ ¥<del>{{list.market_price}}</del></span></p>
                </a>
            </li>
            <!-- <li>
                <a href="http://m.800pharm.com/product-100115-1409790.html">
                    <img src="http://img.800pharm.com/images/20180531/20180531143559_538.jpg">
                    <p class="buying_pro_title">贝双定 14片</p>
                    <p class="buying_pro_price">¥60 <span>/ ¥<del>120</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100516-1220396.html">
                    <img src="http://img.800pharm.com/images/20181030/20181030091908_90.jpg">
                    <p class="buying_pro_title">金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠</p>
                    <p class="buying_pro_price">¥169 <span>/ ¥<del>340</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100297-1389913.html">
                    <img src="http://img.800pharm.com/images/20181106/20181106120013_59.jpg">
                    <p class="buying_pro_title">润众*28片</p>
                    <p class="buying_pro_price">¥320 <span>/ ¥<del>490</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100115-1392846.html">
                    <img src="http://img.800pharm.com/images/20180619/20180619112626_912.jpg">
                    <p class="buying_pro_title">3盒华蟾素胶囊 免配送费</p>
                    <p class="buying_pro_price">¥280 <span>/ ¥<del>350</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100873-1575252.html">
                    <img src="http://img.800pharm.com/images/20181102/20181102104737_152.jpg">
                    <p class="buying_pro_title">西洋参 3g*20包</p>
                    <p class="buying_pro_price">¥98 <span>/ ¥<del>118</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100873-1477897.html">
                    <img src="http://img.800pharm.com/images/20181102/20181102104504_621.jpg">
                    <p class="buying_pro_title">润众*5盒</p>
                    <p class="buying_pro_price">¥448 <span>/ ¥<del>620</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100430-1375816.html">
                    <img src="http://img.800pharm.com/images/20181101/20181101134603_605.jpg">
                    <p class="buying_pro_title">逸青 糠酸莫米松鼻喷雾剂 50微g*60揿</p>
                    <p class="buying_pro_price">¥42 <span>/ ¥<del>74</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100115-1406050.html">
                    <img src="http://img.800pharm.com/images/20181018/20181018100941_789.jpg">
                    <p class="buying_pro_title">优思弗 熊去氧胆酸胶囊</p>
                    <p class="buying_pro_price">¥179 <span>/ ¥<del>262</del></span></p>
                </a>
            </li>
            <li>
                <a href="http://m.800pharm.com/product-100883-1469731.html">
                    <img src="http://img.800pharm.com/images/20181025/20181025085903_377.jpg">
                    <p class="buying_pro_title">恩替卡韦分散片（贝双定）</p>
                    <p class="buying_pro_price">¥28 <span>/ ¥<del>65</del></span></p>
                </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import Vue from "vue";


export default {
  data() {
    return {
      swiperOption: {
        
      },
      flashsale: [{
        link:"http://m.800pharm.com/product-100883-1475563.html",
        img:"http://img.800pharm.com/images/20181116/20181116110109_645.jpg",
        title:"10盒装免配送费",
        shop_price:"320",
        market_price:"450"
      },{
        link:"http://m.800pharm.com/product-100115-1409790.html",
        img:"http://img.800pharm.com/images/20180531/20180531143559_538.jpg",
        title:"贝双定 14片",
        shop_price:"60",
        market_price:"120"
      },{
        link:"http://m.800pharm.com/product-100516-1220396.html",
        img:"http://img.800pharm.com/images/20181030/20181030091908_90.jpg",
        title:"金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠",
        shop_price:"169",
        market_price:"340"
      },{
        link:"http://m.800pharm.com/product-100115-1409790.html",
        img:"http://img.800pharm.com/images/20180531/20180531143559_538.jpg",
        title:"贝双定 14片",
        shop_price:"60",
        market_price:"120"
      },{
        link:"http://m.800pharm.com/product-100516-1220396.html",
        img:"http://img.800pharm.com/images/20181030/20181030091908_90.jpg",
        title:"金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠",
        shop_price:"169",
        market_price:"340"
      },{
        link:"http://m.800pharm.com/product-100115-1409790.html",
        img:"http://img.800pharm.com/images/20180531/20180531143559_538.jpg",
        title:"贝双定 14片",
        shop_price:"60",
        market_price:"120"
      },{
        link:"http://m.800pharm.com/product-100516-1220396.html",
        img:"http://img.800pharm.com/images/20181030/20181030091908_90.jpg",
        title:"金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠",
        shop_price:"169",
        market_price:"340"
      },{
        link:"http://m.800pharm.com/product-100883-1475563.html",
        img:"http://img.800pharm.com/images/20181116/20181116110109_645.jpg",
        title:"10盒装免配送费",
        shop_price:"320",
        market_price:"450"
      },{
        link:"http://m.800pharm.com/product-100516-1220396.html",
        img:"http://img.800pharm.com/images/20181030/20181030091908_90.jpg",
        title:"金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠",
        shop_price:"169",
        market_price:"340"
      },{
        link:"http://m.800pharm.com/product-100883-1475563.html",
        img:"http://img.800pharm.com/images/20181116/20181116110109_645.jpg",
        title:"10盒装免配送费",
        shop_price:"320",
        market_price:"450"
      }]
    }
  },
  name: "FlashSale",
  // props: {
  //   msg: String
  // },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  },
  components: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  .flashsale{
    width: 100%;
    .index_layout_box{
      width: 100%;
    }
  }
  .panic_buying_box{
    background: #fff;
    .buy_header{
      width: 100%;
      box-sizing: border-box;
      padding: 10px 11px;
      background: url(http://m.800pharm.com/images/wap/item_bg.png) no-repeat left top;
      background-size: contain;
      overflow: hidden;
      border-bottom: 1px solid #e9e9e9;
    }
    .buy_title{
      float: left;
      color: #ff0024;
      font-size: 20px;
      font-weight: 600;
      .icon_buy{
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url(http://m.800pharm.com/images/wap/i_time.png) no-repeat;
        background-size: contain;
        vertical-align: middle;
      }
    }
    .count_down{
      float: right;
      font-size: 14px;
      color: #222;
      margin-top: 5px;
      span{
        display: inline-block;
        padding: 0 5px;
        background: #222;
        color: #fff;
        border-radius: 2px;
      }
    }
    .buying_pro_wrapper{
      overflow-x: auto;
      &::-webkit-scrollbar{
        display:none;
      }
    }
    .buying_pro_box{
      display: block;
      padding: 12px 18px;
      overflow: hidden;
      li{
        float: left;
        width: 90px;
        margin-right: 10px;
        a{
          display: block;
        }
        img{
          padding: 8%;
          width: 84%;
          border: 1px solid #f4f4f4;
          margin-bottom: 3px;
        }
        p{
          width: 100%;
          overflow:hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
          padding-left: 2%;
        }
        .buying_pro_title{
          font-size: 14px;
          color: #222;
          margin-bottom: 5px;
        }
        .buying_pro_price{
          font-size: 14px;
          color: #ff0024;
          span{
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
</style>
