<template>
  <div>
          <!-- circle spinner -->
    <div class="circular-text">
      <span id="rotated">stone • stone • stone • stone • stone • stone • stone • stone • stone •</span>
    </div>
    <div class="circleArrow">
      <ion-icon name="arrow-down"></ion-icon>
    </div>
   
    
 
  </div>

  
</template>

<script>
import $ from 'jquery';
const CircleType = require('circletype');


export default {
  name: 'test-page',
  data(){
    return{
     error: null,
     
    }
  },
     methods: {
     test: function(){
        const circleType = new CircleType(document.getElementById('rotated'));

            // Set the radius to 150 pixels.
            circleType.radius(80);
 
       console.log('what')
      
     }
  


 
 },
      
  
  mounted(){
        this.test();
  }
}  
     

 

</script>

<style scoped>

.circular-text{
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  color: #333;
  font-size: 24px;
  font-weight: 800;
  transition: 0.5s ease-in-out;
  -webkit-text-stoke: 1px rgba(255,255,255,0.6);
  
}

.circleArrow{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}


</style>
