<template>
  <div class="recommendCommodity">
    <div class="featured_products" id="fp_box">
      <div class="fp_tab_box">
          <ul>
              <li v-for="(list,index) in tabLists" @click="tabClick(index)" :class="{on:index == idx}" data-id="wap_index_prodRe1">
                  <span>{{list}}</span>
              </li>
              <!-- <li data-id="wap_index_prodRe2">
                <span>强壮男神</span>
              </li>
              <li data-id="wap_index_prodRe3">
                <span>肝爱健康</span>
              </li>
              <li data-id="wap_index_prodRe4">
                <span>神经系统</span>
              </li> -->
          </ul>
      </div>
      <div class="tab_content" id="tab_content">
        <div :data-dd="index" v-show="index == idx" v-for="(tabList,index) in tabConts" class="goods_list_box" id="wap_index_prodRe1">
          <ul class="cf">
            <li v-for="(list,index) in tabList.list">
              <a :href="list.link">
                  <img v-lazy="list.img" style="">
                  <p class="goods_name">{{list.goods_name}}</p>
                  <p class="goods_price cf">
                      ¥<big>{{list.shop_price}}</big>
                      <span>¥<del>{{list.market_price}}</del></span>
                  </p>
              </a>
            </li>
           <!--  <li>
              <a href="http://m.800pharm.com/product-100115-1367851.html">
                  <img src="http://img.800pharm.com/images/20181115/20181115100957_803.jpg" data-original="http://img.800pharm.com/images/20181115/20181115100957_803.jpg" style="">
                  <p class="goods_name">【润众】恩替卡韦分散片*28片装</p>
                  <p class="goods_price cf">
                      ¥<big>340</big>
                      <span>¥<del>480</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100795-1401317.html">
                  <img src="http://img.800pharm.com/images/20181115/20181115101013_961.jpg" data-original="http://img.800pharm.com/images/20181115/20181115101013_961.jpg" style="">
                  <p class="goods_name">复方阿胶浆(无蔗糖)</p>
                  <p class="goods_price cf">
                      ¥<big>262</big>
                      <span>¥<del>498</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100796-1353128.html">
                  <img src="http://img.800pharm.com/images/20181115/20181115101022_122.jpg" data-original="http://img.800pharm.com/images/20181115/20181115101022_122.jpg" style="">
                  <p class="goods_name">龟龄集</p>
                  <p class="goods_price cf">
                      ¥<big>255</big>
                      <span>¥<del>528</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100068-340004.html">
                  <img src="http://img.800pharm.com/images/20181115/20181115101031_833.jpg" data-original="http://img.800pharm.com/images/20181115/20181115101031_833.jpg" style="">
                  <p class="goods_name">陈李济 舒筋健腰丸 45克*10瓶/盒 【领劵有惊喜】 广州白云山陈李济药厂有限公司+消炎镇痛膏6贴+跌打万花油</p>
                  <p class="goods_price cf">
                      ¥<big>890</big>
                      <span>¥<del>1280</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100068-1296171.html">
                  <img src="http://img.800pharm.com/images/20181115/20181115101640_407.jpg" data-original="http://img.800pharm.com/images/20181115/20181115101640_407.jpg" style="">
                  <p class="goods_name">【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司</p>
                  <p class="goods_price cf">
                      ¥<big>658</big>
                      <span>¥<del>661</del></span>
                  </p>
              </a>
            </li> -->
          </ul>
        </div>      
        <!-- <div class="goods_list_box" id="wap_index_prodRe2">
          <ul class="cf">
            <li>
              <a href="http://m.800pharm.com/product-100516-1220396.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101058_631.jpg">
                  <p class="goods_name">金戈 枸橼酸西地那非片10片 白云山 勃起功能障碍  ED 阳痿  10粒特惠</p>
                  <p class="goods_price cf">
                      ¥<big>169</big>
                      <span>¥<del>340</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100516-1098248.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101106_317.jpg">
                  <p class="goods_name">汇仁肾宝片 免配送费</p>
                  <p class="goods_price cf">
                      ¥<big>292</big>
                      <span>¥<del>356</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100826-1565458.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101113_624.jpg">
                  <p class="goods_name">笛梦达克罗宁皮肤抑菌修复膏钻金版20g/盒</p>
                  <p class="goods_price cf">
                      ¥<big>98</big>
                      <span>¥<del>138</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100430-1064105.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101137_891.jpg">
                  <p class="goods_name">京果 海狗丸</p>
                  <p class="goods_price cf">
                      ¥<big>64</big>
                      <span>¥<del>113.33</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100302-1417679.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101145_437.jpg">
                  <p class="goods_name">虎雄 鱼鳔补肾丸</p>
                  <p class="goods_price cf">
                      ¥<big>69</big>
                      <span>¥<del>99</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100302-792268.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115103041_776.jpg">
                  <p class="goods_name">【同仁堂】六味地黄丸（360丸装水蜜丸）</p>
                  <p class="goods_price cf">
                      ¥<big>29.8</big>
                      <span>¥<del>98</del></span>
                  </p>
              </a>
            </li>
          </ul>
        </div> 
        <div class="goods_list_box" id="wap_index_prodRe3">
          <ul class="cf">
            <li>
              <a href="http://m.800pharm.com/product-100795-1482845.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101210_774.jpg">
                  <p class="goods_name">润众  恩替卡韦分散片</p>
                  <p class="goods_price cf">
                      ¥<big>435</big>
                      <span>¥<del>640</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100115-976371.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101219_806.jpg">
                  <p class="goods_name">【素比伏】替比夫定片</p>
                  <p class="goods_price cf">
                      ¥<big>145</big>
                      <span>¥<del>160</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100115-1407076.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101244_986.jpg">
                  <p class="goods_name">和恩 5盒装</p>
                  <p class="goods_price cf">
                      ¥<big>270</big>
                      <span>¥<del>290</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100115-1406996.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101254_98.jpg">
                  <p class="goods_name">10盒装免配送费 维力青</p>
                  <p class="goods_price cf">
                      ¥<big>640</big>
                      <span>¥<del>980</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100457-1054563.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101400_559.jpg">
                  <p class="goods_name">【恩甘定】恩替卡韦胶囊0.5mg*7粒 乙肝 慢性肝炎 乙肝病毒 货到付款 免配送费</p>
                  <p class="goods_price cf">
                      ¥<big>50</big>
                      <span>¥<del>72</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100115-484627.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101409_166.jpg">
                  <p class="goods_name">安络化纤丸 6g*10袋</p>
                  <p class="goods_price cf">
                      ¥<big>58</big>
                      <span>¥<del>78</del></span>
                  </p>
              </a>
            </li>
          </ul>
        </div>
        <div class="goods_list_box" id="wap_index_prodRe4">
          <ul class="cf">
            <li>
              <a href="http://m.800pharm.com/product-100302-1239235.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101437_244.jpg">
                  <p class="goods_name">德巴金</p>
                  <p class="goods_price cf">
                      ¥<big>73</big>
                      <span>¥<del>140</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100302-918347.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101443_628.jpg">
                  <p class="goods_name">【美多芭】多巴丝肼片（40片装）</p>
                  <p class="goods_price cf">
                      ¥<big>79</big>
                      <span>¥<del>100</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100299-1293287.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101450_685.jpg">
                  <p class="goods_name">奥氮平片(欧兰宁)</p>
                  <p class="goods_price cf">
                      ¥<big>90</big>
                      <span>¥<del>125</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100115-1055744.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101456_778.jpg">
                  <p class="goods_name">【赛乐特】盐酸帕罗西汀片</p>
                  <p class="goods_price cf">
                      ¥<big>60</big>
                      <span>¥<del>135</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-100302-1357182.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101505_144.jpg">
                  <p class="goods_name">乐友</p>
                  <p class="goods_price cf">
                      ¥<big>43</big>
                      <span>¥<del>98</del></span>
                  </p>
              </a>
            </li>
            <li>
              <a href="http://m.800pharm.com/product-71000-352493.html">
                  <img src="http://m.800pharm.com/images/wap/loading.png" data-original="http://img.800pharm.com/images/20181115/20181115101513_551.jpg">
                  <p class="goods_name">左乙拉西坦片</p>
                  <p class="goods_price cf">
                      ¥<big>185</big>
                      <span>¥<del>190</del></span>
                  </p>
              </a>
            </li>
          </ul>
        </div> -->
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
      tabLists: ["热卖爆款","强壮男神","肝爱健康","神经系统"],
      tabConts:[{
        list:[{
          link:"http://m.800pharm.com/product-100910-1529398.html",
          img:"http://img.800pharm.com/images/20181115/20181115100947_277.jpg",
          goods_name:"东阿阿胶",
          shop_price:"1499",
          market_price:"1798"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100795-1401317.html",
          img:"http://img.800pharm.com/images/20181115/20181115101013_961.jpg",
          goods_name:"复方阿胶浆(无蔗糖)",
          shop_price:"262",
          market_price:"498"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100068-340004.html",
          img:"http://img.800pharm.com/images/20181115/20181115101031_833.jpg",
          goods_name:"陈李济 舒筋健腰丸 45克*10瓶/盒 【领劵有惊喜】 广州白云山陈李济药厂有限公司+消炎镇痛膏6贴+跌打万花油",
          shop_price:"890",
          market_price:"1280"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        }]
      },{
        list:[{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        },{
          link:"http://m.800pharm.com/product-100068-1296171.html",
          img:"http://img.800pharm.com/images/20181115/20181115101640_407.jpg",
          goods_name:"【领卷拍下更实惠】同溢堂 益安宁丸 112丸*3瓶/盒 同溢堂药业有限公司",
          shop_price:"658",
          market_price:"661"
        }]
      },{
        list:[{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        },{
          link:"http://m.800pharm.com/product-100115-1367851.html",
          img:"http://img.800pharm.com/images/20181115/20181115100957_803.jpg",
          goods_name:"【润众】恩替卡韦分散片*28片装",
          shop_price:"340",
          market_price:"480"
        }]
      },{
        list:[{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        },{
          link:"http://m.800pharm.com/product-100796-1353128.html",
          img:"http://img.800pharm.com/images/20181115/20181115101022_122.jpg",
          goods_name:"龟龄集",
          shop_price:"255",
          market_price:"528"
        }]
      }],
      idx:0
    }
  },
  name: "RecommendCommodity",
  // props: {
  //   msg: String
  // },
  computed: {
    
  },
  mounted() {
    
  },
  components: {
    
  },
  methods:{
    tabClick(index){
      // console.log(index)
      this.idx = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .featured_products{
    margin-top: 12px;
    background: #fff;
    .fp_tab_box{
      ul{
        overflow: hidden;
        li{
          width: 25%;
          float: left;
          text-align: center;
          &.on span{
            position: relative;
            &:after{
              position: absolute;
              left: 50%;
              bottom: -1px;
              z-index: 3;
              content: '';
              width: 12px;
              height: 6px;
              margin-left: -6px;
              background: url(http://m.800pharm.com/images/wap/item_avtive.png) no-repeat center center;
              background-size: contain;
            }
          }
          span{
            display: block;
            margin: 0 2px;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            color: #fff;
          }
          &:nth-child(1) span{
              background-color: #ee2d34;
          }
          &:nth-child(2) span{
              background-color: #555b99;
          }
          &:nth-child(3) span{
              background-color: #3b8e97;
          }
          &:nth-child(4) span{
              background-color: #e86b19;
          }
        }
      }
    }
    .goods_list_box{
      //display: none;
      &:first-child{
          display: block;
      }
      li{
        float: left;
        width: 50%;
        box-sizing: border-box;
        border-right: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        &:nth-child(2n){
            border-right: none;
        }

        &:nth-last-child(1){
            border-bottom: none;
        }

        &:nth-last-child(2){
            border-bottom: none;
        }
        a{
          display: block;
          padding: 12px;
          .goods_name{
            overflow: hidden;
            line-height: 20px;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #333;
            font-size: 14px;
          }
          .goods_price{
            color: #e60e40;
            big{
                font-size: 18px;
            }
            span{
              color: #999;
              margin-left: 6px;
              del{
                  font-size: 14px;
              }
            }
          }
        }
        &:nth-child(2n){
            margin-right: 0;
        }
        img{
            max-width: 100%;
            max-height: 220px;
        }
      }
    }
  }
</style>
