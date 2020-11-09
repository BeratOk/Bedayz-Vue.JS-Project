<template>
    <div>
      <div id=menug>
      <div class="menu">
        <div class="menuitems">
        <a href="#">Hoodies</a>
        <a href="#">Sweatshirts</a>
        <a href="#">Tracksuits & Coats</a>
        <a href="#">T-shirts</a>
        <a href="#">Shorts</a>
        
      </div>
        

   <div class="dropdown">
          <button class="mainmenubtn">Accessories</button>
          <div class="dropdown-child">
            <div class="dropdown-child-icerik">
              <div class="icerik">
             <a href="#">Bandana</a>
             <a href="#">Kolye</a>
             <a href="#">Bere</a>
             <a href="#">Anahtarlık</a>
             </div>
             </div>
      </div>
  
</div>
</div>
</div>

</div>
</template>
<script>

export default{

}

</script>
<style scoped>

#menug{
  height: 50px;
  background-color:black;
  
}


.menu{
  margin-left:450px;
  background-color:black;
  height:50px;
  width:900px;
  position:relative;

}
.menuitems{
margin-top:1%;
float:left;
height: 50px;

}
.menuitems a{
  margin-right:35px;
  color:white;
  font-weight: 400;
  font-size:16px;
  height: 50px;
  font-family: 'Barlow', sans-serif;
  line-height: 26px ;
  text-decoration: none;
  
}
  

.menuitems a:hover{
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color:yellow;
  text-decoration: none;
 
}


.mainmenubtn {
  
  color:white;
  border:none;
  cursor:pointer;
  background-color:black;
   
  color:white;
  font-weight: 400;
  font-size:16px;

  font-family: 'Barlow', sans-serif;
  line-height: 26px ;
  
}
.mainmenubtn:hover{
   border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color:yellow;
  text-decoration: none;
}
.dropdown{
  margin-top:1%;
  position:relative;
  display:inline-block;
}


.dropdown-child{
  display:none;
  background-color:transparent;
  min-width:200px;
  
  position:absolute;
  z-index: 999;
  
}
.dropdown-child-icerik{
  margin-top:24px;
  background-color:white;
  width:300px;
  height:200px;
  margin-left:-13%
}

.dropdown-child-icerik .icerik{
  padding-top:25px;
  padding-left:40px;
  
}
.dropdown-child a:hover{
  color:greenyellow;
  text-decoration: underline;
}
.dropdown-child a {
  color:black;
  padding:5px;
 
  

  text-decoration:none;
  display:block;

}
.dropdown:hover .dropdown-child{
  display:block;
}
</style>