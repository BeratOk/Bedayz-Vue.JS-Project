<template>
  <div>
      <div class="popup">
          <div class="leftside">
              <div class="ls-1">
              <i class="fas fa-check"></i>
              <p>BAŞARILI:<br> SEPETE EKLENDİ!</p>
              </div>
              <img :src="urunResim"/>
              <p class="mt-1">BEDEL HOODIE<br> Adet: 1</p>
              <p class="fyt-1">219,90TL</p>
           </div>

           <div class="rightside">
               <div class="texts">
               <p class="mt-2">Sepetinizdeki toplam ürün</p>
               <p class="mt-3">Toplam:</p><p class="mt-4">219,90TL</p>
               </div>
               <div class="buttons">
                  <v-btn class="lightbutton"
                   tile
                   color="success"
                    >ALIŞVERİŞE DEVAM
                   </v-btn>
                   <v-btn class="lightbutton"
                   tile
                   color="success"
                   href="/bedayz2"
                    >SEPETİM  
                   </v-btn>
                   <v-btn class="darkbutton"
                   tile
                   color="success" 
                    >ÖDEME İŞLEMİNE DEVAM EDİN
                   </v-btn>

              
    </div>
           </div>
      </div>
  </div>
</template>
67.5
<script>
export default {
  data:()=>({
    
        urunResim:"/images/bedelurun.png"

    })
}
</script>

<style scoped> 

.popup{
    margin-left:450px;
}
.leftside img{
    width:150px;
    height:210px;
    margin-left:60px;
    margin-top:30px;
}
.ls-1{
    margin-left:25px;
    margin-top:40px;
}
.leftside{
    width:275px;
    height:430px;
    background-color:white;
    float:left;

}
.texts{
    margin-top:70px;
}
.rightside{
    width:350px;
    height:430px;
    background-color:#f2f2f2;
    float:left;
}

.leftside i{
    font-weight: 900;
    color:#7dbd5d;
    font-size:30px;
    float:left;
}
.ls-1 p{
    float:left;
    padding-left:10px;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 600;
    font-size: 20px;
    line-height:20px;
    color:black; 
}
.mt-1{
    text-align: center;
    margin-top:15px;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 400;
    font-size: 15px;
    line-height:18px;
    color:black; 
    
}
.mt-2{
    text-align: center;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 400;
    font-size: 15px;
    line-height:24px;
    color:black; 
    

}
.mt-3{
    text-align: center;
    margin-top:35px;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 400;
    font-size: 15px;
    line-height:24px;
    color:black; 
    float:left;
    margin-left:70px;
   
}
.mt-4{
    text-align: center;
    margin-top:18px;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 600;
    font-size: 35px;
    line-height:56px;
    color:#7dbd5d;
    float:left;
    margin-left:5px;
    margin-bottom:15px;
}
.fyt-1{
    text-align:center;
    font-family:'Barlow' , sans-serif;
    font-style:normal;
    font-weight: 700;
    font-size: 15px;
    line-height:24px;
    color:black; 
    margin-top:10px;
}
.lightbutton{
    margin-left:40px;
    width:270px;
    height:40px !important;
    background-color:transparent !important;
    margin-top:10px;
    border-style:solid;
    border-color:grey;
    border-width:1px;
    box-shadow: none !important;
    font-family:'Barlow' , sans-serif !important;
    font-style:normal !important;
    font-weight: 400 !important;
    font-size: 13px !important;
    line-height:21px !important;
    color:black !important; 
}
.darkbutton{
    margin-left:40px;
    width:270px;
    height:50px !important;
    background-color:transparent !important;
    box-shadow: none !important;
    border-style:solid;
    border-color:grey;
    border-width:1px;
    margin-top:10px;
    background-color:#7dbd5d !important;
     font-family:'Barlow' , sans-serif !important;
    font-style:normal !important;
    font-weight: 400 !important;
    font-size: 13px !important;
    line-height:21px !important;
    color:white !important; 
}

.darkbutton:hover{
    text-decoration:underline;
    
}

.lightbutton:hover{
    text-decoration:underline;
    
}

</style>