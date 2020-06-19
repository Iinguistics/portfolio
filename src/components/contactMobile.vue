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
     }
      
  },
  mounted() {
      this.submitMessage();
  },
  
 

 
 

}
     

 

</script>

<style scoped>

.wrap{
  height: 100vh;
  background-color: #0A192F;
}

.head{
 color: #64FFDA;
 padding-top: 30px;
}



label{
  font-size: 17px;
  color: #64FFDA;
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
  color: #64FFDA;
}

.btn:hover{
  background-color: transparent !important;
  color: #FFF;
}



</style>
