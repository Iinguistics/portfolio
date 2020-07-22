<template>
  <div>
        <div class="main-load">
      <div class="white-space"></div>
     <div class="head-container">
       <div id="header"> </div>
        <div class="about-desc">
        <p>I want to build things that make a difference</p>
        </div>
        <div class="about-header">
        <h1>About Me</h1>
        </div>
     </div>

     <!-- link side bar -->
      <div class="link-bar">
        <li><router-link to="/"><img class="link-icons" id="home-img" src="../assets/icons/home-icon.png" alt="home icon"><p id="home-text">Home</p></router-link></li> 
        <li><router-link to="/skills"><img class="link-icons" id="about-img" src="../assets/icons/skills-icon.png" alt="skills icon"><p id="about-text">Skills</p></router-link></li> 
        <li><router-link to="/projects"><img class="link-icons" id="projects-img" src="../assets/icons/eye-icon.png" alt="projects icon"><p id="projects-text">Projects</p></router-link></li>
        <li><a href="mailto:jmsgoytia@gmail.com"><img class="link-icons" id="contact-img" src="../assets/icons/email-icon.png" alt="email icon"><p id="contact-text">Contact</p></a></li> 
    </div>
       <div class="about-wrap">
        
     <div class="about-container">
       <div class="about-item">
         <h5>Hello, I'm James, a front end developer based in El Dorado Hills, CA.</h5>
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
      <span id="rotated">jogging • development • hiking • reading • movies • learning • music • algorithms •</span>
    </div>
   
    <div class="circleArrow">
        <!-- video -->
      <video autoplay muted loop preload>
         <source src="../assets/video/about/digital-face.mp4"
            type="video/mp4">

        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    
       </div>
       <!-- cube slider ------------------------>
          <!-- projects display -->
    <div class="process">
    <h6>Some processes I like to follow</h6>
   </div>
   
     <!-- Swiper -->
 <div class="swiper-outer">
     <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide1">
           <h1>Data Gathering/Research</h1>
        <p>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements. I like to make sure I have a clear and unambiguous picture of what it is im building before moving onto the next step. </p>
         <q>If you fail to plan, you are planning to fail. -Ben Franklin</q>
      </div>
      <div class="swiper-slide slide2">
           <h1>Design</h1>
        <p>Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup. The API design is very important in this stage, you want to ensure the UI has all the API's it needs from the backend so they can trade data seamlessly.  </p>
      </div>
      <div class="swiper-slide slide3">
              <h1>Development</h1>
        <p>Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer. Also a good time to bug hunt & try to break the UI.</p>
      </div>
      <div class="swiper-slide slide4">
              <h1>Launch</h1>
        <p>Monitor & support the product, make sure it is performing the way it is supposed to. Get feedback from the users, is this a success? What can we do to improve on this?</p>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>

    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
 </div>

       <!--  ---------------------------------->
    </div>
   <div class="mobile">
       
        <div class="about-header-mobile">
             <h1>About Me</h1>
            </div>
     
           
       <div class="about-wrap">
        <div class="about-container">
         <div class="about-item">
            <h5>Hello, I'm James, a front end developer based in El Dorado Hills, CA.</h5>
            <p>I enjoy creating software that has a positive impact on people's life, whether that be websites, applications, or anything in between.</p>
            <p>I don’t like to define myself by the work I’ve done. I define myself
                by the work I want to do. I prefer to keep learning, continue challenging myself,
                and do interesting things that matter.
            </p>
            <p>
            I enjoy problem solving, & have high ambitions with high attention to detail, I am interested in the entire frontend, backend spectrums & working with fellow ambitious life long learners.
            </p>
       </div>
      
     </div>
       </div>

             <!-- cube slider ------------------------>
          <!-- projects display -->
    <div class="process">
    <h6>Some processes I like to follow</h6>
   </div>
   
     <!-- Swiper -->
        <div class="swiper-outer">
            <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide slide1">
                <h1>Data Gathering/Research</h1>
                <p>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements. I like to make sure I have a clear and unambiguous picture of what it is im building before moving onto the next step. </p>
                <q>If you fail to plan, you are planning to fail. -Ben Franklin</q>
            </div>
            <div class="swiper-slide slide2">
                <h1>Design</h1>
                <p>Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup. The API design is very important in this stage, you want to ensure the UI has all the API's it needs from the backend so they can trade data seamlessly.  </p>
            </div>
            <div class="swiper-slide slide3">
                    <h1>Development</h1>
                <p>Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer. Also a good time to bug hunt & try to break the UI.</p>
            </div>
            <div class="swiper-slide slide4">
                    <h1>Launch</h1>
                <p>Monitor & support the product, make sure it is performing the way it is supposed to. Get feedback from the users, is this a success? What can we do to improve on this?</p>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>

            <div class="swiper-button-next "></div>
            <div class="swiper-button-prev "></div>
         </div>
        </div>

       <!-- footer -->
   <div class="footer" @click="paths">
    <router-link to="/projects"><img src="../assets/mobile-icons/projects-icon.png" id="about"/>Projects</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png"/>Skills</router-link>
    <a href="mailto:jmsgoytia@gmail.com"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</a>
   </div>
  </div>
  
    
  </div>
</template>

<script> 
import * as PIXI from 'pixi.js'
// import TweenMax from 'gsap';
import Expo from 'gsap/src/EasePack';
//import barba from '@barba/core';
import gsap from 'gsap';
import $ from 'jquery';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
const CircleType = require('circletype');


export default {
  name: 'test',
  data(){
    return{
      head: require('../assets/computer-1.jpg'),
      ripple: require('../assets/ripple.png'),
      ripple2: require('../assets/ripple-2.jpg'),
      x:window.matchMedia("(max-width: 767px)"),
      
    }
  },
  methods: {

      header: function(){
        var appDiv=document.getElementById("header");
        var app = new PIXI.Application({ width: 800, height: 500 });
        appDiv.appendChild(app.view);

        app.stage.interactive = true;

        var container = new PIXI.Container();
        app.stage.addChild(container);

        var flag = PIXI.Sprite.from(this.head);
        container.addChild(flag);

        flag.y=-130
        flag.x= -60
        flag.width= 775
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

     mobileHeader: function(){
      if (this.x.matches) { // If media query matches mobile size
        
        var appDiv=document.getElementById("mobile-header");
        var app = new PIXI.Application({ width: 375, height: 500 });
        appDiv.appendChild(app.view);

        app.stage.interactive = true;

        var container = new PIXI.Container();
        app.stage.addChild(container);

        var flag = PIXI.Sprite.from(this.head);
        container.addChild(flag);

        flag.y=-130
        flag.x= -60
        flag.width= 775
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
      }else {
        // regular size
       this.header();
      }
     },

     // for circle
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


   
     circle: function(){
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
     },

       linkBar: function(){
       gsap.from('.link-bar',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 5

       });
   },

   toTop: function(){
     window.scrollTo(0, 0);
    },

      aboutHeader: function(){
       gsap.from('.about-header',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 3
       });
   },
     aboutHeaderMobile: function(){
       gsap.from('.about-header-mobile',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 3
       });
   },
   
       aboutDesc: function(){
       gsap.from('.about-desc',
       { 
           duration: 3, 
           y:'100%',
           ease: 'bounce',
           delay: 3
       });
   },


   paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     },

     scrollTest: function(){
           var ctrl = new ScrollMagic.Controller();

        // Create scenes in jQuery each() loop
        $("section").each(function(i) {
        var inner = $(this).find(".inner");
        var outer = $(this).find(".outer");
       
        var two = $(this).find(".two");
        var tl = new TimelineMax();
        
        tl.from(outer, 0.80, { scaleX: 0 });
        tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

        
           new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.90
        })
             .setTween(tl)
                .addIndicators({
                colorTrigger: "transparent",
                colorStart: "transparent",
                colorEnd: "transparent",
                indent: 40
                })
                .addTo(ctrl);
            });
     },
       processReg: function(){
       $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 975) {
         $('.circleArrow').hide();
         $('.circular-text').hide();
     }
     else {
         $('.circleArrow').show();
         $('.circular-text').show();
     }
});
     },

     
       swipe: function(){
         var mySwiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    });
   
     },

  },

  mounted(){
      this.header();
      //this.mobileHeader();
      this.delay();
      this.pageTransition();
      this.circle();
      this.linkBar();
      this.toTop();
      this.aboutHeader();
      this.aboutHeaderMobile();
      this.aboutDesc();
      this.scrollTest();
      this.processReg();
      this.swipe();
      
  }
 

}
     

 

</script>

<style scoped>

 h1{
  color: #08FDD8;
}
 h5,p{
  color: #ffffff;
}


 .white-space{
     background-color: #000;
     height: 40px;
 }

 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #0FA958;
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
    height: 100vh;
    background-color: #000;
}

.about-wrap{
  background: #000;
}

.about-desc{
  position: absolute;
  left: 25%;
  top: 72%;
}
.about-desc p{
  font-size: 18px;
  margin-bottom: 5px;
  color: #08FDD8;
  font-weight: 800;
}


.about-header{
  position: absolute;
  left: 25%;
  top: 20%;
}

.about-header h1{
  font-size: 34px;
  margin-bottom: 5px;
}

.about-container{
  display: flex;
  flex-direction: column;
  max-width: 60%;
  justify-content: space-evenly;
  height: 120vh;
  margin:auto;
  background: #000;
}

.about-item{
  max-width: 400px; 
  text-align: left;
}

.about-item h5{
  font-size: 22px;
  margin-bottom: 15px;
}

.about-item p{
  font-size: 19px;
  width: 400px;
}



.circular-text{
  position: fixed;
  left: 76%;
  top: 30%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  transition: 0.5s ease-in-out;
  -webkit-text-stoke: 1px rgba(255,255,255,0.6);
}

.circleArrow{
  position: fixed;
  left: 76%;
  top: 58%;
  transform: translate(-50%,-50%);
}



li{
  list-style: none;
}


.link-bar{
    background: #111;
    height: 99vh;
    width: 60px;
    position: absolute;
    padding-top: 200px;
}

.link-icons {
    padding-top: 20px;
    height: 50px;
}


a{
    text-decoration: none !important;
    height: 65px;
}

#home-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}
#projects-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}
#about-text{
   color: #3EB489; 
   display: none;
   font-size: 15px;  
}
#contact-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}


#home-img:hover ~ #home-text{
    display: inherit;
}
#projects-img:hover ~ #projects-text{
    display: inherit;
}
#about-img:hover ~ #about-text{
    display: inherit;
}
#contact-img:hover ~ #contact-text{
    display: inherit;
}


 video{
  height: 250px;
  width: 200px;
}

.mobile{
      display: none;
    }


/*  process cube ------------*/

.process{
  height: 50px;
  background: #121212;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -1px;
}
.process h6{
  color: #fff;
  padding-top: 10px;
  font-size: 18px;
}

.swiper-outer{
    height: 100vh;
    background: #121212;
}

  .swiper-container{
    position: absolute;
    width: 90%;
    left: 55%;
    margin-left: -50%;
     
  }


  .swiper-slide{
    background-size: cover;
    box-sizing: border-box;
    padding: 6em 3em;
    color: #fff;
  }
  .swiper-slide h1{
    font-size: 5em;
    line-height: 1em;
  }
  .swiper-slide h1::before{
    content: '';
    position: absolute;
    top: 1em;
    width: 50%;
    height: 40%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  .swiper-slide p{
    font-size: 1.3em;
    line-height: 1.5em;
    margin-top: 7em;
  }
  
 
 .slide1{
   background: url('../assets/about/about-me-research.jpg');
   background-size: cover;
   background-position: center;
   max-width: 100%;
   max-height: 100%;
   height: 575px;
 }
 
  .slide1 p{
      color: #000;
      font-weight: 800;
      text-align: left;
  }
  .slide1 q{
      color: #121212;

  }

  .slide2{
   background: url('../assets/about/about-me-design.jpg');
   background-size: cover;
   height: 575px;
   background-position: center;
   max-width: 100%;
   max-height: 100%;
 }
 .slide2 h1::before{
    border-right: 1px solid #fff;
    right: 0;
  }
  .slide2 h1::after{
    border-left: 1px solid #fff;
    right: 0;
    content: '';
    position:absolute;
    top: 1em;
    width: 20%;
    height: 40%;
    border-top:1px solid #fff; 
    border-bottom:1px solid #fff; 
  }

   .slide2 p{
      text-align: left;
  }

  .slide3{
   background: url('../assets/about/about-me-development.jpg');
   background-size: cover;
   background-position: center;
   height: 575px;
   max-width: 100%;
   max-height: 100%;
 }
 

   .slide3 p{
      color: #000;
      font-weight: 800;
      text-align: left;
  }

  .slide4{
   background: url('../assets/about/about-me-launch.jpg');
   background-size: cover;
   background-position: center;
   height: 575px;
   max-width: 100%;
   max-height: 100%;
 }
 

   .slide4 p{
      text-align: left;
  }

  .swiper-button-next, .swiper-button-prev{
    top: 80%;
    outline: none;
  }
  .swiper-button-next{
    right: 3em;
    color:#333;
  }
  .swiper-button-prev{
    left: 3em;
    color:#333;
  }



/* bigger moniter */
@media(min-width: 1400px) {
   .white-space{
     height: 120px;
 }

.about-wrap{
  height: 91vh;
}

.circular-text{
  top: 50%;
  left: 65%;
}

.circleArrow{
  top: 68%;
  left: 65%;
}

.about-header h1{
  font-size: 38px;
}

.about-container{
  height: 105vh;
}

.about-desc{
  left: 30%;
  top: 60%;
}

.about-header{
  left: 30%;
  top: 20%;
}

.about-item h5{
  font-size: 24px;
}

.about-item p{
  font-size: 20px;
}

.about-item{
  max-width: 450px; 
}

.link-bar{
    height: 80vh;
    padding-top: 250px;
}


.swiper-outer{
    height: 75vh;
}


}

/* ipad */
@media(max-width: 1025px) {
   .circular-text{
  top: 40%;
  left: 76%;
}

.circleArrow{
  top: 52%;
  left: 76%;
}

  .head-container{
    height: 70vh;
    background-color: #000;
}

.about-container{
  height: 90vh;
}

.link-bar{
    height: 80vh;
    padding-top: 300px;
}

.swiper-outer{
    height: 80vh;
}
}


/* mobile */
@media(max-width: 767px) {
      .main-load{
            display: none;
      }

      .mobile{
      display: inherit;
    }

    .about-header-mobile{
        height: 75px;
        background: #000;
        padding-top: 15px;
    }


       h1{
  color: #08FDD8;
  }
   h5,p{
    color: #ffffff;
  }



 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #0FA958;
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
    height: 75vh;
    background-color: #000;
}

 

.about-header-mobile{
  left: 25%;
  top: 10%;
}

.about-header-mobile h1{
  font-size: 40px;
}



.about-container{
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: space-evenly;
  height: 100vh;
  margin:auto;
}

.about-item{
  max-width: 375px; 
  text-align: left;
}

.about-item h5{
  font-size: 22px;
  margin-bottom: 15px;
}

.about-item p{
  font-size: 19px;
  width: 350px;
}

.header-gone{
    display: none;
  }

  .footer{
    height: 80px;
    width: 100%;
    background: #5b78c7;
    margin-top: 0px;
    margin-bottom: -50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer a{
    color: #fff;
    font-size: 17px;
  }
  .footer img{
    height: 35px;
    display: block;
  }

   #about, #contact{
    padding-left: 8px;
  }


  /*  process cube ------------*/


.swiper-outer{
    height: 80vh;
}

  .swiper-container{
    position: absolute;
    width: 100%;
    left: 50%;
    margin-left: -50%;
  }


  .swiper-slide{
    background-size: cover;
    box-sizing: border-box;
    padding: 6em 3em;
    color: #fff;
  }
  .swiper-slide h1{
    font-size: 2.1em;
    line-height: 1em;
  }

  .swiper-slide p{
    font-size: 1.1em;
    line-height: 1.2em;
    margin-top: 4em;
  }
  
  
  .swiper-button-next{
    right: 3em;
  }
  .swiper-button-prev{
    left: 2.7em;
  }


}
    

   @media(min-width: 768px) {
      .mobile{
            display: none;
      }
  
      
}



</style>
