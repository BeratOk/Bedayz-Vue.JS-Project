<template><div>
  <div class="animated-title">
  <div class="text-top">
    <div>
      <span>BERAT OK
      </span>
    </div> 
  </div>
  <div class="text-bottom">
    <div>160101018
        
    </div>
  </div>
</div> 
  <div class="animateed-title">
  <div class="text-top">
    <div>
      <span>BERKAY ŞENLER</span>
    </div>
  </div>
  <div class="text-bottom">
    <div>170101058</div>
  </div>
</div> 
</div> 
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 25%;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 90vmin; 
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 12vmin; 
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}


.animateed-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 75%;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 90vmin;
}
.animateed-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animateed-title > div div {
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animateed-title > div div span {
  display: block;
}
.animateed-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animateed-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animateed-title > div.text-top div span:first-child {
  color: #767676;
}
.animateed-title > div.text-bottom {
  bottom: 0;
}
.animateed-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}




</style> 