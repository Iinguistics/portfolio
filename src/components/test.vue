<template>
  <div>
   
       <!-- barba -->
    <div data-barba="wrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
     </div> 
      <!-- barba end   -->  
        <div class="main-load">
      <div class="white-space"></div>
     <div class="head-container">
       <div id="header"> </div>
        <div class="about-header">
        <h1>About Me</h1>
        </div>
     </div>

     <!-- link side bar -->
      <div class="link-bar">
        <li><router-link to="/"><img class="link-icons" id="home-img" src="../assets/icons/home-icon.png" alt="home icon"><p id="home-text">Home</p></router-link></li> 
        <li><router-link to="/skills"><img class="link-icons" id="about-img" src="../assets/icons/skills-icon.png" alt="skills icon"><p id="about-text">Skills</p></router-link></li> 
        <li><router-link to="/projects"><img class="link-icons" id="projects-img" src="../assets/icons/eye-icon.png" alt="projects icon"><p id="projects-text">Projects</p></router-link></li>
        <li><router-link to="/contact"><img class="link-icons" id="contact-img" src="../assets/icons/email-icon.png" alt="email icon"><p id="contact-text">Contact</p></router-link></li> 
    </div>
       <div class="about-wrap">
        
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
    </div>
   <div class="mobile">
       <div class="white-space"></div>
     <div class="head-container">
       <div id="mobile-header"> </div>
        <div class="about-header-mobile">
             <h1>About Me</h1>
            </div>
     </div>
           
       <div class="about-wrap">
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
       </div>
       <!-- footer -->
   <div class="footer">
    <router-link to="/about"><img src="../assets/mobile-icons/projects-icon.png" id="about"/>Projects</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png"/>Skills</router-link>
    <router-link to="/contact"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</router-link>
   </div>
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
import aboutMobile from './aboutMobile';
const CircleType = require('circletype');


export default {
  name: 'test',
  data(){
    return{
      head: require('../assets/computer-1.jpg'),
      ripple: require('../assets/ripple.png'),
      ripple2: require('../assets/ripple-2.jpg'),
      x:window.matchMedia("(max-width: 768px)"),
      
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
        var what = document.getElementById("header");
        what.style.display = "none";
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

  },

  mounted(){
      this.mobileHeader();
      this.delay();
      this.pageTransition();
      this.circle();
      this.linkBar();
      this.toTop();
      this.aboutHeader();
      this.aboutHeaderMobile();
      
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


.about-header{
  position: absolute;
  left: 25%;
  top: 70%;
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
    height: 120vh;
    width: 60px;
    position: absolute;
    padding-top: 280px;
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




@media(min-width: 1400px) {
   .white-space{
     height: 120px;
 }



#header h2{
    left: 50%;
    top: 40%;
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

.about-header{
  left: 30%;
  top: 60%;
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
    height: 90vh;
    padding-top: 250px;
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
}


/* mobile */
@media(max-width: 768px) {
      .main-load{
            display: none;
      }

      .mobile{
      display: inherit;
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


}
    

   @media(min-width: 768px) {
      .mobile{
            display: none;
      }

     
      
}



</style>
