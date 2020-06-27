<template>
<div class="wrap">
   <div class="child">
   <h1>Hello, I am a child component see me: {{childText}}</h1>

    


  </div>

  <div class="test">will this work</div>
</div>
 

  
</template>

<script>



export default {
  name: 'child-comp',
    props:['childText'],
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
.wrap{
  height: 100vh;
  background: #333;

}

.child{
 
  color: #fff;
  height: 300px;
}

.test{
  display: none;
  color: #fff;
}

@media (max-width: 600px) { 
   .test{
     display: inherit;
   }
 }


</style>
