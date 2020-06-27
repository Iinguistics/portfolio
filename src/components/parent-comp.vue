<template>
  <div class="wrap">
   <Child :child-text="text" />

  </div>

  
</template>

<script>
import Child from './child-comp';


export default {
  name: 'parent-comp',
  components: {
    Child
  },
  data(){
    return{
      text: "Hi from data",
      what:"Does this matter",
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
  background:#222;
}


</style>
