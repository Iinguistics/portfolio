<template>
        <div>
            <section>
             <div class="head">
                <div class="message">
                  <img src="../assets/projects/preview.jpg"/>
                </div>
             <h1>Preview</h1>
            </div>
        <div class="outer">
            <div class="inner"><a href="https://hair-salon-site.herokuapp.com/" target="_blank">Hair Salon</a></div>
            <div class="two-inner"><p>Built with Vue,Node/Express,MongoDB,Bcrypt,ThreeJs &GSAP</p></div>
            <video autoplay muted loop preload>
                    <source src="../assets/video/projects/hair-salon-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
        </div>
        </section>
        <section>
        <div class="outer">
            <div class="inner">This is Section 2</div>
            <div class="two-inner">This is Section 1</div>
        </div>
        </section>
        <section>
        <div class="outer">
            <div class="inner">This is Section 3</div>
        </div>
        </section>
        <section>
        <div class="two">
            <div class="two-inner">This is Section 4</div>
        </div>
        </section>

      
  </div>

  
</template>

<script>
import $ from 'jquery';

export default {
  name: 'test',
    
  data(){
    return{
     error: null,
     
    }
  },
  
     methods: {
      onScroll: function(){
          var ctrl = new ScrollMagic.Controller();

        // Create scenes in jQuery each() loop
        $("section").each(function(i) {
        var inner = $(this).find(".inner");
        var outer = $(this).find(".outer");
        var twoInner = $(this).find(".two-inner");
        var two = $(this).find(".two");
        var tl = new TimelineMax();
        
        tl.from(outer, 0.25, { scaleX: 0 });
        tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

        tl.from(two, 0.25, { scaleX: 0 });
        tl.from(twoInner, 0.65, { xPercent: 100, ease: Back.easeOut });
        
           new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.15
        })
             .setTween(tl)
                .addIndicators({
                colorTrigger: "transparent",
                colorStart: "transparent",
                colorEnd: "transparent",
                indent: 40
                })
                .addTo(ctrl);
            });
      }

     },
     
    mounted(){
         this.onScroll();
    }  

}
     

 

</script>

<style scoped>
a{
    color: #010101;
    text-decoration: none !important;
    font-size: 32px;
    text-transform: uppercase;
}
a:hover{
  border-bottom: 1px solid white;
  color: #fff;
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

h1{
    margin-bottom: 65px;
    text-transform: uppercase;
}

p{
    font-size: 20px;
}


section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #000;
}

.inner {
position: relative;
  
}
.outer {
  overflow: hidden;
}

section:nth-child(1) {
  background-color: #0FA958;
}
section:nth-child(2) {
  background-color: #8b6c4c;
}
section:nth-child(3) {
  background-color: #39a3ee;
}
section:nth-child(4) {
  background-color: #ef9144;
}

video{
  margin-top: 40px;
  width: 675px;
  background: #333;
}


</style>
