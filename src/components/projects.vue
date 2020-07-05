<template>
<div>
   <!-- barba -->
    <div data-barba="wrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
    </div>
      <!-- barba end   --> 
  <!-- title / header of page -->
    <div class="title-container">
            <article class="head-img">
                <div class="head-img-wrapper">
                    <div class="head-img-inner">
                        <img class="head-img-holder" src="../assets/puzzle-2.jpg" alt="" />
                    </div>
                </div>
            </article>
            <div class="hero-title">
                <div class="title">
                    <h1>Projects</h1>
                </div>
            </div>
        </div>
        <!-- preview component -->
        <Preview />
        <!--  -->
        <div class="github-header">
          <h1>Take me to the source</h1><a href="https://github.com/Iinguistics" target="_blank"><img src="../assets/icons/github-color-icon.png" alt="github logo"/></a>
        </div>
        <!-- grid image / listed projects -->
   <div class="project-container">
      <div class="bg1 links">
      
      </div>
    
     
      <div class="bg1 links">
         <router-link to="/"><p>Home</p></router-link>
         <router-link to="/about"><p>About</p></router-link>
         <router-link to="/skills"><p>Skills</p></router-link>
         <router-link to="/contact"><p>Contact</p></router-link>
      </div>
      <div class="bg2">
      </div>
        <a class="bg1" href="https://github.com/Iinguistics/Hair" target="_blank">
        <h2>Hair Salon</h2>
        <p>Built with Vue,Node/Express,MongoDB,Bcrypt,ThreeJs &GSAP</p>
        <p>Full Stack (CRUD)</p>
      </a>
       <a class="bg1" href="https://github.com/Iinguistics/ctdi" target="_blank">
        <h2>CTDI</h2>
        <p>Built with Vue,ThreeJs & Google Charts</p>
      </a>
       <a class="bg1" href="https://github.com/Iinguistics/Stat-Tacker" target="_blank">
        <h2>Stat Tracker</h2>
        <p>Built with Vue,Node/Express & Tracker.gg API</p>
      </a>
      <div class="bg2">
      </div>
       <a class="bg1" href="https://github.com/Iinguistics/portfolio" target="_blank">
        <h2>Portfolio</h2>
        <p>Built with Vue, pixie js & GSAP</p>
      </a>
       <a class="bg1" href="https://github.com/Iinguistics/weatherApp" target="_blank">
        <h2>Weather App</h2>
        <p>Built with JQuery & Open weather map API</p>
        <p>(First project I ever built)</p>
      </a>
      <div class="bg2">
      </div>
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
import barba from '@barba/core';
import gsap from 'gsap';
import Preview from './preview';

export default {
  name: 'projects',
  components: {
    Preview
  },
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
    },

     delay: function(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
   },
  

   pageTransition: function() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
},


      trans: function(){
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(3000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
      });
     },
     toTop: function(){
     window.scrollTo(0, 0);
    }

  },
  mounted(){
    this.header();
    this.delay();
    this.pageTransition();
    this.trans();
    this.toTop();
  }

}
</script>


<style scoped>

 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #12343B;
    width: 0%;
    height: 100%;
}

.load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
    pointer-events: none;
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
  background: #222;
  margin-top: 55px;
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


h1,h2 {
  font-family: "Coco Gothic Bold";
  font-weight:normal;
  font-style:normal;
  font-size: 45px;
  font-weight: 300;
  margin: 10px;
}

h2 span {
  font-size: 30px;
}

p {
  font-size: 18px;
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
  background: url('../assets/puzzle-white.jpg');
  color: #000;
}

.bg1 p{
  font-size: 16px;
  font-weight: 800;
}

.bg2 {
  background: url('../assets/nature-road.jpg');
  color: #000;
}

.links:hover{
  opacity: 1.0;
}

.links p{
   font-size: 17px;
   color: #000;
   font-weight: 700;
}

.links p:hover{
  color: #0A192F;
  text-decoration: underline;
  font-weight: 400;
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
