<template>
  <div class=mainpage>
    
    <div class="butonlar">
    <v-btn class="componentchange"
      href="/bedayz1"
    >
      BEDAYZ-1
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz2"
    >
      BEDAYZ-2 
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz3"
    >
      BEDAYZ-3
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz4"
    >
      BEDAYZ-4
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz5"
    > 
      BEDAYZ-5
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz6"
    >
      BEDAYZ-6
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz7"
    >
      BEDAYZ-7
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz8"
    >
      BEDAYZ-8
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz9"
    >
      BEDAYZ-9
    </v-btn>
    <v-btn class="componentchange"
      href="/bedayz10"
    >
      BEDAYZ-10
    </v-btn>
    

   
  </div>
   <router-view class="router"></router-view>
  </div>
</template>

<script> 

export default {

}
</script>

<style scoped>
.butonlar{
  margin-top:30px;
  margin-left:150px;
}
.componentchange{
  border-style:solid;
  border-width:2px;
  margin-left:20px;
  border-color:black;
  border-radius:3px;
  height:30px;
  width:100px;
  background-color:red !important;
  color:white !important;
  font-family:Arial, Helvetica, sans-serif;


}
.router{
  margin-top:60px;
}
.numaraisim {
      float:left;
      margin-left:215px;
      margin-right:150px;
      margin-bottom:20px;
      margin-top:20px;
      animation: blinker 8s linear infinite;
      color:black;
      font-size: 30px;
      font-weight: bold;
      font-family: sans-serif;
      }
      @keyframes blinker {  
      70% { opacity: 0; }
      }



</style>  