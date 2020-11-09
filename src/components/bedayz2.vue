<template>
  <div>
      <div class="tamamla">
          <div class=al-1>
              
           
          <div class="al-2">
              <div class="photo">
                  <img :src="smallImg"/>
              </div>
              <div class=ial-1>
                  <a href="#" class="amt-1"><p class="mt-1">BEDEL HOODIE</p></a>
                  <p class="mt-2">{{kdvdahil}}TL</p>
                  <p class=mt-3>Beden: S</p>
                  <p class=mt-4>Adet:</p>
                  <input v-model="message" type="number" @change="pozitif()" class="adet">
                  <i class="fas fa-sync"></i>
                 <i class="fas fa-times"></i> 


                  </div>
              </div>

              </div>
              <div :class="dropdownclassal3">
                  <p @click="dropdown">Kupon Kodu Kullan ▼ </p>
                  <div :class="dropdownclassal7">
                      <p class="mt-9">Kupon kodunuzu buraya girin</p>
                      <input v-model="kuponkod" placeholder="Kupon kodunuzu buraya giriniz" class="kupon">
                       <v-btn
                     class="ma-3"
                     tile
                     >
                     KUPONU KULLAN
                     </v-btn>
                  </div>
                  </div>
                  <div :class="dropdownclassal4">
                    <div class="al-5">
                     <p class="mt-5">Sipariş Özeti</p>
                     <div class="al-6">
                     <p class=mt-6>Ara Toplam:</p>
                     <p class=mt-7>{{fiyat}}TL</p>
                     <p class=mt-6>KDV(%8):</p>
                     <p class=mt-7>{{kdv}}TL</p>
                     <p class=mt-6>Toplam:</p>
                     <p class=mt-7>{{kdvdahil}}TL</p>
                     </div> 
                     </div>
                     <v-btn
                     class="ma-2"
                     tile
                     >
                     ALIŞVERİŞİ TAMAMLA
                     </v-btn>
                      </div> 
                          
          </div>
  </div> 
</template>

<script>
export default {
data(){
    return{
          expand: false,
          expand2: false,
          smallImg:"/images/bedelurun.png",
          message:1,
          dropdownclassal3:'al-3',
          dropdownclassal4:'al-4',
          dropdownclassal7:'al-7',
          fiyat:203.61
          
          
    }
},
computed:{
    kdv:function(){
        return  parseInt(this.fiyat) * 8 / 100;
        
    },
    kdvdahil:function(){
        return parseInt(this.fiyat)+this.kdv;
    }
},
methods:{
    dropdown(){
        if(this.dropdownclassal3=='al-3'){
            this.dropdownclassal3='al-3-drop'
            this.dropdownclassal4='al-4-drop'
            this.dropdownclassal7='al-7-drop'
        }
        else{
            this.dropdownclassal3='al-3'
            this.dropdownclassal4='al-4'
            this.dropdownclassal7='al-7'
        } 
    },
    pozitif(){   
        if(this.message<1){
            this.message=1;
        }
    }
}
}
</script>

<style scoped>

.al-6{
    width:320px;
    margin-top:30px;
}
.al-5{
    margin-top:10px;
    margin-left:20px;
}
.mt-5{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:18px;
    line-height: 18px;
    font-weight: 500;
    color:black;
    
}

.mt-6{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:15px;
    line-height: 24px;
    font-weight: 600;
    color:black;
    float:left;
    
}

.al-4-drop{
     width:360px;
    height:150px;
   
    float:left;
    margin-left:810px;
    margin-top:20px;
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
}
.al-3-drop{
    width:360px;
    height:210px;
    
    float:left;
    margin-left:30px;
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
}

.mt-9{
    color:black !important;
    text-decoration:none !important;
}

.al-3-drop p:hover{
    color:#7dbd5d;
    text-decoration:underline;
}

.al-3 p:hover{
     color:#7dbd5d;
    text-decoration:underline;
}

.al-3-drop p{
    margin-left:20px;
    margin-top:15px;
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:13px;
    line-height: 21px;
    font-weight: 400;
    color:rgb(34, 34, 34);
    cursor:pointer;
}
.mt-7{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:15px;
    line-height: 24px;
    font-weight: 400;
    color:black;
    margin-left:250px;
    text-align:right;
   
   
    
}


.al-3 p{
    margin-left:20px;
    margin-top:15px;
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:13px;
    line-height: 21px;
    font-weight: 400;
    color:rgb(34, 34, 34);
    cursor:pointer;
}

.ial-1 i{
    float:left;
    margin-left:20px;
    margin-top:17px;
    color:black !important;
    cursor:pointer;
}

.tamamla{
    margin-top:30px;
    margin-left:160px;
    background-color:white;
    height:500px;
    width:1300px;
}

.al-2{
    width:750px;
    height:136px;
    background-color:white;
    float:left;
    margin-left:30px;
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
    
}

.al-2:hover{

box-shadow: 3px 3px 3px 3px rgb(226, 226, 226);

}
.al-3{
    width:360px;
    height:50px;
    
    float:left;
    margin-left:30px;
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
    
}

.al-4{
    width:360px;
    height:143px;
   
    float:left;
    margin-left:30px;
    margin-top:20px;
    box-shadow: 1px 1px 1px 1px rgb(226, 226, 226);
}

.photo{
    border-style:solid;
    border-color:rgb(221, 220, 220);
    border-width:1px;
    border-radius:3px;
    width:81px;
    height:110px;
    margin-left:22px;
    margin-top:13px;
    float:left;
}
.photo img{
    width:70px;
    height:100px;
    margin-left:4.5px;
    margin-top:5px;
    
    
}

.mt-1{
    font-family:'Barlow', sans-serif;
    font-weight:600;
    font-size:15px;
    line-height:24px;
    color:black;
    float:left;
}
.mt-2{
    font-family:'Barlow', sans-serif;
    font-weight:600;
    font-size:15px;
    line-height:24px;
    color:black;
    float:left;
    margin-left:420px;
    
    
}
.ial-1{
    float:left;
    margin-top:15px;
    margin-left:30px;
}
.amt-1{
    float:left;
}
.mt-3{
    font-family:'Barlow', sans-serif;
    font-weight:400;
    font-size:12px;
    line-height:19px;
    color:black;
    margin-top:30px;
}
.mt-4{
    font-family:'Barlow', sans-serif;
    font-weight:400;
    font-size:15px;
    line-height:24px;
    color:black;
    margin-top:15px;
     float:left;
}
.adet{
    border-style:solid;
    border-width: 1px;
    border-color:grey;
    width:65px;
    height:30px;
    float:left;
    margin-top:10px;
    margin-left:10px;
    padding-left:25px;
}
.ma-2{
  background-color:#7dbd5d !important;
  color: white!important;
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:28px;
  width:365px;
  margin-top:30px;
  height:40px !important;
  
  

}



.al-7
{
    visibility: hidden;
    width:320px;
    margin-left:20px;
    height:160px;
    border-style:solid;
    border-color:gainsboro;
    border-width:1px;
}

.al-7-drop{
    width:320px;
    margin-left:20px;
    height:160px;
    border-style:solid;
    border-color:gainsboro;
    border-width:1px;

}
.al-7-drop p{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:15px;
    line-height: 24px;
    font-weight: 400;
    color:black;
    cursor:default;

}
.al-7 p{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:15px;
    line-height: 24px;
    font-weight: 400;
    color:black;
    cursor:default;
}
.kupon{
    
    width:280px;
    height:40px;
    float:left;
    margin-top:10px;
    margin-left:20px;
    padding-left:25px;
    background-color:#e6e6e6;
    
}
.kupon::placeholder{
    font-style:normal;
    font-family:'Barlow' , sans-serif;
    font-size:13px;
    line-height: 19px;
    font-weight: 200;
    color:black;
}

.ma-3{
  background-color:black !important;
  color: white!important;
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:28px;
  width:280px;
  margin-top:10px;
  height:40px !important;
  margin-left:20px;
}

.ma-3:hover{
text-decoration:underline;
}
.ma-2:hover{
    text-decoration:underline;
}
</style>