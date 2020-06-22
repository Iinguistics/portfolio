<template>
   <div class="wrap">
   <div id="skills"></div>
   
   <div class="skills-flex">
      <div class="skills-item">
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
         <div class="skills-item">
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
  

  </div>
</template>

<script> 



export default {
  name: 'skills',
  data(){
    return{
    
      
    }
  },
  methods: {
         skillsBlotter: function(){
       var cssContainer = document.getElementById("skills");

    var text = new Blotter.Text("SKILLS", {
        family: "serif",
        size: 130,
        fill: "#fff",
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 20,
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
    this.skillsBlotter();
  }
 

}
     

 

</script>

<style scoped>

.wrap{
 background:#101010;
 height: 100vh;
}


#skills{
 width: 100%;
 margin: auto;
 
}

.skills-flex{
  display: flex;
  flex-direction: row;
  margin: auto;
  height: 100px;
  max-width: 95%;
}

.skills-item{
  max-width: 450px; 
  text-align: left;
  color: #fff;
  margin: auto;
}

.skills-item h5{
  font-size: 20px;
}

.skills-item p{
  font-size: 15px;
  display: inline-block;
  width: 175px;
}

.arrow{
  height: 14px;
  width: 14px;
}







</style>
