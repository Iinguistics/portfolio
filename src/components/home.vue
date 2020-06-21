<template>
  <div class= "main-load">
    <!-- rings -->
            <div class="loading-screen" id="loading-screen"></div>
              <div class="loader" @click="contact"  @mouseover="update" @mouseleave="back">
                  <div class="ringOne ring">
                        <img src="../assets/ring.png" alt="spinning ring">
                  </div>
                  
                  <div class="ringTwo ring">
                    <img src="../assets/ring.png" alt="spinning ring">
                  </div>
            </div>
      
   <!-- main / blend section -->
   <section>
     <div class="main-wrap">
          <router-link to=/about class="about">
                <h5>About Me</h5></router-link>
         
         <router-link to=/projects class="projects">
            <h5>Projects</h5></router-link>
      
          <router-link to=/skills class="skills">
            <h5>Skills</h5></router-link>

             <router-link to=/contact class="contact" id="contact-me">
            <h5>Contact Me</h5></router-link>
            
        </div>
   </section>
      

    

  </div>
</template>

<script>
import TweenMax from 'gsap';
import anime from 'animejs';
import Expo from 'gsap/src/EasePack';

export default {
  name: 'home',
  data(){
    return{


    }
  },
  methods: {
    pageLoad: function(){
          TweenMax.to(".loading-screen", 4, {
            delay: 7.0,
            top: "-110%",
            ease: Expo.easeInOut
      });

     
     TweenMax.from(".about", 3, {
            delay: 8.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".projects", 3, {
            delay: 9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".skills", 3, {
            delay: 6.6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 9.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });
    

  
         let tl = TweenMax.timeline();
         tl.from(".ringOne" ,{duration:2, y:40})
         tl.to(".ringOne", {duration:2, x:40});
         tl.from(".ringTwo" ,{duration:2, y:40})
         tl.to(".ringTwo", {duration:2, x:40});

        

          // const textWrapper = document.querySelector('.ml7 .letters'); 
          //textWrapper.innerHTML = this.textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
         // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

         anime.timeline({loop: false})
        .add({ 
         targets: '.ml7 .letter',
         translateY: ["1.1em", 0],
         translateX: ["0.55em", 0],
         translateZ: 0,
         rotateZ: [180, 0],
         duration: 750,
         easing: "easeOutExpo",
         delay: function(el, i) {
         return 9000 + 50 * i;
        }
     });
    },
    contact(){
      this.$router.push('/contact');
    },
    update(){
        const updateColor = document.getElementById('contact-me');
        updateColor.style.color = "#64FFDA";
      },
      back(){
        const updateColor = document.getElementById('contact-me');
        updateColor.style.color = "#fff";
      }
  },

  mounted(){
      this.pageLoad();
  }
}
</script>

<style scoped>

 .main-load {
      margin: 0%;
      padding: 0%;
      width: 100%;
      height: 100vh;
      background: #121212;
      background: url('../assets/hero.jpg') no-repeat 50% 50%;
      background-size: cover;
}



img {
      width: 100%;
}



.ml7 {
      position: relative;
      font-weight: 900;
      font-size: 3.7em;
}

.ml7 .text-wrapper {
      position: relative;
      display: inline-block;
      padding-top: 0.2em;
      padding-right: 0.05em;
      padding-bottom: 0.1em;
      overflow: hidden;
}

.ml7 .letter {
      transform-origin: 0 100%;
      display: inline-block;
      line-height: 1em;
}

h1 {
      color: #fff;
      font-weight: bolder !important;
      font-size: 46px !important;
      margin-bottom: 0px;
      text-transform: uppercase !important;
}



p {
      color: rgb(95, 95, 95);
      font-weight: 200;
      font-family: "Roboto";
      line-height: 28px;
}




#one {
      background: none;
      border: .3pt solid rgba(255, 255, 255, 0.3);
}

#two {
      background: linear-gradient(135deg, rgb(106, 219, 157) 0%, rgb(23, 167, 88) 100%);;
}




.loading-screen {
      position: absolute;
      width: 100%;
      height: 100vh;
      background: #0a0a0a;
      z-index: 2;
}

.ring {
      margin: 0%;
      padding: 0%;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 2;
      width: 35%;
      opacity: 0.7;
}

.ringOne img {
      animation: rotateFirstRing 2s linear infinite;
}

.ringTwo img {
      animation: rotateFirstRing 8s linear infinite;
}

@keyframes rotateFirstRing {
      from {
            transform: rotate(0deg);
      }
      to {
            transform: rotate(360deg);
      }
}



/* main wrap */

.main-wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  max-width: 98%;
  height: 100vh;
  align-items: center;
}

.item{
   height: 100px;
   width: 225px;
}



 a{
  color: #fff; 
  text-decoration: none !important;
}


a:hover{
   color: #64FFDA;
}

.loader:hover{
  cursor: pointer;
}




@media(max-width: 900px) {

      .loading-screen {
            display: none;
      }
      .ring img {
            display: none;
      }

      .header p, button, .media, h1 {
            display: none;
      }

}

</style>
