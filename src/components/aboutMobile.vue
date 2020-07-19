<template>
<div>
  
      <div class="mobile">
      <div class="white-space"></div>
     <div class="head-container">
       <div id="mobile-header"> </div>
        <div class="about-headerr">
             <h1>About Me</h1>
            </div>
     </div>
           
       <div class="about-wrap">
        <div class="about-containerr">
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
import Expo from 'gsap/src/EasePack';
import barba from '@barba/core';
import gsap from 'gsap';
import $ from 'jquery';


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
        
        var appDiv=document.getElementById("mobile-header")
        var app = new PIXI.Application({ width: 400, height: 500 });
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
         aboutHeader: function(){
       gsap.from('.about-header',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 3

       });
   },
  
   toTop: function(){
     window.scrollTo(0, 0);
    },
    paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     }
  },

  mounted(){
       // this.header();
      //this.delay();
      //this.pageTransition();
      //this.trans();
      this.toTop();
      this.aboutHeader();
      
  }
 

}
     

 

</script>

<style scoped>
 @media(max-width: 768px) {

  h1{
  color: #08FDD8;
}
 h5,p{
  color: #ffffff;
}

 .white-space{
     background-color: #181818;
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
    height: 90vh;
    background-color: #181818;
}

.about-wrap{
  background: #181818;
}



 



.about-header{
  position: absolute;
  left: 25%;
  top: 70%;
}

.about-header h1{
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


 }


@media(min-width: 768px) {
    .mobile{
      display: none;
    }
}


</style>
