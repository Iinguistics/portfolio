<template>
  <div>
    <div class="main-load">
    <!-- rings -->
            <div class="loading-screen" id="loading-screen"></div>
              <div class="loader" @click="pushSkills"  @mouseover="update" @mouseleave="back">
                  <div class="ringOne ring">
                        <img src="../assets/ring.png" alt="spinning ring">
                  </div>
                  
                  <div class="ringTwo ring">
                    <img src="../assets/ring.png" alt="spinning ring">
                  </div>
            </div>
      
            <!-- main -->
            <section>
            <div class="main-wrap">
                  <router-link to=/about class="about">
                        <h5>About Me</h5></router-link>
                  
                  <router-link to=/projects class="projects">
                        <h5>Projects</h5></router-link>
                  
                  <router-link to=/skills class="skills" id="skills">
                        <h5>Skills</h5></router-link>

                        <a href="mailto:jmsgoytia@gmail.com"><h5>Get in touch</h5></a>
                        
                  </div>
                  </section>
      <div class="github"><a href="https://github.com/Iinguistics" target="_blank"> 
        <img src="../assets/icons/github-icon.png" alt="github logo"/></a>
       </div>
      </div>
      <homeMobile class="mobile"/>
  </div>
  
</template>

<script>
import TweenMax from 'gsap';
import Expo from 'gsap/src/EasePack';
import homeMobile from './homeMobile';

export default {
  name: 'home',
   components: {
    homeMobile
  },
  data(){
    return{


    }
  },
  methods: {
    pageLoad: function(){
          TweenMax.to(".loading-screen", 3, {
            delay: 3.5,
            top: "-110%",
            ease: Expo.easeInOut
      });

     
     TweenMax.from(".about", 3, {
            delay: 5.0,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".projects", 3, {
            delay: 5.0,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".skills", 3, {
            delay: 4.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 6,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });
    

  
         let tl = TweenMax.timeline();
         tl.from(".ringOne" ,{duration:0.7, y:40})
         tl.to(".ringOne", {duration:0.7, x:40});
         tl.from(".ringTwo" ,{duration:0.7, y:40})
         tl.to(".ringTwo", {duration:0.7, x:40});
      
    },
    pushSkills(){
      this.$router.push('/skills');
    },
    update(){
        const updateColor = document.getElementById('skills');
        updateColor.style.color = "#64FFDA";
      },
      back(){
        const updateColor = document.getElementById('skills');
        updateColor.style.color = "#fff";
      },
     
  },

  mounted(){
      this.pageLoad();
  }
}
</script>

<style scoped>
  /* 1024  to 1400 */

 .main-load {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      background: url('../assets/hero.jpg') no-repeat 50% 50%;
      background-size: cover;
}



img {
      width: 93%;
}



h1 {
      color: #fff;
      font-weight: bolder !important;
      font-size: 46px !important;
      margin-bottom: 0px;
      text-transform: uppercase !important;
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
      top: 48%;
      left: 56%;
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
  height: 95vh;
  align-items: center;
  cursor: url("../assets/red-cursor.png"), auto !important;
  margin-top: 0px;
}

.item{
   height: 100px;
   width: 215px;
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


.github img{
 height: 50px;
 width: 50px;
 margin-top: -50px;
}


/* bigger monitor */
@media(min-width: 1400px) {
      .github img{
    margin-top: -25px;
  } 

  .ring {
      left: 57%;
}
}




/* ipad */
@media (min-width: 768px) and (max-width: 1024px) {
   

}




/* mobile */
@media (max-width: 767px) {
       .main-load{
            display:none;
      }

      .mobile{
         display: inherit;
         height: inherit;
      }

}


@media (min-width: 767px){
       .mobile{
         display: none;
      }
}



</style>
