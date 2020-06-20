<template>
  <div>
   <div id="class1" @mouseover="update" @mouseleave="back">
        this is class uno
   </div>

   <div id="class2">
     this is class number two
   </div>
 
  </div>

  
</template>

<script>



export default {
  name: 'test-page',
  data(){
    return{
     error: null,
     
    }
  },
     methods: {
      update(){
        const class2 = document.getElementById('class2');
        class2.style.color = "red";
      },
      back(){
        const class2 = document.getElementById('class2');
        class2.style.color = "#333";
      }
  


 
 },
      
  
  mounted(){
        this.test();
  }
}  
     

 

</script>

<style scoped>
#class1{
  height: 50px;
  margin-top: 100px;
  margin-bottom: 150px;
}



</style>
