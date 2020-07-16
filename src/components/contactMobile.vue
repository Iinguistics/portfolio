<template>
  <div class="wrap">
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
             <input type="submit" value="Send" class="btn btn-outline-dark" />
     </form>
      
        <!-- footer -->
  <div class="footer" @click="paths">
    <router-link to="/about"><img src="../assets/mobile-icons/face.png" id="about"/>About</router-link>
    <router-link to="/skills"><img src="../assets/mobile-icons/skill.png"/>Skills</router-link>
     <router-link to="/projects"><img src="../assets/mobile-icons/projects-icon.png" id="about"/>Projects</router-link>
  </div>
  
  </div>

  
</template>

<script>


export default {
  name: 'contactMobile',
  data(){
    return{
     error: null,
     name: null,
     email: null,
     message: null

    }
  },
  methods: {
   
     submitMessage: function(){
          if(!this.name || !this.email || !this.message){
               this.$toasted.show("Please enter all required info", {
                   duration: 3000,
                   icon: "exclamation-circle",
                   theme: "bubble", 
               })
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
      
     

  mounted() {
      
  },
  
 
}
     

 

</script>

<style scoped>

@media(max-width: 768px) {
  

.wrap{
  height: 94vh;
  background-color: #0A192F;
}

.head{
 color: #000;
 padding-top: 30px;
}



label{
  font-size: 17px;
  color: #000;
}


.appointment-form{
  max-width: 70%;
  margin: auto;
  margin-top: 70px;
  
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
  color: #000;
}

.btn:hover{
  background-color: transparent !important;
  color: #FFF;
}

.footer{
    height: 85px;
    width: 100%;
    background: #5b78c7;
    margin-top: 100px;
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

</style>
