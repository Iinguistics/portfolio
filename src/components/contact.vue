<template>
  <div>
   <div class="wrap">
       <!-- barba -->
    <div data-barba="wrapper" class="barbaWrapper">
        <div class="load-container">
            <div class="loading-screen"></div>
        </div>
    </div>
      <!-- barba end   --> 
        <div class="link-bar">
        <li><router-link to="/"><img class="link-icons" id="home-img" src="../assets/icons/home-icon.png" alt="home icon"><p id="home-text">Home</p></router-link></li> 
        <li><router-link to="/about"><img class="link-icons" id="about-img" src="../assets/icons/about-icon.png" alt="about icon"><p id="about-text">About</p></router-link></li> 
        <li><router-link to="/projects"><img class="link-icons" id="projects-img" src="../assets/icons/eye-icon.png" alt="projects icon"><p id="projects-text">Projects</p></router-link></li>
        <li><router-link to="/skills"><img class="link-icons" id="skills-img" src="../assets/icons/skills-icon.png" alt="skills icon"><p id="skills-text">Skills</p></router-link></li> 
    </div>
      <div class="head">
        <div class="message">
          <img src="../assets/message-in-bottle.jpg"/>
        </div>
        <h3>Get in touch</h3>
      </div>
        <form v-on:submit.prevent="submitMessage" class="appointment-form" name="contact" method="POST" data-netlify="true">

         <div class="form-group">
             <label for="name">Your Name:</label>
             <input class="form-input" id="name" name="name" type="text" v-model="name" />
         </div>

         <div class="form-group">
             <label for="email">Your Email:</label>
             <input class="form-input" id="email" type="email" name="email" v-model="email"  />
         </div>
        
          <div class="form-group">
             <label for="message">Message:</label>
             <textarea class="form-input" id="message" name="message" type="text" rows="4" cols="50" v-model="message"></textarea>
         </div>

            <!-- form error -->
          <div v-if="error" class="error">
            <h4>{{error}}</h4>
          </div>
            <wired-button elevation="2" @click="submitMessage" id="submit" type="submit">Send</wired-button>
     </form>
      
      
    </div>
     <contactMobile class="mobileWrap" />
    
  </div>
  

  
</template>

<script>
import $ from 'jquery';
import barba from '@barba/core';
import gsap from 'gsap';
import contactMobile from './contactMobile';

export default {
  name: 'contact',
  components: {
    contactMobile
  },
  data(){
    return{
     error: null,
     name: null,
     email: null,
     message: null

    }
  },
  methods: {
    delay: function(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
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


      trans: function(){
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(2000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
      });
     },
     submitMessage: function(){
          if(!this.name || !this.email || !this.message){
               this.$toasted.show("Please enter all required info", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               });
             }
     }
      
  },
  
  mounted(){
    this.delay();
    this.pageTransition();
    this.trans();
  }

 
 

}
     

 

</script>

<style scoped>


 .loading-screen {
    position: relative;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background-color: #ca2f2f;
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

.wrap{
 background-color: #fff;
}


 
 .message{
   height: 0px;
   display: none;
 }
.message img{
  height: 115px;
  width: 150px;
  position: absolute;
  border-radius: 50%;
}


.head:hover > .message{
   display: inherit;
}


.head{
 color: #0A192F;
 padding-top: 30px;
}



label{
  font-size: 17px;
  color: #0A192F;
}


.appointment-form{
  max-width: 35%;
  margin: auto;
  margin-top: 75px;
  
}


.form-input{
  display: block;
  width: 100%;
  box-sizing: border-box;
  background: #111;
  padding: 15px 40px;
  outline: none;
  color: #ddd;
  transition: 0.5s;
}

.form-input:focus{
  box-shadow: 0 0 10px 4px #34495e;
}

.btn{
  text-align: center;
  
}

.btn:hover{
  background-color: transparent !important;
  color: #0A192F;
}

#submit{
  color: #0A192F;
}

li{
  list-style: none;
}


.link-bar{
    background: #111;
    height: 100vh;
    width: 60px;
    position: absolute;
    padding-top: 200px;
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
#skills-text{
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
#skills-img:hover ~ #skills-text{
    display: inherit;
}



@media(max-width: 768px) {
   .wrap{
     display: none;
   }
    .mobileWrap{
     display: inherit;
   }

}

@media(min-width: 768px) {
  .mobileWrap{
     display: none;
   }

}

</style>
