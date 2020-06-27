<template>
<div>
      <!-- barba -->
    <div data-barba="wrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
     </div> 
      <!-- barba end   -->  
  <div class="landing">
    <div class="link-bar">
        <li><router-link to="/"><img class="link-icons" id="home-img" src="../assets/icons/home-icon.png" alt="home icon"><p id="home-text">Home</p></router-link></li> 
        <li><router-link to="/about"><img class="link-icons" id="about-img" src="../assets/icons/about-icon.png" alt="about icon"><p id="about-text">About</p></router-link></li> 
        <li><router-link to="/projects"><img class="link-icons" id="projects-img" src="../assets/icons/eye-icon.png" alt="projects icon"><p id="projects-text">Projects</p></router-link></li>
        <li><router-link to="/contact"><img class="link-icons" id="contact-img" src="../assets/icons/email-icon.png" alt="email icon"><p id="contact-text">Contact</p></router-link></li> 
    </div>
   <div id="skills"></div>
   
   <div class="skills-flex">
         <div class="skills-item">
             <h5>Soft Skills</h5>
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Efficient and effective communication skills </li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Self-organized & able to work independtly</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Open and adoptable to changes & unexpected obstacles</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Team player</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Collaborative mindset and open-minded</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Passion and hunger for excellence</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Motivated to take on new challenges</li> 
              <li><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Open to receive and deliver clear and useful criticism</li> 
                
         </div>

          <div class="skills-item">
           <h5>Tech Skills</h5> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JavaScript</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> HTML & CSS</p>
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Node.js</p> 
           <p id="vue"><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Vue</p>  
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Mongo DB</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JQuery</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Git version control</p>  
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Axios</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Rest API</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JSON</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Linux</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Data structures</p> 
         </div>
   </div>
  

  </div>
</div>
   
</template>

<script> 
import Expo from 'gsap/src/EasePack';
import barba from '@barba/core';
import gsap from 'gsap';


export default {
  name: 'skills',
  data(){
    return{
     x:window.matchMedia("(max-width: 768px)"),
     
      
    }
  },
  methods: {
         skillsBlotter: function(){
       var skillsContainer = document.getElementById("skills");

    var text = new Blotter.Text("SKILLS", {
        family: "serif",
        size: 120,
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
    scope.appendTo(skillsContainer);
     },

        pageTransition: function() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
},

  mobileSkillsBlotter: function(){
      if (this.x.matches) { // If media query matches mobile size for blotter
    var skillsContainer = document.getElementById("skills");

    var text = new Blotter.Text("SKILLS", {
        family: "serif",
        size: 85,
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
    scope.appendTo(skillsContainer);
          
      } else {
        // regular size
       this.skillsBlotter();

      }
  }
    
 

  },
  

  mounted(){
    // this.skillsBlotter();
    this.pageTransition();
    this.mobileSkillsBlotter();
  }
 

}
     

 

</script>

<style scoped>

 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #A4A9A1; 
    width: 0%;
    height: 100%;
}

.load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
    pointer-events: none;
}

.landing{
 background:#101010;
 height: 100vh;
}


#skills{
 width: 100%;
 margin-bottom: -35px;
}



.skills-flex{
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 95%;
}

.skills-item{
  max-width: 350px; 
  text-align: left;
  color: #fff;
  margin: auto;
}

.skills-item h5{
  color: #3EB489;   
  font-size: 20px;
  margin-bottom: 15px;
}

li{
  list-style: none;
}

.skills-item li{
    padding-top: 1px;
}

.skills-item p{
  font-size: 15px;
  display: inline-block;
  width: 175px;
  text-align: left;
  height: 25px;
}

.arrow{
  height: 15px;
  width: 15px;
}

.link-bar{
    background: #121212;
    height: 100vh;
    width: 60px;
    position: absolute;
    padding-top: 175px;
}

.link-icons {
    padding-top: 20px;
    height: 50px;
}


a{
    text-decoration: none !important;
    height: 65px;
}

#home-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}
#projects-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}
#about-text{
   color: #3EB489; 
   display: none;
   font-size: 15px;  
}
#contact-text{
   color: #3EB489; 
   display: none;  
   font-size: 15px;
}


#home-img:hover ~ #home-text{
    display: inherit;
}
#projects-img:hover ~ #projects-text{
    display: inherit;
}
#about-img:hover ~ #about-text{
    display: inherit;
}
#contact-img:hover ~ #contact-text{
    display: inherit;
}


@media(min-width: 1300px) {
   #skills{
   margin-bottom: 20px;
}

.skills-item{
  max-width: 475px; 
}

.link-bar{
    padding-top: 305px;
}

}


@media screen and (max-width: 768px) {

  .landing {
  height: 950px;
 }

 .link-bar{
     display: none;
 }

 .skills-flex{
  max-width: 99%;
  flex-direction: column;
}

.skills-item{
  max-width: 97%; 
  text-align: left;
  color: #fff;
  margin: auto;
  font-size: 18px;
  padding-bottom: 15px;
}

.skills-item h5{
  color: #3EB489;   
  font-size: 25px;
  margin-bottom: 15px;
}


.load-container {
    height: 1150px;
}

.skills-item p{
  font-size: 17px;
}




}



</style>
