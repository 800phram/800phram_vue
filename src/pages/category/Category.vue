<template>
  <div class="category">
    <section class="sorts_content" style="height: 617px;">
      <div class="nav_box">
        <ul class="nav" id="nav_tab">
          <li class="li_list" v-for="(tab,index) in navTab">{{tab}}</li>
          <!-- <li class="li_list">中西成药</li>
          <li class="li_list">营养保健</li>
          <li class="li_list cur">美容护理</li>
          <li class="li_list">母婴用品</li>
          <li class="li_list">成人用品</li>
          <li class="li_list">用药养生</li>
          <li class="li_list">隐形眼镜</li> -->
        </ul>
       <div class="cataDetail" id="tab_item">
          <div class="nav_item" style="display: none;">
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=155&amp;obcid=24">检测器械</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=156&amp;obcid=24">助行器械</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=157&amp;obcid=24">针灸拔罐</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=158&amp;obcid=24">医用辅料</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=159&amp;obcid=24">医疗用品</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=160&amp;obcid=24">保健理疗</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=161&amp;obcid=24">制氧器材</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=443&amp;obcid=24">家用医疗器械</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=453&amp;obcid=24">防辐射用品</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=626&amp;obcid=24">贴膏剂类</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=633&amp;obcid=24">其它器械</a>
              <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=697&amp;obcid=24">肿瘤术后护理</a>
          </div>
          <div class="nav_item" style="display: none;">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=4&amp;obcid=1">感冒清热</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=5&amp;obcid=1">呼吸系统</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=6&amp;obcid=1">胃肠用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=7&amp;obcid=1">肝胆用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=8&amp;obcid=1">泌尿系统</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=9&amp;obcid=1">心脑血管</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=10&amp;obcid=1">内分泌药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=11&amp;obcid=1">妇科用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=12&amp;obcid=1">儿科用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=14&amp;obcid=1">男科用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=15&amp;obcid=1">神经系统</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=17&amp;obcid=1">风湿跌打</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=19&amp;obcid=1">营养滋补</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=20&amp;obcid=1">皮肤外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=21&amp;obcid=1">抗生素类</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=22&amp;obcid=1">五官用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=23&amp;obcid=1">其它内服药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=70&amp;obcid=1">妇科外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=81&amp;obcid=1">儿科外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=150&amp;obcid=1">肿瘤用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=464&amp;obcid=1">商品组合</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=465&amp;obcid=1">皮肤用药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=524&amp;obcid=1">新稀特药</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=535&amp;obcid=1">风湿外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=543&amp;obcid=1">五官外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=549&amp;obcid=1">胃肠外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=552&amp;obcid=1">其它外用</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=555&amp;obcid=1">注射剂类</a>
          </div>
          <div class="nav_item" style="display: none;">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=227&amp;obcid=25">丰胸/减肥</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=228&amp;obcid=25">心血管保健</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=570&amp;obcid=25">保健食品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=583&amp;obcid=25">食品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=600&amp;obcid=25">地方特产</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=603&amp;obcid=25">零食小吃</a>
          </div>
          <div class="nav_item" style="">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=175&amp;obcid=26">时尚彩妆</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=229&amp;obcid=26">基础护理</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=230&amp;obcid=26">全身护理</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=231&amp;obcid=26">特殊化妆品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=389&amp;obcid=26">男士护理品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=410&amp;obcid=26">其它护理品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=429&amp;obcid=26">保健用品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=440&amp;obcid=26">日化用品</a>
          </div>
          <div class="nav_item" style="display: none;">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=194&amp;obcid=28">宝贝用品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=646&amp;obcid=28">妈妈用品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=655&amp;obcid=28">妈妈食品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=659&amp;obcid=28">宝贝食品</a>
          </div>
          <div class="nav_item" style="display: none;">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=198&amp;obcid=29">避孕用品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=199&amp;obcid=29">情趣用品</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=202&amp;obcid=29">检测用品</a>
          </div>
          <div class="nav_item" style="display: none;">
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=189&amp;obcid=27">中药饮片</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=191&amp;obcid=27">礼品专区</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=395&amp;obcid=27">茗茶类</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?twbcid=561&amp;obcid=27">药膳汤料</a>
            <a class="categoryItem" href="http://b2c.wap.800.net:86/search.html?obcid=565&amp;twbcid=27">参茸滋补</a>
          </div>
          <div class="nav_item" style="display: none;">
               <a href="http://b2c.wap.800.net:86/search.html?twbcid=5020&amp;obcid=24&amp;thrbcid=5022" class="categoryItem">美瞳</a>
               <a href="http://b2c.wap.800.net:86/search.html?twbcid=5020&amp;obcid=24&amp;thrbcid=5030" class="categoryItem">隐形近视眼镜</a>
               <a href="http://b2c.wap.800.net:86/search.html?twbcid=5020&amp;obcid=24&amp;thrbcid=5023" class="categoryItem">隐形眼镜护理液</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Vue from "vue";


export default {
  data() {
    return {
      swiperOption: {
        
      },
      navTab:["医疗器械","中西成药","营养保健","美容护理","母婴用品","成人用品","用药养生","隐形眼镜"],
      tabConts:[{
        list:[{
          link:"",
          goods_name:"检测器械",
        },{
          link:"",
          goods_name:"助行器械",
        },{
          link:"",
          goods_name:"针灸拔罐",
        },{
          link:"",
          goods_name:"医用辅料",
        },{
          link:"",
          goods_name:"医疗用品",
        },{
          link:"",
          goods_name:"保健理疗",
        },{
          link:"",
          goods_name:"制氧器材",
        },{
          link:"",
          goods_name:"家用医疗器械",
        },{
          link:"",
          goods_name:"防辐射用品",
        },{
          link:"",
          goods_name:"贴膏剂类",
        },{
          link:"",
          goods_name:"其它器械",
        },{
          link:"",
          goods_name:"肿瘤术后护理",
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
  name: "Category",
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
html,body{
    background-color:#f2f2f2;
}
  .nav_box{
    margin-top:50px;
    overflow:hidden;
    height:inherit;
    position:relative;
    background-color:#f2f2f2;
    .nav{
        position:absolute;
        width:85px;
        // margin-top:2px;
        top:2px;
        left:0;
         background-color:#fff;
        .li_list{
            text-align: center;
            font-size:16px;
            color:#333;
            height:46px;
            line-height: 46px;
            border-bottom:2px solid #f2f2f2;
            cursor:pointer;
             -webkit-tap-highlight-color:transparent;

            &.cur{
                background-color:#f2f2f2;
                border-left:2px solid #ea063c;

                a{
                    color:#ea063c;
                }
            }
        }
        &:after{
            background-color:#fff;
            bottom:0;
            content:" ";
            display:block;
            width:85px;
        }
    }
    .cataDetail{
        margin-left:85px;
        padding-left:6px;
        height:inherit;
        overflow-y:auto;
        .nav_item{
            margin-top:8px;
            padding-right:5px;
            .categoryItem{
                display:block;
                float:left;
                width:32%;
                height:65px;
                 -webkit-tap-highlight-color:transparent;
                background-color:#fff;
                text-align: center;
                padding-top:20px;
                box-sizing:border-box;
                margin-left:0.8%;
                margin-bottom:5px;
                outline-style: none;
                font-size:14px;
            }
        }
    }
}
</style>
