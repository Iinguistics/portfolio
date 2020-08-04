<template>
  <div>
    <li class="resources-item">
      <a id="brad" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank"> <img src="../assets/list/youtube.svg"/> Traversy Media (covers frontend & backend / one of my favorite channel's)</a>
       <img id="brad-img" src="../assets/dev-img-mobile.jpg" />
    </li>

     <li class="resources-item">
      <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" @mouseover="test"  @mouseleave="testAway"> <img src="../assets/list/youtube.svg"/> Traversy Media (covers frontend & backend / one of my favorite channel's)</a>
       <img id="test-img" src="../assets/dev-img-mobile.jpg" />
    </li>

     <li class="resources-item">
      <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" @mouseover="test"  @mouseleave="testAway"> <img src="../assets/list/youtube.svg"/> Traversy Media (covers frontend & backend / one of my favorite channel's)</a>
       <img id="test-img" src="../assets/dev-img-mobile.jpg" />
    </li>
      
      
  
    
  </div>
</template>

<script> 
// import TweenMax from 'gsap';
import Expo from 'gsap/src/EasePack';
//import barba from '@barba/core';
import gsap from 'gsap';
import $ from 'jquery';


export default {
  name: 'test',
  data(){
    return{
  
      x:window.matchMedia("(max-width: 767px)"),
      
    }
  },
  methods: {

     

    

  



   
 

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

    test: function(){
        const testImg = document.querySelector('.test-img');
       testImg.style.display = "inherit";
      // testImg.style.opacity = "1";
      testImg.style.margin = "auto"
       gsap.from('.test-img',
       { 
           duration: 1.5, 
           y:'-225%',
           ease: Power2.easeInOut,
           delay: 0.3

       });
   },

    testAway: function(){
       const testImg = document.querySelector('.test-img');
        testImg.style.display = "none";
        //testImg.style.opacity = "0";
   },
  

        
     
   

     
  

  },

  mounted(){
     
      
  }
 

}
     

 

</script>

<style scoped>
li{
  list-style: none;
}




.resources-item{
  margin-top: 250px;
}

#brad-img{
  width: 150px;
  height: 150px;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.8s;
}

#brad:hover ~ #brad-img{
   opacity: 1;
}






</style>
