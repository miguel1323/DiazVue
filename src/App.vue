<template>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>
<script>
   export default {
     data() {
       return {
         num1: 0,
         num2: 0,
         operand:""
       };
     },
   }
</script>
<script setup>
  import Navbar from '@/components/NavBar.vue';
  
</script>
