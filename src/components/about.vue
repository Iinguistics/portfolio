<template>
  <div>
    <!-- barba -->
    <div data-barba="wrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
     </div> 
      <!-- barba end   -->  
      
      <div class="white-space"></div>
     <div class="head-container">
       <div id="header"> </div>
     </div>
    
        <div class="about-header">
      <h1>About Me</h1>
     </div>
     <div class="about-container">
       <div class="about-item">
         <h5>Hello, I'm James, a full stack developer based in El Dorado Hills, CA.</h5>
         <p>I enjoy creating software that has a positive impact of people's life, whether that be websites, applications, or anything in between.</p>
         <p>I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
         </p>
        <p>
          I enjoy problem solving, & have high ambitions with high attention to detail, I am interested in the entire frontend, backend spectrums & working with fellow ambitious life long learners.
        </p>
       </div>
      
     </div>
     <!-- circle spinner -->
    <div class="circular-text">
      <span id="rotated">jogging • development • hiking • reading • movies • learning • music • gaming •</span>
    </div>
    <div class="circleArrow">
      <ion-icon name="arrow-down"></ion-icon>
    </div>

   <!-- links -->
     <div class="links">
         <router-link to="/" class="link-item">Home</router-link>
         <router-link to="/projects" class="link-item">Projects</router-link>
         <router-link to="/contact" class="link-item">Contact</router-link>
      </div>
     
     
  </div>
</template>

<script> 
import * as PIXI from 'pixi.js'
// import TweenMax from 'gsap';
import Expo from 'gsap/src/EasePack';
import barba from '@barba/core';
import gsap from 'gsap';
import $ from 'jquery';
const CircleType = require('circletype');


export default {
  name: 'about',
  data(){
    return{
      head: require('../assets/computer-1.jpg'),
      ripple: require('../assets/ripple.png'),
      ripple2: require('../assets/ripple-2.jpg'),
      
    }
  },
  methods: {

      header: function(){
        var appDiv=document.getElementById("header")
        var app = new PIXI.Application({ width: 800, height: 500 });
        appDiv.appendChild(app.view);

        app.stage.interactive = true;

        var container = new PIXI.Container();
        app.stage.addChild(container);

        var flag = PIXI.Sprite.from(this.head);
        container.addChild(flag);

        flag.y=-130
        flag.x=-60
        flag.width=1100
        flag.height=700

        var displacementSprite = PIXI.Sprite.from(this.ripple2);


        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        displacementSprite.position = flag.position;

        app.stage.addChild(displacementSprite);

        flag.filters = [displacementFilter];

        displacementFilter.scale.x = 30;
        displacementFilter.scale.y = 60;

        app.ticker.add(function() {
            displacementSprite.x++;
            if(displacementSprite.x > displacementSprite.width)
                displacementSprite.x = 0;
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
                    await delay(2000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ]
      });
     },
     test: function(){
         const circleType = new CircleType(document.getElementById('rotated'));
         circleType.radius(80);
         $(window).scroll(function(){
           var offset = $(window).scrollTop();
           offset = offset * 0.4;
           $(".circular-text").css({
             "-moz-transform": "rotate(" + offset + "deg)",
             "-webkit-transform": "rotate(" + offset + "deg)",
             "-o-transform": "rotate(" + offset + "deg)",
             "-ms-transform": "rotate(" + offset + "deg)",
             "transform": "rotate(" + offset + "deg)"
 
           });
         });
     }
      

  },
  

  mounted(){
      this.header();
      this.delay();
      this.pageTransition();
      //this.trans();
      this.test();
  }
 

}
     

 

</script>

<style scoped>

 .white-space{
     background-color: #121212;
     height: 40px;
 }

 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #3F2A14;
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

.head-container{
    height: 95vh;
    background-color: #121212;
}

#header h2{
    position: absolute;
    color: #fff;
    font-weight: 800;
    left: 50%;
    top: 45%;
}

h1{
  color: #02203c;
}

.about-header{
  margin-top: 200px;
}

.about-header h1{
  font-size: 34px;
  margin-bottom: 50px;
}

.about-container{
  display: flex;
  flex-direction: column;
  max-width: 60%;
  justify-content: space-evenly;
  height: 450px;
  margin:auto;
}

.about-item{
  max-width: 400px; 
  text-align: left;
}

.about-item h5{
  font-size: 20px;
  margin-bottom: 15px;
}

.about-item p{
  font-size: 17px;
  width: 400px;
}



.circular-text{
  position: fixed;
  left: 70%;
  top: 30%;
  transform: translate(-50%, -50%);
  color: #333;
  font-size: 20px;
  font-weight: 800;
  transition: 0.5s ease-in-out;
  -webkit-text-stoke: 1px rgba(255,255,255,0.6);
}

.circleArrow{
  position: fixed;
  left: 70%;
  top: 60%;
  transform: translate(-50%,-50%);
}



ion-icon{
  font-size: 70px;
  color: #333;
}



.links{
 display: flex;
 flex-direction: row;
 margin-top: 50px;
 height: 100px;
 align-items: center;
}

.link-item{
  margin-left: 15px;
}

.link-item::after{
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: #000000;
  transition: width .3s;
}

.link-item:hover::after{
  width: 100%;
  transition: width .3s;
}

a{
  color: #0A192F;
  text-decoration: none !important;
}

a:hover{
  color: #0A192F;
  opacity: 0.9;
}



@media(min-width: 1300px) {
   .white-space{
     height: 120px;
 }

 .head-container{
    height: 86vh;
}

#header h2{
    left: 50%;
    top: 40%;
}

.links{
 margin-top: 100px;
 height: 125px;
}

.circular-text{
  top: 50%;
  left: 65%;
}

.circleArrow{
  top: 70%;
  left: 65%;
}




}

</style>
