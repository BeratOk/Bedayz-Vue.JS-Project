<template>
  <div>
    <div class="hesapolustur">
      <p class="kayitol">Kayıt ol</p>
      <p class="HesapOlustur">Hesap Oluştur</p>
      <p class="kayitol">Eğer daha önce kayıt olduysanız, lütfen oturum açma sayfasına gidiniz.</p>
      <p class="kayitol">Üyelik Bilgileri</p>

      <div class=form>
  <v-form>
   <p class="kayitol"><span style="color: #ff0000;">*</span>Ad</p><p ></p>
  <input v-model="message" placeholder="Ad" class="input">
   <p class="kayitol"><span style="color: #ff0000;">*</span>Soyad</p><p ></p>
  <input v-model="message" placeholder="Soyad" class="input">
   <p class="kayitol"><span style="color: #ff0000;">*</span>E-Posta</p><p ></p>
  <input v-model="message" type="email" placeholder="E-Posta" font-size="5px" class="input">
   <p class="kayitol"><span style="color: #ff0000;">*</span>Telefon</p><p ></p>
  <input v-model="message" type="number" placeholder="Telefon" class="input">
       
  </v-form>
  </div>
   <p class="kayitol">Parolanız</p>
    <div class=form>
  <v-form>
   <p class="kayitol"><span style="color: #ff0000;">*</span>Ad</p><p ></p>
  <input v-model="message" type="password" placeholder="Şifre" class="input">
   <p class="kayitol"><span style="color: #ff0000;">*</span>Soyad</p><p ></p>
  <input v-model="message" type="password"  placeholder="Şifre Onayla" class="input">  
  </v-form>
  </div>
  <p class="kayitol">Bülten Aboneliği</p>
  <div class=form>
    <p class="kayitol">Bülten Aboneliği</p>
    <v-radio-group
      v-model="row"
      row
    >
      <v-radio
        label="Evet"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Hayır"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
    </div>
    <div class="butondiv">
     <a href="#" class="gizlilikdek"><p class="gizlilikdek1">Gizlilik İlkeleri`i okudum ve onaylıyorum</p></a><input type="checkbox" id="checkbox" class="leftfloat" v-model="checked">
 <v-btn class="ma-2"
      depressed
      color="primary"
    >
      DEVAM
    </v-btn>
      </div>
  </div>
   </div>
</template>
<script>


export default {
  
 
}
</script>
<style scoped>
.butondiv{
 margin-left:480px;
}

.gizlilikdek1{
  float:left;
  margin-right:20px;
    font-family:"Barlow",sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:24px;
  color:#000000;
}
.gizlilikdek1:hover{
color:green;
text-decoration: underline;
}
.input{
  border-width:1px;
  border-style:solid;
  border-color:#e6e6e6;
  background-color:#e6e6e6;
  width:100%;
  height:38px;

}

input::placeholder{
  font-family:"Barlow",sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:14px;
  line-height:21px;
  color:#495057;
  padding-left:30px;
}


.form{
  width:700px;
  margin-left:30px;
}
.hesapolustur{
  width:930px;
  height:960px;
  margin-left:180px;
  
}
.kayitol{
  font-family:"Barlow",sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:24px;
  color:#000000;
  margin-top:20px;
}
.hesapolustur{
  font-family:"Barlow",sans-serif;
  font-style:normal;
  font-weight:500;
  font-size:24px;
  line-height:29px;
  color:#000000;

}
.leftfloat{
  float:left;
  margin-right:20px;
    font-family:"Barlow",sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:15px;
  line-height:24px;
  color:#000000;

}

.ma-2{
  background-color:#7dbd5d !important;
  color: #ffffff !important;
  font-family:"Barlow", sans-serif;
  font-style:normal;
  font-weight:400;
  font-size:16px;
  line-height:24px;
  float:left;
  border-radius:0px !important;
  height:50px !important;
  margin-top:-20px;
  width:120px !important;
  

}
</style>