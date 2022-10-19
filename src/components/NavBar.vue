<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Diaz </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
           { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/Calculator' },
           { title: 'String Manipulation', icon: 'mdi-code-string', path: '/Stringmanipulation' },
           { title: 'About Vuetify', icon: 'mdi-school', path: '/About'},
           { title: 'About Composition API', icon: 'mdi-school', path: '/Aboutt'},
           { title: 'Compute Area', icon: 'mdi-calculator-variant', path: '/Area'},
           { title: 'Quiz', icon: 'mdi-calculator-variant', path: '/Quiz'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>