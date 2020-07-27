<template>
<div class="main-wrap">
  <!-- header -->
 <div class="header-img">
  <img src="../assets/dev-img-mobile.jpg"/>
  <div class="header-details">
    <h5>I build amazing experiences</h5>
   <p>Front End Dev from El Dorado Hills, Ca</p>
  </div>
 </div>

 <!-- projects display -->
    <div class="work">
    <h6>My Work</h6>
    <router-link to="/projects">-View all my projects</router-link>
   </div>
   
     <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide1">
        <a href="https://hair-salon-site.herokuapp.com/" target="_blank"><h1>Hair</h1></a>
        <p>Equipped with appointment booking & employee portal (CRUD App)</p>
      </div>
      <div class="swiper-slide slide2">
        <a href="https://ctdi-jg.netlify.app/#/" target="_blank"><h1>CTDI</h1></a>
        <p>Business/Info site, focused on UI libs & aesthetics</p>
      </div>
      <div class="swiper-slide slide3">
        <a href="https://stat-tracking.herokuapp.com/" target="_blank"><h1>Stat Tracker</h1></a>
        <p>hits multiple server side API end points & returns data to the client</p>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>

    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>

<!-- footer -->
  <div class="footer" @click="paths">
    <router-link to="/about"><img src="../assets/mobile-icons/face.png" id="about"/>About</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png" id="skills"/>Skills</router-link>
    <a href="mailto:jmsgoytia@gmail.com"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</a>
  </div>
 
</div> 
 

  
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';


export default {
  name: 'homeMobile',
   
  data(){
    return{
     error: null,
     swiperr: ''
     
    }
  },
     methods: {
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
      paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     }

   
      

  },
    mounted(){
     this.swipe();
}  

}
     

 

</script>

<style scoped>



/* mobile */
@media (max-width: 768px) {
 .main-wrap{
  background: #212121;
 }

 .header-img img{
  width: 100%;
  height: 350px;
  border-radius: 5px;

}

.header-details{
  position: absolute;
  top: 30%;
  left: 5%;
}
.header-details-gone{
  display:none;
}

.header-details h5{
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 28px;
}
.header-details p{
  color: #fff ;
  font-size: 1.2em;
  font-weight: 600;
}

.work{
  height: 50px;
  background: #232323;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -1px;
}
.work h6{
  color: #fff;
  padding-top: 10px;
  font-size: 18px;
}
.work a{
  font-size: 17px;
}

  /* swiper */
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
   background: url('../assets/homeMobile/hair-5.jpg');
   background-size: cover;
   height: 535px;
 }
 .slide1 h1::before{
    border-left: 1px solid #fff;
    right: 0;
  }

  .slide2{
   background: url('../assets/homeMobile/cell-phone.jpg');
   background-size: cover;
   height: 535px;
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

  .slide3{
   background: url('../assets/homeMobile/overwatch-logo.jpg');
   background-size: cover;
   height: 535px;
 }
 .slide3 h1::before{
    border-right: 1px solid #fff;
    left: 0;
  }

  .swiper-button-next, .swiper-button-prev{
    top: 80%;
    outline: none;
  }
  .swiper-button-next{
    right: 2em;
  }
  .swiper-button-prev{
    left: 2em;
  }

  .cube-gone{
    display: none;
  }

  .footer{
    height: 90px;
    width: 100%;
    background: #5b78c7;
    margin-top: 625px;
    margin-bottom: 0px;
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

  #skills{
    padding-left: 14px;
  }
  #about{
    padding-left: 10px;
  }
  #contact{
    padding-left: 15px;
  }
}

@media(min-width: 768px) {
   .main-wrap{
    display: none;
   }
}




</style>
