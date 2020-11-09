<template>

     <div> 
       <div class="itemshow">
         <div class="cpanel">
           <p class=mt-4>Hoodies</p>
         
         <div class="icons">
           <i class="fa fa-th" @click="kucukliste"></i>
           <i class="fa fa-th-large" @click="ortaliste"></i>
           <i class="fa fa-th-list" @click="buyukliste" ></i>
           </div>
           <p class="mt-5">SIRALA: </p>
           <select v-model="sirala" @change="siralaF()" class=sirala>
             <option value="varsayilan">VARSAYILAN</option>
             <option value="urunadiaz">ÜRÜN ADI(A-Z)</option>
             <option value="urunadiza">ÜRÜN ADI(Z-A)</option>
             <option value="urunup">UCUZDAN > PAHALIYA</option>
             <option value="urunpu">PAHALIDAN > UCUZA</option>
             
             </select>
             <p class="asagiok"> ▼</p>
             <p class="mt-6">GÖSTER: </p>
             <select v-model="goster" class=adet>
               <option value="15">15</option>
             <option value="25">20</option>
             <option value="50">50</option>
             <option value="75">75</option>
             <option value="100">100</option>
               </select>
             <p class="asagiok"> ▼</p>
             </div>

  <div v-for="product in productsTemp" v-bind:key="product">
      <div class="itemlist">
      <div :id="product.id" :class="div1">
           
       <div class="image">
           
           <img :class="div2" :src="product.imagesrc"  @mouseover="product.imagesrc=product.image2" @mouseleave="product.imagesrc=product.image">
           <div :class="div3" @mouseover="product.imagesrc=product.image2" @mouseleave="product.imagesrc=product.image">
               <div class="satinalbuton">
                   <p class="mt-3">SEPETE EKLE</p>
                   </div>
               </div>
           </div>
           <div :class="div4">
           <p :class="div5">BEDAYZ</p>
           <p :class="div6">{{product.name}}</p>
           <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
           <p :class="div7">{{product.price}}TL</p>
           <div :class="div8">
             <p class="mt-3">SEPETE EKLE</p>
             </div>
            </div>
    </div>
  
    </div>
  </div>
</div>
</div>
  
</template>

<script>
export default {
  data () {
    return {
        hover:false,
        div1:'div1t1',
        div2:'div2t1',
        div3:'div3t1',
        div4:'div4t1',
        div5:'div5t1',
        div6:'div6t1',
        div7:'div7t1',
        sirala:"varsayilan",
        goster:"15",
        div8:'div8t1',
        productsTemp:[{
          id: '1',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '2',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },
        {
         id: '3',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
        {
         id: '4',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        }
       
        ],
        productsVS: [
        {
          id: '1',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '2',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },
        {
         id: '3',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
           {
         id: '4',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        }
       
        
        ],
      productsUAAZ: [
        {
          id: '1',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '2',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },
        {
         id: '3',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
        {
         id: '4',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        }
       
        
        ],
        productsUAZA: [
        
   
        {
         id: '1',
          name: 'HOPE HOODIE ',
          price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        }, 
         {id: '2',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
         {
           id: '3',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },{
        id: '4',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        }
       
        
        ],
        productsUP: [
        {
          id: '1',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '2',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },{
        id: '3',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        },
        {
         id: '4',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },

        ],
        productsPU: [
            {
         id: '1',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
            {
         id: '2',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        },
        {
          id: '3',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '4',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        }
      
      
       
        
        ]
    
    }
  },
  methods:{
    kucukliste(){
        this.div1='div1t1'
        this.div2='div2t1'
        this.div3='div3t1'
        this.div4='div4t1' 
        this.div5='div5t1' 
        this.div6='div6t1' 
        this.div7='div7t1' 
        this.div8='div8t1' 
    },
    ortaliste(){
      this.div1='div1t2'
      this.div2='div2t2'
      this.div3='div3t2'
      this.div4='div4t1' 
      this.div5='div5t1' 
      this.div6='div6t1' 
      this.div7='div7t1' 
      this.div8='div8t1' 

    },
    buyukliste(){
      this.div1='div1t3'
      this.div2='div2t3'
      this.div3='div3t3'
      this.div4='div4t2' 
      this.div5='div5t2' 
      this.div6='div6t2' 
      this.div7='div7t2' 
      this.div8='div8t2' 
      

    }
    ,siralaF(){
      if(this.sirala=='varsayilan'){
       this.productsTemp=this.productsVS;
      }
      if(this.sirala=="urunadiaz"){
        this.productsTemp=this.productsUAAZ;
      }
       if(this.sirala=="urunadiza"){
        this.productsTemp=this.productsUAZA;
      }
       if(this.sirala=="urunup"){
        this.productsTemp=this.productsUP;
      }
       if(this.sirala=='urunpu'){
        this.productsTemp=this.productsPU;
      }
    
    }
  }
  

  
}
</script>

<style scoped>
.itemshow{
  margin-left:150px;
  margin-top:30px;
}
.div6t1{
    font-family:'Barlow',sans-serif;
    font-weight: 400;
    font-size:15px;
    line-height:24px;
    color:black;
    
}
.div7t1{
     font-family:'Barlow',sans-serif;
    font-weight: 600;
    font-size:16px;
    line-height:26px;
    color:black;
    margin-top:-10px;
}
.itemlist{
    width:1200px;
    height:0px;
    
}
.div1t1{
    height:450px;
    width:270px;
    margin-left:30px;
    float:left;
    margin-top:20px;
    
}

.div1t2{
   height:900px;
    width:550px;
    margin-left:30px;
    float:left;
    margin-top:20px;
}
.div2t1{
    height:370px;
    width:265px;  
    z-index:1;
    position:relative; 
    

}
.div2t2{
    height:746px;
    width:532px;  
    z-index:1;
    position:relative; 
    margin-left:20px;
}

.div3t1{
    height:40px;
    width:265px;
    background-color:#7dbd5d;
    z-index:2;
    position:relative; 
    margin-top:-43px;
    visibility: hidden;
    
}

.div3t2{
    height:40px;
    width:575px;
    background-color:#7dbd5d;
    z-index:2;
    position:relative; 
    margin-top:-43px;
    visibility: hidden;
    
}

.image{
    z-index:1;
    cursor:pointer;
}

.div2t2:hover ~ .div3t2{
    visibility: visible;
    
}

.div2t1:hover ~ .div3t1{
    visibility: visible;
    
}


.div3t1:hover{
    visibility: visible;
    text-decoration: underline;
}

.div3t2:hover{
    visibility: visible;
    text-decoration: underline;
}

.mt-3{
    font-family:'Barlow',sans-serif;
    font-weight: 400;
    font-size:14px;
    line-height:22px;
    color:black;
    text-align:center;
    padding-top:13px;
}
.mt-4{
    font-family:'Barlow',sans-serif;
    font-weight: 400;
    font-size:30px;
    line-height:36px;
    color:black;
    margin-left:20px;
    float:left;
}

.cpanel{
  float:left;
  width:1800px;
}

.icons{
  margin-left:530px;
  padding-top:10px;
  float:left;
}
.icons i{
  margin-left:20px;
  cursor:pointer;
}

.div1t3{
    height:640px;
    width:1140px;
    margin-left:30px;
    float:left;
    margin-top:20px;
}
.div2t3{
    height:640px;
    width:470px;  
    z-index:1;
    position:relative; 
    float:left;
}
.div3t3{
  height:40px;
    width:265px;
    background-color:#7dbd5d;
    z-index:2;
    position:relative; 
    margin-top:-43px;
    visibility: hidden;
    float:left;
    
}
.div4t2{
  float:left;
  margin-top:200px;
  margin-left:50px;
}

.div5t2{
  font-family:'Barlow',sans-serif;
  font-weight: 400;
  font-size:12px;    
  line-height:19px;
  color:black;
}
.div6t2{
  font-family:'Barlow',sans-serif;
  font-weight: 400;
  font-size:25px;    
  line-height:30px;
  color:black;
  margin-top:15px;
  margin-bottom:15px;
  cursor:default;
}

.div6t2:hover{
  color:#7dbd5d;
  text-decoration: underline;

}
.div7t2{
  font-family:'Barlow',sans-serif;
  font-weight: 600;
  font-size:30px;    
  line-height:48px;
  color:#7dbd5d;
  margin-top:70px;
}
.div4t2 i{
  float:left;
  margin-right:5px;
  color:rgb(185, 185, 185);

}
.div8t2{
  height:40px;
    width:265px;
    background-color:#7dbd5d;
    z-index:2;
    position:relative; 
    color:white;
    margin-top:15px;
    
}
.div8t2 p{
  cursor:default;
  color:white;
}
.div8t2:hover{
  text-decoration:underline;
  
}

.div4t1 i{
visibility:hidden;
}
.div5t1{
visibility:hidden;
}

.div8t1{
  visibility:hidden;

}
.sirala{
  float:left;
}

.sirala{
  float:left;
  padding-top:8px;
  margin-left:5px;
  font-family:'Barlow',sans-serif;
  font-weight: 600;
  font-size:13px;  
  line-height:21px;  
  color:black;
  width:160px;
  
}
.mt-5{
  padding-top:8px;
  float:left;
  margin-left:55px;
  font-family:'Barlow',sans-serif;
  font-weight: 400;
  font-size:13px;  
  line-height:21px;  
  color:black;
  
}
.mt-6{
  padding-top:8px;
  float:left;
  margin-left:30px;
  font-family:'Barlow',sans-serif;
  font-weight: 400;
  font-size:13px;  
  line-height:21px;  
  color:black;
  
}
.asagiok{
  text-align:right;
  float:left;
  padding-top:8px;
  color:grey;
}
.adet{
  
  float:left;
  padding-top:8px;
  margin-left:5px;
  font-family:'Barlow',sans-serif;
  font-weight: 600;
  font-size:13px;  
  line-height:21px;  
  color:black;
  width:30px;
  

}
</style>

