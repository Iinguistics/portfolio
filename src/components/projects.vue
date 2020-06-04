<template>
<div class="body">
  <!-- title / header of page -->
    <div class="title-container">
            <article class="head-img">
                <div class="head-img-wrapper">
                    <div class="head-img-inner">
                        <img class="head-img-holder" src="../assets/hair-5.jpg" alt="" />
                    </div>
                </div>
            </article>
            <div class="hero-title">
                <div class="title">
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
        <!-- grid image / listed projects -->
   <div class="project-container">
      <div class="bg1" id="view-src">
          <a href="#" target="_blank">
        <p>View Weather App Source Code</p>
      </a>
       <a href="#" target="_blank">
        <p>View Stat Tracker Source Code</p>
      </a>
      <a href="#" target="_blank">
        <p>View Stat Tracker Source Code</p>
      </a>
      <a href="#" target="_blank">
        <p>View Stat Tracker Source Code</p>
      </a>
      <a href="#" target="_blank">
        <p>View Stat Tracker Source Code</p>
      </a>
      </div>
    
     
      <div class="bg1">
      </div>
      <div class="bg2">
      </div>
       <a class="bg1" href="#" target="_blank">
        <h2>Weather App</h2>
        <p>Built with JQuery & Dark Sky API</p>
      </a>
       <a class="bg1" href="#" target="_blank">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </a>
       <a class="bg2" href="#" target="_blank">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </a>
      <div class="bg1">
      </div>
     <a class="bg1" href="#" target="_blank">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </a>
       <a class="bg2" href="#" target="_blank">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </a>
      <a class="bg2" href="#" target="_blank">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </a>
      <div class="bg2">
      </div>
      <div class="bg2">
      </div>
       <div class="bg2">
      </div>
       <div class="bg2">
      </div>
    
 
  </div>
</div>
 
</template>

<script>
import TweenMax from 'gsap';
import $ from 'jquery';
import Expo from 'gsap';

export default {
  name: 'projects',
  data(){
    return{
     


    }
  },
  methods: {
    header: function(){
        $(document).ready(function() {
              const $img = $(".head-img");

                $img.mousemove(function (e) {
                    var xPos = $(this).data("xPos");
                    var yPos = $(this).data("yPos");
                    var mouseX = e.pageX;
                    var mouseY = e.pageY;
                    var left = mouseX - xPos;
                    var top = mouseY - yPos;
                    var origin = "center center -300";
                    var xPerc =
                        ((left - $(this).data("itemWidth") / 2) / $(this).data("itemWidth")) * 200;
                    var yPerc =
                        ((top - $(this).data("itemHeight") / 2) / $(this).data("itemHeight")) * 200;

                    TweenMax.to($(this).data("imgOuter"), 3, {
                        rotationX: 0.1 * yPerc,
                        rotationY: -0.1 * xPerc,
                        transformOrigin: origin,
                        ease: Expo.easeOut,
                    });
                });

                $img.each(function () {
                    $(this).data("xPos", $(this).offset().left);
                    $(this).data("yPos", $(this).offset().top);
                    $(this).data("itemWidth", $(this).width());
                    $(this).data("itemHeight", $(this).height());
                    $(this).data("imgOuter", $(this).find(".head-img-inner"));
                });

                $img.on("mouseleave", function () {
                    TweenMax.to($(this).data("imgOuter"), 3, {
                        rotationX: 0,
                        rotationY: 0,
                        transformOrigin: origin,
                        ease: Expo.easeOut,
                    });
                });
        });
    }
  },
  mounted(){
    this.header();
  }

}
</script>


<style scoped>
.body{
  background: #333;
}

a{
  text-decoration: none !important;
}
.project-container{
  box-sizing: border-box;
  margin: 0;
  padding:0;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 8px;
}

.project-container > div{
  height: 205px;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease-in;
}

.project-container > div:hover {
  opacity: 0.7;
  transform: scale(0.98);
}

.project-container > a{
  height: 205px;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease-in;
}

.project-container > a:hover {
  opacity: 0.7;
  transform: scale(0.98);
}


h2 {
  font-size: 45px;
  font-weight: 300;
  margin: 10px;
}

h2 span {
  font-size: 30px;
}

p {
  font-size: 20px;
}

.project-container > div:nth-of-type(1) {
  grid-column: 1 / 3;
}

.project-container > a:nth-of-type(6) {
  grid-column: 3 / 5;
}

.project-container > div:nth-of-type(9) {
  grid-column: 3 / 5;
}

.project-container > div:nth-of-type(10) {
  grid-column: 1 / 3;
}



.bg1 {
  background: url('../assets/puzzle.jpg');
  color: #fff;;
}

.bg2 {
  background: url('https://i.ibb.co/Fb5jb3J/bg2.jpg');
  color: #333;
}

#view-src:hover{
  opacity: 1.0;
}

#view-src p{
   font-size: 17px;
   color: #000;
   font-weight: 700;
}

#view-src p:hover{
  color: #00FF00 ;
  text-decoration: underline;
}


/* header */
 .title-container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #121212;
 }

 .head-img {
    width: 500px;
    height: 500px;
    perspective: 300px;
}

.head-img-wrapper {
    position: relative;
    z-index: 1;
    height: 100%;
    background: black;
    overflow: hidden;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.3);
    transform-style: preserve-3d;
}

.head-img-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
}

.head-img-holder {
    transform: scale(1.4);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: exclusion;
}

.title h1 {
    font-family: "Monument Extended";
    color: transparent;
    font-size: 36px;
    letter-spacing: 12px;
    -webkit-text-stroke: 2px white;
    text-transform: uppercase;
}



</style>
