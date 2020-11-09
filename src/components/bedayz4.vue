<template>
<div>
  <div id="uyegiris">
    <div class="tercih">
      <div class="tercihtab">
    <v-tabs 
          v-model="tabs"
          align-with-title
        >
          <v-tab href="#one" class="tercihbuton">
            
            <p>Oturum aç</p>
          </v-tab>
          <v-tab href="#two" class="tercihbuton">
            Kayıt ol
          </v-tab>
          <v-tab href="#three" class="tercihbuton">
            Misafir
          </v-tab>
          <v-tabs-slider color="pink"></v-tabs-slider>
        </v-tabs>
      </div>
      <div class="uyegiris">
        <p> E-posta ile oturum aç </p>
        <v-row class="inputs">
          
          
        
          <v-text-field class="inputtext"
          
            label="Mail"
            outlined
            dense
            
          ></v-text-field>

          <v-text-field class="inputtext"          
            label="Şifre"
            :type="show1 ? 'text' : 'password'"
            outlined
            dense
          ></v-text-field>

        <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      DEVAM
    </v-btn>
        
        </v-row >

        <v-row class="altSekme">
          <v-col
          cols="6"
          sm="6">
<a href="url"><p class="parolaUnuttum">Parolamı unuttum</p></a>
          </v-col>

           <v-col
          cols="6"
          sm="6">
<a href="url"><p class="hesapOlustur">Hesap oluştur</p></a>
          </v-col>


        </v-row >
        
        </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>

<style scoped>
.tercihbuton{
  font-family:"Open Sans", sans-serif !important;
  font-size:16px !important;
  line-height:23px !important;
  color:#6e7a93 !important;
  font-weight: 500 !important;
  text-transform:none !important;
  width:153.3px;
  
}
.tercihtab{
  border-bottom-style:solid;
  border-bottom-color:rgb(199, 199, 199);
  border-bottom-width:1px;
}
 
  

.tercihbuton:active{
  border-bottom-style: solid;
  border-bottom-color:black;
  border-bottom-width:3px;
}
.tercih{
  width:460px;
  height:350px;
  box-shadow: 8px 8px 8px rgb(190, 190, 190);
  border-radius:5px;
  
}
.inputs{
 
  width:430px;
  margin-left:15px;
  margin-top:40px;
}
.uyegiris p{
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-size:21px;
  line-height: 20px;
  color:#333333;
  font-weight:400;
  text-align:center;
  margin-top:20px;
}

.ma-2{
  background-color:#6e7a93 !important;
  color: #ffffff !important;
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:28px;
  width:430px;
  

}

.inputtext{
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:13px;
  line-height:20px;
  width:100%;
  color:#333333;
}
.altSekme{
  max-width:430px;
  margin-left:15px;
  border-top-style:solid;
  border-top-color:rgb(199, 199, 199);
  border-top-width:1px;
  margin-top:10px;
  

}
.altSekme p{
  font-family:"Open Sans", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:12px;
  line-height:20px;
  color:#333333;
  margin-top:-5px;
 
}
.hesapOlustur{
  text-align:right !important;
  margin-right:-10px !important;
  
}
.parolaUnuttum{
  text-align:left !important;
  margin-left:-10px !important;
 
}

.altSekme a{
   text-decoration: none;
}
#uyegiris{
  margin-left:550px;
}
</style>