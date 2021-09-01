<template>
  <v-card
    class="d-flex flex-column mx-auto pt-2 pb-2"
    color="#DFE0F2"
    height="227"
    tile
    flat
  > 
    <v-form v-model="valid" @submit.prevent="register">   
      <v-container>
        <v-row 
          class = "d-flex justify-center register_input mb-4"
          no-gutters
        >
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            solo
            clearable
          >
          </v-text-field>
        </v-row>
        <v-row 
          class = "d-flex justify-center register_input mb-4"
          no-gutters
        >
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            solo
            clearable
          >
          </v-text-field>
        </v-row>
        <v-row 
          class = "d-flex justify-center register_input mb-4"
          no-gutters
        >
          <v-btn
            depressed
            color="primary"
            type="submit"
          >
            Create An Account
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-card>    
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("Register Successfully", user)
            })
            .catch((error) => {
              //const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
            
        },
    },
};
</script>
<style>
.register_input{
    max-height: 60px !important;
    margin: 5px 12px !important;
}
</style>