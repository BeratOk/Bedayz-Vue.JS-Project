<template>
    <div>
        <div class="productdetails">
        <div class="columb1">
        <div class="kucukfoto">
            <img :src="urunResim" height="60px" class="kucukresim" />
            </div>
        </div>
        <div class="columb2">
        <img :src="urunResim"/>
        </div>
        <div class="columb3">
            <a href="#"><p class="tip1">BEDAYZ</p></a>
            <p class="bedelyazi">BEDEL HOODIE</p>
            <p class="tip1">ÜRÜN KODU:<b>267743</b></p>
            <p class="tip1">STOK DURUMU:<b>STOKTA VAR</b></p>
            <p class="fiyat">219,90TL</p>
            <p class="bedenyazi"><span style="color: #ff0000;">*</span> BEDEN</p>
            <select v-model="secilen" class="bedensecimi">
                  <option  value="secim">--- Seçiniz ---</option>
                  <option  value="s"> S </option>
                  <option  value="m"> M</option>
                  <option  value="l"> L</option>
                  <option  value="xl"> XL</option>
            </select>
             <div id="counter">
                <button type="button" class="miktarbutoneksi" v-on:click="eksilt">-</button>
                <div class=miktarsayidiv>
                <p class="miktarsayi">{{counter}}</p>
                </div>
                <button type="button" class="miktarbutonarti" v-on:click="arttir">+</button>
             </div>
             <v-btn class="sepeteeklebuton"
             tile
             color="primary"
            >
           SEPETE EKLE
           </v-btn>
           <div class="ka-1">
            <div class="ka-2">
            <i class="fa fa-rocket"></i>
            <a href="#"><p>BU ÜRÜN HAKKINDA SORUN</p></a>
          </div>
            <div class="ka-2">
            <i class="fa fa-heart"></i>
            <a href="#"><p>ALIŞVERİŞ LİSTEME  EKLE</p></a>
          </div>
           <div class="ka-2">
            <i class="fa fa-exchange-alt"></i>
            <a href="#"><p>KARŞILAŞTIRMA LİSTESİNE EKLE</p></a>
          </div>
            </div>
         
         <div class="socialbar">
             <div class="sharecount">
                 <p class="count">709</p>
                 <p class="share">Shares</p>
             </div>
             <div class="socialicons">
                 <div class="socialbutton">
                 <a href="#"><img alt="facebook sharing button" src="https://platform-cdn.sharethis.com/img/facebook.svg"></a>
                 </div>
                 <div class="socialbutton">
                <a href="#"> <img alt="twitter sharing button" src="https://platform-cdn.sharethis.com/img/twitter.svg"></a>
                 </div>
                 <div class="socialbutton">
                <a href="#"> <img alt="pinterest sharing button" src="https://platform-cdn.sharethis.com/img/pinterest.svg"></a>
                 </div>
                 <div class="socialbutton">
                 <a href="#"><img alt="linkedin sharing button" src="https://platform-cdn.sharethis.com/img/linkedin.svg"></a>
                 </div>
                 <div class="socialbutton">
                 <a href="#"><img alt="sharethis sharing button" src="https://platform-cdn.sharethis.com/img/sharethis.svg"></a>
                 </div>
                 <div class="socialbutton">
                <a href="#"> <img alt="googlebookmarks sharing button" src="https://platform-cdn.sharethis.com/img/googlebookmarks.svg"></a>
                 </div>
                 </div>

        </div>    

        </div>
         
    
        
        
    </div>
    
   
    </div>
</template>

<script>

export default {
    
  
    
    data:()=>({
        secilen:"secim",
        counter: 1,
        urunResim:"/images/bedelurun.png"

    }),
    el:"#counter",
    methods:{
        arttir: function(){
            this.counter++;
        },
        eksilt: function(){
            if(this.counter>1){
            this.counter--;
            }
        }
    },
}
</script>

<style scoped>
.socialbutton{
    height:32px;
    width:32px;
    background-color:grey;
    float:left;
    margin-left:10px;

}

.socialbutton:hover{
    margin-top:-10px;
    background-color:red;

}


.socialicons{

    float:left;
    margin-top:8px;

}

.socialicons img{
    display:inline-block;
    height: 16px;
    width: 16px;
    margin-left:8px;
    margin-top:8px;
     
}


.socialbar{
    width:400px;
    
    float:left;
    margin-top:40px;
}
.sharecount{
    width:70px;
   float:left;
    height:50px;
    padding-top:10px;
}

.count{
    font-family: Verdana;
    font-weight:500;
    font-size:16px;
    line-height:17px;
    color:#555555;
    text-align: center;
}

.share{
font-family: Verdana;
    font-weight:500;
    font-size:9px;
    line-height:9px;
    color:#555555;
    text-align: center;
}

.ka-1{
    width:250px;
}




.ka-1 i{
    float:left;
    margin-top:10px;

}
.ka-1 p{
    font-family: 'Barlow', sans-serif;
    font-weight:600;
    font-size:12px;
    line-height:19px;
    color:black;
    margin-top:10px;
    margin-left:10px;
    float:left;
    text-decoration:underline;
    cursor: default;
    width:220px;
}
.ka-1 p:hover{
    color:#7dbd5d;
}
.ka-2:hover{
    color:#7dbd5d ;
}
.kucukresim{
    text-align: center;
    margin-left:9px;
}
.kucukfoto{
    width:64px;
    height:64px;
    border-style:solid;
    border-color:green;
    border-width:2px;
}
.sepeteeklebuton{
  background-color:#7dbd5d !important;
  color: #ffffff !important;
  font-family:"Barlow", sans-serif !important;
  font-style:normal !important;
  font-weight:400 !important;
  font-size:20px !important;
  line-height:32px !important;
  float:left;
  border-radius:0px !important;
  height:50px !important;
  margin-left:10px;
  width:288px !important;
  margin-bottom:50px;

}

.bedenyazi{
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:13px;
    line-height:21px;
    color:#7dbd5d;
}
.fiyat{
    font-family: 'Barlow', sans-serif;
    font-weight:600;
    font-size:50px;
    line-height:80px;
    color:#7dbd5d;
    margin-top:20px;
    margin-bottom:20px;
}

.bedelyazi{
    font-family: 'Barlow', sans-serif;
    font-weight:600;
    font-size:30px;
    line-height:35px;
    color:#000000;
    margin-top:20px;
    margin-bottom:20px;

}


.tip1{
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:12px;
    line-height:19px;
    color:#000000;
}
.columb1{
width:65px;
float:left;
height:500px;



}

.columb2{
width:585px;
height:500px;
float:left;
margin-left:8px;

}

.columb3{

width:470px;
float:left;
margin-left:45px;


}

.miktarbutoneksi{
    height:50px;
    width:31px;
    background-color:rgb(230 230 230);
    float:left;
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:30px;
    line-height: 24px;
    color:black;
    padding-bottom:5px;
     border-right-style:solid;
    border-right-color:rgb(179, 177, 177);
    border-right-width:1px;
}

.miktarbutonarti{
    height:50px;
    width:31px;
    background-color:rgb(230 230 230);
    float:left;
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:20px;
    line-height: 24px;
    color:black;
    padding-bottom:5px;
   
}
.miktarbuton:hover{
    color:green;
}
.miktarsayi{
    padding-top:10px;
    font-family: 'Barlow', sans-serif;
    font-weight:700;
    font-size:15px;
    line-height: 24px;
    color:black;
    text-align: center;
   
    
    
}
.miktarsayidiv{
    height:50px;
    border-right-style:solid;
    border-right-color:rgb(179, 177, 177);
    border-right-width:1px;
    width:82px;
    float:left;
    background-color:rgb(230 230 230);
}
.bedensecimi{
    width:440px;
    background-color:rgb(230 230 230);
    height:50px;
    padding-left:20px;
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:14px;
    line-height: 20px;
    color:#495057;

}
#counter{
    margin-top:40px;
}
.productdetails{
    margin-left:180px;
}
</style>
