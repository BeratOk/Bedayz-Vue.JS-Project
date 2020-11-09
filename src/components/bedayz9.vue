<template>
  <div class="genel">
    <div id="ustkisim">
    <div class=ustbar>
      <div class=ustbaricerik>
      <div class="socialicons">
      <a href="https://www.instagram.com/bedayz"><img src="/images/instagram.png" height=16px width="16px" class="socialicon" ></a>
     <a href="https://www.twitter.com/bdyzone"> <img src="/images/twitter.png" height=16px width="16px" class="socialicon" href="https://www.twitter.com/bdyzone"></a>
     <a href="https://www.facebook.com/bedayzcom"> <img src="/images/facebook.png" height=16px width="16px" class="socialicon" href="https://www.facebook.com/bedayzcom"></a>
      </div>
      <div class="dilsecenek">
        <b-form-select v-model="selected" :options="options" size="sm" class="diff"></b-form-select>
        <b-form-select v-model="selected1" :options="options1" size="sm" class="diff1"></b-form-select>
      </div>
      <div class="hosgeldiniz">
       <p>Welcome</p>
        </div>
        
</div>
       
  </div>  
 
 </div>  
   
   <div class="ortakisim">
     <div class="arama">
      
  <v-text-field placeholder="Ne aramıştınız?..." class="md5"></v-text-field >
  <img src="images/search.png" class="aramalogo" height="15px" width="15px">

     </div>
      <div class="logo">
       <a href="#"> <img src="images/logo.png"></a>
     </div>
      <div class="icons">
        <a href="#"><img src="images/man.png" class="ortaicon" height="35px" width="35px"></a>
        <a href="#"><img src="images/hearth.png" class="ortaicon" height="45px" width="45px"></a>
        <a href="#"><img src="images/cart.png" class="ortaicon" height="45px" width="45px"></a>
        
     </div>
     </div>
    
 </div>  
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Türkçe' },
          { value: 'a', text: 'English' }
         
        ],
        selected1: null,
        options1: [
          { value: null, text: 'Türk Lirası' },
          { value: 'a', text: 'Euro' },
          { value: 'a', text: 'US Dollar' }
         
        ]
      }
    }
  }
</script>

<style scoped>

.genel{
 
  height:500px;
}
.ustbar{
  background-color:black;
  height:40px;
  border-bottom-style:solid;
  border-bottom-width:0.01px;
  border-bottom-color:grey;

}
.ustbaricerik{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:200px;
  
}
.socialicon{
  margin-right:15px;
  
}

.mainmenubtn {
  
  color:white;
  border:none;
  cursor:pointer;
  background-color:black;
  
}
.mainmenubtn:hover{
   border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color:yellow;
  text-decoration: none;
}
.socialicons{
  float:left;
}
.dilsecenek{
  margin-left:60%;
  float:left;
}
.diff{
  width:70px;
  color:grey !important;
      -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: black;
    cursor: default;
    margin: 0em;
    font-family: 'Barlow', sans-serif;
    line-height: 26px ;
    font-size:13px;
    
}
.diff1{
  margin-left:20px;
  width:100px;
  color:grey !important;
      -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: black;
    cursor: default;
    font-family: 'Barlow', sans-serif;
    line-height: 26px ;
    font-size:13px;
    
}
.hosgeldiniz{
float:left;
border-left-style: solid;
border-left-color:grey;
border-left-width: 0.5px;
margin-left:1%;

}
.hosgeldiniz p {
  color:grey;
  margin-left:20%;
  font-size:13px;
  font-family: 'Barlow', sans-serif;
  line-height: 26px ;
}
.arama{
  width:245px;
  background-color:#e6e6e6;
  height:40px;
  float:left;
  margin-left:13%;
  margin-top:2.5%;
 
}
.md5{
  width:180px;
  float:left;
  margin-top:-3.5%;
  margin-left:7%;
  font-size:14px;
  font-family: 'Barlow', sans-serif;
  line-height: 22px ;
  color:#000000;

  
}
.aramalogo{
  margin-top:4%;
  margin-left:7%;
}
.ortakisim{
  background-color:black;
  height:120px;
}
.logo{
  float:left;
  margin-left:15%;
  margin-top:2%;
}
.icons{
  float:left;
  margin-top:2%;
  margin-left:24.5%;
  width:12%;
}
.ortaicon{
  margin-left:3%;
  
  
}
</style>