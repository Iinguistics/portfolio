<template>
<div>
    <nav>
       <h4>JG</h4>
      <div class="hamburger">
        <div class="line one"></div>
        <div class="line two"></div>
        <div class="line three"></div>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

   

</div>
 

  
</template>

<script>



export default {
  name: 'navBar',
   
  data(){
    return{
     error: null,
     text: false
    }
  },
     methods: {
      navBar: function(){
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const header = document.querySelector(".header-details");

    hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
      });
      
        setTimeout(function(){
       header.classList.toggle("header-details-gone")
      }, 400)
      
      
   
    });

    
  }

   
      
  

  },
    mounted(){
       this.navBar();
}  

}
     

 

</script>

<style scoped>





@media screen and (min-width: 768px) { 
nav{
    display: none;
}

}

@media screen and (max-width: 768px) {
    nav {
  height: 8vh;
  background: #333;
}

   h4{
    position: absolute;
    left: 5%;
    top: 50%;
    z-index: 2;
    transform: translate(-5%, -50%);
    color: #fff;
  }

.nav-links {
  display: flex;
  list-style: none;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

  .line {
    width: 30px;
    height: 2px;
    background: #fff;
    margin: 5px;
  }


  nav {
    position: relative;
  }

  .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;
  }

  .nav-links {
    position: fixed;
    background: #5b78c7;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    -webkit-clip-path: circle(100px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;
  }
  .nav-links.open {
    clip-path: circle(1000px at 90% -10%);
    -webkit-clip-path: circle(1000px at 90% -10%);
    pointer-events: all;
  }
  
  .nav-links li {
    opacity: 0;
  }
  .nav-links li a {
    font-size: 25px;
  }
  .nav-links li:nth-child(1) {
    transition: all 0.5s ease 0.2s;
  }
  .nav-links li:nth-child(2) {
    transition: all 0.5s ease 0.4s;
  }
  .nav-links li:nth-child(3) {
    transition: all 0.5s ease 0.6s;
  }
  .nav-links li:nth-child(4) {
    transition: all 0.5s ease 0.8s;
  }
  .nav-links li:nth-child(5) {
    transition: all 0.5s ease 1.0s;
  }
  li.fade {
    opacity: 1;
  }

}
 


</style>
