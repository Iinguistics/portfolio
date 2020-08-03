<template>
  <div>
         <!-- how not to be wrong the power of math -->
      <div class="book">
        <!-- Book Title -->
       <div class="divider-title">
          <div class="divider"></div>
           <h3 id="services-title">Currently reading: The power of mathematical thinking</h3>
         <div class="divider"></div>   
       </div>
        <!-- image in threejs plane geometry -->
        <a href="https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/0143127535" target="_blank"><div id="book-img"></div></a> 
        <!-- description -->
          <h6>By: Jordan Ellenberg</h6>
           <p>This book connects various economic and societal philosophies with basic mathematics and statistical principles. Math isn’t confined to abstract incidents that never occur in real life, but rather touches everything we do—the whole world is shot through with it.</p>
            <p>Takeaways: </p>
      </div>
  </div>
</template>

<script> 
const THREE = require('three');

export default {
  name: 'current',
  data(){
    return{
      x:window.matchMedia("(max-width: 767px)"),
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      texture1: require('../../assets/list/book-img-how.jpg'),
      
    }
  },
  methods: {

      init: function() {
        const container = document.getElementById('book-img');
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000) ;
        this.camera.position.z = 4;
        this.scene = new THREE.Scene();

         // light
        const light = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(light);
        const light2 = new THREE.PointLight(0xffffff, 0.5);
        this.scene.add(light2);

         //const geometry = new THREE.BoxGeometry(2, 2, 2);
         //const geometry = new THREE.ConeGeometry(100, 200);

         const geometry = new THREE.PlaneGeometry(245, 300);
         const material = new THREE.MeshLambertMaterial({
             map: new THREE.TextureLoader().load(this.texture1)
             });
         
        
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = -300;
        this.scene.add(this.mesh);
        this.scene.background = new THREE.Color( 0xffffff );
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
       
       
    },

    

   


      animate: function() {
        requestAnimationFrame(this.animate);
         this.mesh.rotation.x += 0.01;
         this.mesh.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    },
   



  },

  mounted(){
      this.init();
      this.animate();
  }
 

}
     

 

</script>

<style scoped>
.header{
    height: 50vh;
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


  #book-img{
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




.mobile{
      display: none;
    }





/* bigger moniter */
@media(min-width: 1400px) {
  .link-bar{
    padding-top: 300px;
}

}

/* ipad */
@media(max-width: 1025px) {



}


/* mobile */
@media(max-width: 767px) {
      .main-load{
            display: none;
      }

      .mobile{
      display: inherit;
    }

   




}
    

   @media(min-width: 768px) {
      .mobile{
            display: none;
      }
  
      
}



</style>
