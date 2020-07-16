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
    <div class="main">
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
  
         <!-- particles -->
           <div id="particles-js">
               <canvas class="particles-js-canvas-el" ></canvas>
           </div>
         <!--  ------------------------->
          <div class="skills-item">
           <h5>Tech Skills</h5> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JavaScript</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> HTML & CSS</p>
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Node.js</p> 
           <p id="vue"><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Vue</p>  
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Mongo DB</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JQuery</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Git</p>  
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Axios</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Rest API's</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> JSON</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Linux</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Data structures</p>
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> UI component libs</p> 
           <p><img class="arrow" src="../assets/icons/blue-arrow-icon.png" alt="arrow"> Figma</p>  
         </div>
   </div>
  
    </div>
  </div>
     <!-- footer -->
   <div class="footer" @click="paths">
    <router-link to="/projects"><img src="../assets/mobile-icons/projects-icon.png" id="about"/>Projects</router-link>
    <router-link to="/about"><img src="../assets/mobile-icons/face.png" id="about"/>About</router-link>
    <router-link to="/contact"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</router-link>
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
     x:window.matchMedia("(max-width: 767px)"),
      
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
        size: 70,
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
  },
   linkBar: function(){
       gsap.from('.link-bar',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 4

       }) 
   },
    toTop: function(){
     window.scrollTo(0, 0);
    },
    particles: function(){
        const particlesJSON = {
            "particles": {
        "number": {
        "value": 5,
        "density": {
        "enable": true,
        "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
		"color": "#626EE3",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
     
  };

        particlesJS("particles-js", particlesJSON)
    },
    noParticles: function(){
        if(this.x.matches){
            const noP = document.getElementById('particles-js');
            noP.style.display = "none";
        }
    },
     paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     }
    
 

  },
  

  mounted(){
    // this.skillsBlotter();
    this.pageTransition();
    this.mobileSkillsBlotter();
    this.linkBar();
    this.toTop();
    this.particles();
    this.noParticles();
  }
 

}
     

 

</script>

<style scoped>

 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #626EE3; 
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


#particles-js{
  position: absolute;
  height: 50vh;
  width: 80%;
  z-index: 0;
  left: 120px;
}

.main{
 background:#101010;
}


.skills-flex{
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 95%;
  background:#101010;
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

.footer{
    display: none;
}

/* bigger monitor */
@media(min-width: 1400px) {
   #skills{
   margin-bottom: 20px;
}

.skills-item{
  max-width: 500px; 
}

.skills-item h5{
  font-size: 24px;
}

.skills-item p{
  font-size: 19px;
  width: 215px;
}



.skills-item li{
  font-size: 18px;
}

.link-bar{
    padding-top: 305px;
}

}

/* mobile */
@media (max-width: 767px) {
  .landing {
  height: 950px;
 }
 .link-bar{
     display: none;
 }
 .skills-flex{
  max-width: 97%;
  flex-direction: column;
  margin-bottom: 0px;
}
.skills-item{
  max-width: 98%; 
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
.skills-item li{
    max-width: 100%;
    padding-bottom: 5px;
}
.load-container {
    height: 1150px;
}
.skills-item p{
  font-size: 17px;
}

  .footer{
    height: 80px;
    width: 100%;
    background: #5b78c7;
    margin-top: 0px;
    margin-bottom: -50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer a{
    color: #fff;
    font-size: 17px;
  }
  .footer img{
    height: 35px;
    display: block;
  }
   #about, #contact{
    padding-left: 8px;
  }

}


/* ipad */
@media (min-width: 768px) and (max-width: 1024px) {
   
.link-bar{
    padding-top: 375px;
}
  .skills-flex{
  margin-top: 150px;
}


}






</style>
