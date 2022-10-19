<template>
  <v-container fluid>
      <h1>This vue page will compute the area of rectangle, circle and triangle</h1>
      <br>
      <br>
      <v-text-field name="side" v-model.number= "base" label="Enter the base Rectangle"></v-text-field>
      <v-text-field name="side" v-model.number= "height" label="Enter the height Rectangle"></v-text-field>

      <v-btn @click="doAreaofRectangle">Result</v-btn>
      {{areaOfRectangle}}
      
  </v-container>
</template>

<script setup>
import {ref} from 'vue'

const height=ref(0)
const base=ref(0)

const areaOfRectangle=ref(0)
function doAreaofRectangle(){
  return areaOfRectangle.value=base.value*height.value
}





</script>