<template>
<div class="mobile-wrap">
      <!-- previewMobile comp -->
        <previewMobile class="previewMobile"/>
      <!--      ----------------->
        <div class="github-header">
          <h1>Take me to the source</h1>
          <a href="https://github.com/Iinguistics" target="_blank"> <img src="../assets/icons/github-color-icon.png" alt="github logo"/></a>
        </div>
        <!-- grid image / listed projects -->
   <div class="project-container">
     
      <div class="bg2">
      </div>
      <div class="bg2">
      </div>
        <a class="bg2" href="https://github.com/Iinguistics/Hair" target="_blank">
        <h2>Hair Salon</h2>
      </a>
       <a class="bg2" href="https://github.com/Iinguistics/ctdi" target="_blank">
        <h2>CTDI</h2>
      </a>
      <div class="bg2">
      </div>
       <a class="bg2" href="https://github.com/Iinguistics/Stat-Tracker" target="_blank">
        <h2>Stat Tracker</h2>
      </a>
       <a class="bg2" href="https://github.com/Iinguistics/portfolio" target="_blank">
        <h2>Portfolio</h2>
      </a>
       <div class="bg2">
      </div>
       <a class="bg2" href="https://github.com/Iinguistics/weatherApp" target="_blank">
        <h2>Weather App</h2>
      </a>
      <a class="bg2" href="https://github.com/algorithm-archivists/algorithm-archive" target="_blank">
        <h2>Algorithm Archive</h2>
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

   <!-- footer -->
  <div class="footer" @click="paths">
    <router-link to="/about"><img src="../assets/mobile-icons/face.png" id="about"/>About</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png"/>Skills</router-link>
    <a href="mailto:jmsgoytia@gmail.com"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</a>
  </div>
</div>
 
</template>

<script>
import previewMobile from './previewMobile.vue';

export default {
  name: 'projectsMobile',
     components: {
    previewMobile
  },
  data(){
   
    return{
     
    }
  },
  methods: {
      paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     },
      toTop: function(){
     window.scrollTo(0, 0);
    },


  },
  mounted(){
   this.toTop();
  }

}
</script>


<style scoped>

 @media(max-width: 767px) {

.mobile-wrap{
    width: 100%;
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
  grid-template-columns: 45% 45% 6%;
  grid-template-rows: auto;
  grid-gap: 6px;
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


  h2 {
  font-family: "Coco Gothic Bold";
  font-size: 34px;
  font-weight: 300;
  margin: 10px;
}
h1{
  font-family: "Coco Gothic Bold";
  font-size: 38px;
  font-weight: 300;
  margin: 10px;
}

.github-header h1{
  padding-top: 15px;
}


.project-container > div:nth-of-type(1) {
  grid-column: 1 / 3;
}



.bg2 {
  background: url('../assets/projects/nature-road.jpg');
  color: #fff;
}


.footer{
    height: 85px;
    width: 100%;
    background: #5b78c7;
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

  #about, #contact{
    padding-left: 8px;
  }




 }





</style>
