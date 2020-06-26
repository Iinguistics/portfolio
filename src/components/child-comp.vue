<template>
  <div class="child">
   <h1>Hello, I am a child component see me: {{childText}} & this is : {{doesItMatter}}</h1>

  </div>

  
</template>

<script>



export default {
  name: 'child-comp',
    props:['childText', 'doesItMatter'],
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
.child{
  color: #fff;
}


</style>
