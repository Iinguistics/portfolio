<template>
<div>
 <div class="header-img">
  <img src="../assets/dev-img-mobile.jpg"/>
  <div class="header-details">
    <h5>I build amazing experiences</h5>
   <p>Front End Dev from El Dorado Hills, Ca</p>
  </div>
 </div>
sddfsdf
</div>
 

  
</template>

<script>



export default {
  name: 'homeMobile',
   
  data(){
    return{
     error: null,
     
    }
  },
     methods: {
     

   
      
  

  },
    mounted(){
   
}  

}
     

 

</script>

<style scoped>



@media(max-width: 768px) {

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
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  font-size: 28px;
}
.header-details p{
  color: #fff ;
  font-size: 18px ;
}
   

}



</style>
