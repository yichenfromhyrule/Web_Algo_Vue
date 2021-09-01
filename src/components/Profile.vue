<template>
  <v-card
    class="d-flex flex-column mx-auto"
    color="#DFE0F2"
    tile
    flat
  >     
    <v-row 
      class="d-flex justify-end"
      no-gutters
    >
      <v-btn
        tile
        color="black"
        icon
        v-on:click="signout"
      >
        <v-icon>{{ logoutIcon }}</v-icon>
      </v-btn>
    </v-row>
    <v-row 
      class = "d-flex justify-center"
      no-gutters
    >
      <v-avatar size="80">
        <img
          alt="user"
          src="https://i.pinimg.com/736x/7e/a5/91/7ea591287583ba3f6504ef9c7b77ee46.jpg"
        >
      </v-avatar>
    </v-row>
    <v-row 
      class = "d-flex justify-center"
      no-gutters
    >
      <h5 class="subtitle-1 black--text">{{uid}}</h5>
    </v-row>
    <v-row 
      class = "d-flex justify-center"
      no-gutters
    >
      <p class="caption black--text">Admin</p>
    </v-row>  
  </v-card>    
</template>

<script>
  import { mdiLogout } from '@mdi/js';
  import { getAuth, signOut } from "firebase/auth";
  
  export default {
    data: () => ({
      logoutIcon: mdiLogout
    }),
    methods:{
      signout(){
        const auth = getAuth();
          signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out Successful");
          }).catch((error) => {
            // An error happened.
            //const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      }
    },
  };
</script>