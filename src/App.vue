<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Index from "./pages/home/Index.vue";

export default {
  data () {
    return {
      transitionName: "forward"
    };
  },
  name: "app",
  components: {
    // HelloWorld
    Index
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
