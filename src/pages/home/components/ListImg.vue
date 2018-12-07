

<template>
  <div>
    <div class="listImg">
        <img :src="myImg" style="with:100%;" alt="">
      </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      swiperOption: {
        
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  name: "ListImg",
  props: {
    myImg: String
  },
  computed: {
    
  },
  mounted() {
    
  },
  components: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.listImg img{
  width: 100%;
  height: 100%;
  display: block;
  min-height: 165px;
}

</style>
