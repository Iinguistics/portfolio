<template>
        <div class="preview-mobile">
            <section id ="outer-first">
             <div class="head">
               <h1>Project's Preview</h1>
            </div>
        <div class="outer">
            <div class="inner"><a href="https://hair-salon-site.herokuapp.com/" target="_blank">Hair Salon</a></div>
            <div class="two-inner"><p>Built with Vue,Node/Express,MongoDB,Bcrypt,Google Maps API,ThreeJs &GSAP</p></div>
            <a href="https://hair-salon-site.herokuapp.com/" target="_blank">
              <video autoplay muted loop preload>
                    <source src="../assets/video/projects/hair-salon-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
            </a>
              <div class="three-inner"><p>User logins, password hashing, setting up a database, posting, updating & deleting data. Once you learn the server side API calls & how to set up a model, not only can you create the majority of site's on the web,it also expands your knowledge of the front end so you have a deeper understanding of the entire stack to the data distribution on the UI.</p><p>Enter in Admin@admin.com & project*# to log into & view the stylist dashboard page.</p></div>
        </div>
        </section>
        <section>
         <div class="outer">
            <div class="inner"><a href="https://stat-tracking.herokuapp.com/" target="_blank">Stat Tracker</a></div>
            <div class="two-inner"><p>Built with Vue,Node/Express & Tracker.gg API</p></div>
            <a  href="https://stat-tracking.herokuapp.com/" target="_blank">
             <video autoplay muted loop preload>
                    <source src="../assets/video/projects/stat-tracker-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
            </a>
               <div class="three-inner"><p>The UI is not much to look at, but under the hood the most exciting app Ive built(at the time). I learned how to connect the client with the server, how to make an api call from the front end & to a back end api & display the data on the client. Plus I enjoy gaming, so accessing assist stats & WL ratios was very exciting.</p></div>
        </div>
        </section>
        <section>
          <div class="outer">
            <div class="inner"><a href="https://ctdi-jg.netlify.app/#/" target="_blank">CTDI</a></div>
            <div class="two-inner"><p>Built with Vue,ThreeJs & Google Charts</p></div>
            <a href="https://ctdi-jg.netlify.app/#/" target="_blank"> 
               <video autoplay muted loop preload>
                    <source src="../assets/video/projects/ctdi-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
            </a> 
               <div class="three-inner"><p>Focused on learning UI libraries, threejs(really fun to use), hovereffect, blotterjs, animejs & google charts to name a few. Piling on img's, vid's, css & js although can look really good, is not ideal for load times/optimization.</p></div>
        </div>
        </section>
        <section>
          <div class="outer">
            <div class="inner"><a href="https://iinguistics.github.io/weatherApp/" target="_blank">Weather App</a></div>
            <div class="two-inner"><p>Built with JQuery & Open weather map API (First project I built)</p></div>
            <a href="https://iinguistics.github.io/weatherApp/" target="_blank">
              <video autoplay muted loop preload>
                    <source src="../assets/video/projects/weather-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
            </a>   
                <div class="three-inner"><p>Learned how to make api calls from the front end with ajax, after learning HTML,CSS & JS..when I look at the code now I cringe, there are so many things that could be done differently, this was before I learned about flexbox & grid, UI libraries & axios. (Although the major cities portion is pretty scalable if I ever wanted to add to it)</p></div>
        </div>
        </section>
         <section>
          <div class="outer">
            <div class="inner"><a href="https://www.algorithm-archive.org/" target="_blank">Algorithm Archive</a></div>
            <div class="two-inner"><p>Open source project I am contributing to</p></div>
            <a href="https://www.algorithm-archive.org/" target="_blank">
               <video autoplay muted loop preload>
                    <source src="../assets/video/projects/algo-archive-mp4.mp4"
                    type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video> 
            </a>
                 <div class="three-inner"><p>A guide for all algorithms in all languages. This project brings the joy's of algorithm's into a good learning resource for everyone to explore & learn. </p></div>
        </div>
        </section>


  </div>

  
</template>

<script>
import $ from 'jquery';

export default {
  name: 'previewMobile',
    
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
        // this.onScroll();
    }  

}
     

 

</script>

<style scoped>

 @media(max-width: 767px) {
 
a{
    color: #020C3A;
    text-decoration: none !important;
    font-size: 26px;
    text-transform: uppercase;
}
a:hover{
  border-bottom: 1px solid #020C3A;
  color: #020C3A;
}



h1{
    margin-bottom: 65px;
    text-transform: uppercase;
    font-size: 28px;
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
#outer-first{
  height: 107vh;
}

.inner {
position: relative;
  
}
.outer {
  overflow: hidden;
}

.two-inner p{
  font-size: 16px;
}

.three-inner{
  max-width: 95%;
  margin-top: 50px;
}
.three-inner p{
  text-align: left;
  margin-left: 6%;
  font-size: 14px;
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
  background: #333;
}

.preview-gone{
  display: none;
}


 }

 @media (min-width: 411px) and (max-width: 414px) {
   video{
    width: 400px;
  }
 }

@media (min-width: 360px) and (max-width: 411px) {
   video{
    width: 350px;
 }
 .two-inner p{
   font-size: 0.9em;
 }

}

@media (max-width: 320px) {
    video{
    width: 310px;
 }
 .two-inner p{
   font-size: 0.9em;
 }
}




</style>
