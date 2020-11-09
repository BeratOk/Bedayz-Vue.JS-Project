<template>
  <div>
      <div class="urunpopup">
          <img :src="urunResim" class="kucukresim" />
          <div class="al-1">
              <p class="mt-1">BEDEL HOODIE</p>
              <p class="mt-2">219,90TL</p>
              </div>
        <div class="al-2">
            <p class="mt-4"><span style="color: #ff0000;">*</span> BEDEN</p>
             <select v-model="secilen" class="bedensecimi">
                  <option  value="secim">--- Seçiniz ---</option>
                  <option  value="s"> S </option>
                  <option  value="m"> M</option>
                  <option  value="l"> L</option>
                  <option  value="xl"> XL</option>   
            </select>
            </div>
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
.urunpopup{
    margin-left:180px;
}

.sepeteeklebuton{
  background-color:#7dbd5d !important;
  color: #ffffff !important;
  font-family:"Barlow", sans-serif !important;
  font-style:normal !important;
  font-weight:400 !important;
  font-size:16px !important;
  line-height:32px !important;
  float:left;
  border-radius:0px !important;
  height:49px !important;
  margin-left:10px;
  width:290px !important;
  margin-top:40px;  

}
.al-2{
    float:left;
    margin-left:179px;
    margin-top:10px;
}
.mt-1{
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:15px;
    line-height: 24px;
    color:black;
}
.mt-2{
    float:left;
    margin-top:5px;
    font-family: 'Barlow', sans-serif;
    font-weight:600;
    font-size:16px;
    line-height: 26px;
    color:#7dbd5d;
    
}
.mt-3{
    float:left;
    margin-top:5px;
    margin-left:10px;
   
}
.mt-4{
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:13px;
    line-height: 21px;
    color:#7dbd5d;
}
.al-1{
    float:left;
    margin-left:20px;
    margin-top:20px;
}
.kucukresim{
    height:80px;
    float:left;
    margin-left:10px;
    margin-top:5px;
}
.bedensecimi{
    width:150px;
    background-color:rgb(230 230 230);
    height:40px;
    padding-left:30px;
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:14px;
    line-height: 20px;
    color:#495057;
    margin-top:10px;

}
#counter{
    margin-left:178px;
    float:left;
    margin-top:40px;
}
.miktarbutoneksi{
    height:50px;
     width:32px;
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
    width:32px;
    background-color:rgb(230 230 230);
    float:left;
    font-family: 'Barlow', sans-serif;
    font-weight:400;
    font-size:20px;
    line-height: 24px;
    color:black;
    padding-bottom:2px;
   
}
.miktarbuton:hover{
    color:green;
}
.miktarsayi{
    padding-top:10px;
    font-family: 'Barlow', sans-serif;
    font-weight:600;
    font-size:20px;
    line-height: 24px;
    color:black;
    text-align: center;
   
    
    
}
.miktarsayidiv{
    height:50px;
    border-right-style:solid;
    border-right-color:rgb(179, 177, 177);
    border-right-width:1px;
    width:80px;
    float:left;
    background-color:rgb(230 230 230);
}
</style>