<template>
  <div class="wrap">
   <div id="css"></div>
    <div id="js"></div>

   <div class="about-item">
           <h5>Here are a few technologies I've been working with recently:</h5> 
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> JavaScript</p> 
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> HTML & CSS</p>
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> Node.js</p> 
           <p id="vue"><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> Vue</p>  
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> Mongo DB</p> 
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> JQuery</p> 
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> Git version control</p>  
           <p><img class="arrow" src="../assets/arrow-icon.svg" alt="arrow"> Axios</p> 
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
     cssBlotter: function(){
       var cssContainer = document.getElementById("css");

    var text = new Blotter.Text("SKILLS", {
        family: "serif",
        size: 150,
        fill: "#fff",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 80,
        paddingBottom: 80
    });

    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.01;
    material.uniforms.uPointRadius.value = 0.3;
    material.uniforms.uSpeed.value = 3;

    var blotter = new Blotter(material, {
        texts: text
    });

    var scope = blotter.forText(text);
    scope.appendTo(cssContainer);
     },

   
      
  

  },
    mounted(){
       this.cssBlotter();
}  

}
     

 

</script>

<style scoped>
.wrap{
 background: #101010;
 height: 100vh;
}


#css{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 150px;
}

#js{
   margin: 0;
    padding: 0;
    width: 100%;
    height: 150px;
}


.about-item{
  max-width: 350px; 
  text-align: left;
}

.about-item h5{
  font-size: 20px;
}

.about-item p{
  font-size: 16px;
  display: inline-block;
  padding: 10px;
  width: 175px;
}

.arrow{
  height: 14px;
  width: 14px;
}

#vue{
  width: 150px;
  padding-left: 12px;
}

</style>
