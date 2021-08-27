<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Binary Search</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <v-card elevation="2" class="mx-auto" outlined>
            <v-card-text 
                class="body-1"
                style="color: #283593;"
            >
                <div>
                    Search a sorted array by repeatedly dividing the search interval in half.
                    <br>
                    Begin with an interval covering the whole array. 
                    <br>
                    If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
                    <br>
                    Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.</div>
            </v-card-text>
        </v-card>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  };
</script>

<style>
element.style {
    padding: 0px 0px 0px 0px!important;
}
</style>