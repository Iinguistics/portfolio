<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from './components/navBar';

export default {
  name: 'App',
  components: {
    navBar
  },
  methods: {
     toTop: function(){
     window.scrollTo(0, 0);
   }
  },
  mounted() {
    this.toTop();
  }
}
</script>

<style>
@font-face {
font-family: "Coco Gothic";
src: url("./assets/fonts/CocoGothic_trial.ttf");
}

@font-face {
font-family: "Coco Gothic Bold";
src: url("./assets/fonts/CocoGothic-Bold_trial.ttf");
}

#app {
   font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,h2,h3,h4{
  font-family: 'Russo One', sans-serif;
}

html {
  scroll-behavior: smooth;
}



</style>
