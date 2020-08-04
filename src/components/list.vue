<template>
  <div>
     <div class="header">
         <h1>A few Books & Resources</h1>
     </div>
    <!-- book components -->
      <Current />
      <Flow />
      <Innumeracy />
      <Think />
 
     <!-- Resources -->
     <section>
       <div class="divider-title book" id="resources">
          <div class="divider"></div>
           <h3 id="services-title">Resources</h3>
         <div class="divider"></div>   
       </div>
     <div class="resources">
         <p>In this section I want to share with you some resources I use to gain Knowledge about software/web development.</p>
         <p>Since I am very passionate about tech, I decided to go the self taught route, rather enroll in a standard college & learn out dated technology, I wanted to learn the most up to date tech by the people who specialize in the tech/subject I was/am absorbing. Also considering that we live in the age of information & youtube ad revenue it turned out to be a great idea.</p>
         <p>Sites:</p>
       <div class="resources-site-flex">
             <li class="resources-item">
                 <a href="https://www.codecademy.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Codecademy</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.edx.org/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Edx</a>
             </li>
             <li class="resources-item">
                 <a href="https://cs50.harvard.edu/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> cs50</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.coursera.org/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Coursera</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.freecodecamp.org/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> FreeCodeCamp</a>
             </li>
              <li class="resources-item">
                 <a href="https://teamtreehouse.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Team Treehouse</a>
             </li>
               <li class="resources-item">
                 <a href="https://www.taniarascia.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Tania Rascia</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.awwwards.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Awwwards</a>
             </li>
              <li class="resources-item">
                 <a href="https://css-tricks.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> CSS-Tricks</a>
             </li>
              <li class="resources-item">
                 <a href="https://frontendmasters.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Frontend master</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.git-tower.com/blog/git-cheat-sheet" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Git cheat sheet</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.vuemastery.com/courses/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Vue mastery</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Linux training academy</a>
             </li>
             <li class="resources-item">
                 <a href="https://hackernoon.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Hackernoon</a>
             </li>
             <li class="resources-item">
                 <a href="https://scotch.io/tutorials/understanding-memoization-in-javascript" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Scotch</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.algoexpert.io/t" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> AlgoExpert</a>
             </li>
              <li class="resources-item">
                 <a href="https://medium.com/topic/technology" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Medium</a>
             </li>
             <li class="resources-item">
                 <a href="https://stackoverflow.com/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> Stack overflow</a>
             </li>
             <li class="resources-item">
                 <a href="https://developer.mozilla.org/en-US/" target="_blank"><img class="globe-svg" src="../assets/list/globe.svg"/> MDN!!!</a>
             </li>
       </div>
       <p> Youtube Channel's:</p>
       <div class="resources-flex">
             <li class="resources-item">
                 <a id="brad-youtube" href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank"> <img src="../assets/list/youtube.svg"/> Traversy Media (covers frontend & backend / one of my favorite channel's)</a>
                   <img id="brad-img" src="../assets/list/youtube-channels/traversy-media.jpg" />
             </li>
              <li class="resources-item">
                 <a id="chris-youtube" href="https://www.youtube.com/c/noobtoprofessional/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Chris Hawkes (Industry vet with good insights/info)</a>
                  <img id="chris-img" src="../assets/list/youtube-channels/chris-img.jpg" />
             </li>
              <li class="resources-item">
                 <a id="engineer-youtube" href="https://www.youtube.com/c/EngineerMan/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Engineer Man (Good for database & linux knowledge)</a>
                 <img id="engineer-img" src="../assets/list/youtube-channels/engineer-img.jpg" />
             </li>
             <li class="resources-item">
                 <a  id="clement-youtube" href="https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Clement Mihailescu (Algorithm expert & all around great software engineering content)</a>
                   <img id="clement-img" src="https://yt3.ggpht.com/a/AATXAJzk3Q0K_jLcqVVXOFqMz6iNw9YAt-b98G842PRrA_w=s100-c-k-c0xffffffff-no-rj-mo" />
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Ben Awad (Good info on an array of various technologies)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/DesignCourse/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Design Course(Great UI/UX design content)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/ProgramWithErik/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Program with Erik(One of the best vue.js channel's)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/WebDevSimplified/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Web Dev Simplified(Good front end content)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/TheNetNinja/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Net Ninja(youtube icon, I learned quite a bit from this channel)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/Socratica/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Socratica(Study tips to SQL queries)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/derekbanas/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Derek Banas(Tut's on alot of different tech's, frontend to backend)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/CodingTutorials360/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Dylan Israel(Industry vet with alot of good insights)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/CSDojo/videos" target="_blank"><img src="../assets/list/youtube.svg"/> CS Dojo(good data structure & algo channel)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/Academind/videoss" target="_blank"><img src="../assets/list/youtube.svg"/> Academind(full stack web dev, with good front end library tuts)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/JaymeEdwardsMedia/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Healthy Software Developer(Agile development info)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/whatsdev/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Whatsdev(pathway's / guide's)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/channel/UCyUBW72KU30dfAYWLVNZO8Q" target="_blank"><img src="../assets/list/youtube.svg"/> Stefan Mischook(industry / freelance vet)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/Codevolution/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Codeevolution(A lot of good tutorial's)</a>
             </li>
              
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/TechWithTim/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Tech with Tim(vast array of tech topics)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/DevEd/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Dev Ed(Really good tut's, he is in my top 10)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/RedStapler_channel/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Red Stapler(Good UI / css vids)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/CodingAddict/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Coding Addict(Alot of good JS & frontend vids)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/FKnight/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Forrest Knight(Industry vet with good insights)</a>
             </li>
              <li class="resources-item">
                 <a href="https://www.youtube.com/c/CodingGardenwithCJ/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Coding Garden(Full stack & api vid's)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/AndySterkowitz/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Andy Sterkowitz(Career advice / technique's)</a>
             </li>
             <li class="resources-item">
                 <a href="https://www.youtube.com/c/tutoriaLinux/videos" target="_blank"><img src="../assets/list/youtube.svg"/> Tutorial linux(good dev ops content)</a>
             </li>
       </div>
     </div>
     </section>
   
    
    

   <!-- link side bar -->
      <div class="link-bar">
        <li><router-link to="/"><img class="link-icons" id="home-img" src="../assets/icons/home-icon.png" alt="home icon"><p id="home-text">Home</p></router-link></li> 
        <li><router-link to="/skills"><img class="link-icons" id="about-img" src="../assets/icons/skills-icon.png" alt="skills icon"><p id="about-text">Skills</p></router-link></li> 
        <li><router-link to="/projects"><img class="link-icons" id="projects-img" src="../assets/icons/eye-icon.png" alt="projects icon"><p id="projects-text">Projects</p></router-link></li>
        <li><a href="mailto:jmsgoytia@gmail.com"><img class="link-icons" id="contact-img" src="../assets/icons/email-icon.png" alt="email icon"><p id="contact-text">Contact</p></a></li> 
    </div>

     <!-- footer -->
  <div class="footer" @click="paths">
    <router-link to="/about"><img src="../assets/mobile-icons/face.png" id="about"/>About</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png" id="skills"/>Skills</router-link>
    <a href="mailto:jmsgoytia@gmail.com"><img src="../assets/mobile-icons/contact.png" id="contact"/>Contact</a>
  </div>
  </div>
</template>

<script> 
// import TweenMax from 'gsap';
import Expo from 'gsap/src/EasePack';
import gsap from 'gsap';
import $ from 'jquery';
const THREE = require('three');
import Current from './List/current';
import Flow from './List/flow';
import Innumeracy from './List/innumeracy';
import Think from './List/think';

export default {
  name: 'list',
  components: {
    Current,
    Flow,
    Innumeracy,
    Think
  },
  data(){
    return{
      x:window.matchMedia("(max-width: 767px)"),
      
    }
  },
  methods: {

       linkBar: function(){
       gsap.from('.link-bar',
       { 
           duration: 3, 
           y:'-100%',
           ease: 'bounce',
           delay: 5

       });
   },

   toTop: function(){
     window.scrollTo(0, 0);
    },

     paths: function(){
         // components with position absolute toggle class will not run unless page is reloaded, clicking the link goes straight to the route no loading
        // can look unsmooth revisit this solution, perhaps only target the components that have the absolute "issue"
        setTimeout(function(){
         window.location.reload();
      }, 100)
     },

   

  },

  mounted(){
      this.toTop();
      this.linkBar();
  }
 

}
     

 

</script>

<style scoped>
.header{
    height: 40vh;
}

#services-title {
  padding-right: 20px;
  padding-left: 20px;
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
}
.divider-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
}

.divider {
    flex: 1;
    height: 3px;
    background: #444;
}

h6{
    font-size: 18px;
}


  #flow-img{
  height: 300px;
  width: 245px;
  margin: auto;
}
  #how-img{
  height: 300px;
  width: 245px;
  margin: auto;
}
  #inn-img{
  height: 300px;
  width: 245px;
  margin: auto;
}
  #think-img{
  height: 300px;
  width: 245px;
  margin: auto;
}

.book{
    max-width: 70%;
    margin: auto;
    margin-bottom: 150px;
}
.book p{
    text-align: left;
}

.book a{
    display: inline-block;
}

#resources{
   margin-bottom: 85px;
}

.resources{
    
    max-width: 75%;
    margin: auto;
}

.resources p{
    text-align: left;
}

.resources-site-flex{
     margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 100%;
    margin-bottom: 50px;
}
.resources-site-flex li{
    padding-bottom: 150px;
}
  


.resources-flex{
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 100%;
    margin-bottom: 50px;
}
.resources-flex li{
    padding-bottom: 215px;
}
.resources-item{
    padding-right: 20px;
    max-width: 350px;
    text-align: left;
    height: 125px;
}
.resources-item a:hover{
    text-decoration: underline !important;
}


/* youtube img's */
#brad-img{
  width: 150px;
  height: 150px;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.8s;
}
#brad-youtube:hover ~ #brad-img{
   opacity: 1;
}

#chris-img{
  width: 150px;
  height: 150px;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.8s;
  border: orangered solid 1px;
}
#chris-youtube:hover ~ #chris-img{
   opacity: 1;
}

#engineer-img{
  width: 150px;
  height: 150px;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.8s;
  border: orangered solid 1px;
}
#engineer-youtube:hover ~ #engineer-img{
   opacity: 1;
}

#clement-img{
  width: 150px;
  height: 150px;
  opacity: 0;
  border-radius: 50%;
  transition: opacity 0.8s;
  border: orangered solid 1px;
}
#clement-youtube:hover ~ #clement-img{
   opacity: 1;
}




.globe-svg{
    height: 17px;
    width: 17px;
}


li{
  list-style: none;
}


.link-bar{
    background: #111;
    height: 100vh;
    width: 75px;
    position: absolute;
    padding-top: 200px;
    top: 150%;
}

.link-icons {
    padding-top: 20px;
    height: 50px;
}
.link-bar p{
  font-size: 15px !important;
}


a{
    text-decoration: none !important;
    height: 60px;
    display: block;
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





/* bigger moniter */
@media(min-width: 1400px) {
  .link-bar{
    height: 80vh;
    padding-top: 250px;
    top: 160%;
  }

.resources-item{
    padding-right: 10px;
    max-width: 400px;
}

     .header{
    height: 24vh;
}

}

/* ipad */
@media(max-width: 1025px) {
   .link-bar{
    height: 50vh;
    padding-top: 200px;
    top: 145%;
  }
}


/* mobile */
@media(max-width: 767px) {
      .header{
    height: 25vh;
}
   
   .link-bar{
       display: none;
   }

   .footer{
    height: 85px;
    width: 100%;
    background: #5b78c7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
  }
  .footer a{
    color: #fff;
    font-size: 17px;
  }
  .footer img{
    height: 35px;
    display: block;
  }

  #about{
    padding-left: 8px;
  }
  #contact{
    padding-left: 14px;
  }
  #skills{
    padding-left: 12px;
  }


}
    

   @media(min-width: 768px) {
     
  
      
}



</style>
