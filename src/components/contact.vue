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
       <div class="links">
         <router-link to="/" class="link-item">Home</router-link>
         <router-link to="/about" class="link-item">About</router-link>
         <router-link to="/projects" class="link-item">Projects</router-link>
     </div>
      <div class="head">
        <h3>Get in touch</h3>
      </div>
       
        <form v-on:submit.prevent="submitMessage" class="appointment-form" name="contact" method="POST" data-netlify="true">

         <div class="form-group">
             <label for="name">Your Name:</label>
             <input class="form-input" id="name" type="text" v-model="name" />
         </div>

         <div class="form-group">
             <label for="email">Your Email:</label>
             <input class="form-input" id="email" type="email" v-model="email"  />
         </div>
        
          <div class="form-group">
             <label for="message">Message:</label>
             <textarea class="form-input" id="message" type="text" rows="4" cols="50" v-model="message"></textarea>
         </div>

            <!-- form error -->
          <div v-if="error" class="error">
            <h4>{{error}}</h4>
          </div>
            <wired-button elevation="2" @click="submitMessage" id="submit">Submit</wired-button>
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
               })
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



.links{
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
}

.link-item{
  margin-left: 15px;
  margin-top: 5px;
}

.link-item::after{
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: #000000;
  transition: width .3s;
}

.link-item:hover::after{
  width: 100%;
  transition: width .3s;
}

a{
  color: #0A192F;
  text-decoration: none !important;
}

a:hover{
  color: #0A192F;
}

@media(max-width: 700px) {
   .wrap{
     display: none;
   }
    .mobileWrap{
     display: inherit;
   }

}

@media(min-width: 700px) {
  .mobileWrap{
     display: none;
   }

}

</style>
