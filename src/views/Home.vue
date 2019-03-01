<template>
  <div class="home">
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed dark color="blue">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>
  
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon> 
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon> 
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon right large>email</v-icon> 
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon> 
    </v-btn>
    
  </div>
</template>