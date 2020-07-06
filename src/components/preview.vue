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
            <div class="inner"><a href="https://stat-tracking.herokuapp.com/" target="_blank">Stat Tracker</a></div>
            <div class="two-inner"><p>Built with Vue,Node/Express & Tracker.gg API</p></div>
            <video autoplay muted loop preload>
                    <source src="../assets/video/projects/stat-tracker-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
        </div>
        </section>
        <section>
          <div class="outer">
            <div class="inner"><a href="https://ctdi-jg.netlify.app/#/" target="_blank">CTDI</a></div>
            <div class="two-inner"><p>Built with Vue,ThreeJs & Google Charts</p></div>
            <video autoplay muted loop preload>
                    <source src="../assets/video/projects/ctdi-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
        </div>
        </section>
        <section>
          <div class="outer">
            <div class="inner"><a href="https://iinguistics.github.io/weatherApp/" target="_blank">Weather App</a></div>
            <div class="two-inner"><p>Built with JQuery & Open weather map API (First project I built)</p></div>
            <video autoplay muted loop preload>
                    <source src="../assets/video/projects/weather-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
        </div>
        </section>
         <section>
          <div class="outer">
            <div class="inner"><a href="https://www.algorithm-archive.org/" target="_blank">Algorithm Archive</a></div>
            <div class="two-inner"><p>Open source project I am contributing to</p></div>
            <video autoplay muted loop preload>
                    <source src="../assets/video/projects/algo-archive-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
        </div>
        </section>


  </div>

  
</template>

<script>
import $ from 'jquery';

export default {
  name: 'preview',
    
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
        
        tl.from(outer, 0.80, { scaleX: 0 });
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
    color: #020C3A;
    text-decoration: none !important;
    font-size: 32px;
    text-transform: uppercase;
}
a:hover{
  border-bottom: 1px solid #020C3A;
  color: #020C3A;
}

 .message{
   height: 0px;
   opacity: 0;
 }
.message img{
  height: 115px;
  width: 150px;
  position: absolute;
  border-radius: 50%;
}


.head:hover > .message{
  transition: 0.50s;
  transition-timing-function: ease-out;
  opacity: 0.7;
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
  height: 107vh;
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
  background-color: #ffffff;
}
section:nth-child(3) {
  background-color: #0FA958;
}
section:nth-child(4) {
  background-color: #ffffff;
}
section:nth-child(5) {
  background-color: #0FA958;
}


video{
  margin-top: 40px;
  width: 675px;
  background: #333;
}



@media(min-width: 1400px) {
     h1{
    margin-bottom: 95px;
}

   

}


</style>
