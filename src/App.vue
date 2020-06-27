<template>
  <div id="app">
    <navBar class="navBar" />
    <router-view />
  </div>
</template>

<script>
import navBar from './components/navBar';

export default {
  name: 'App',
  components: {
    navBar
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
   font-family: 'Coco Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  scroll-behavior: smooth;
}



</style>
