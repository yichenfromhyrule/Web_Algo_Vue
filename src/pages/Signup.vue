<template>
  <main-layout>
    
    
    <v-form v-model="valid" @submit.prevent="register">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-row class = "mb-5">
            <h1>
              Sign Up
            </h1>
          </v-row>
          <v-row class = "mb-2">
            <subtitle-1>
              Create Your Account Easy With Less Information.
            </subtitle-1>
          </v-row>
          
          <v-row class = "mb-2">
            <v-text-field
              :rules = "rules"
              label="User Name"
              type="displayName"
              v-model="displayName"
              hide-details="auto"
              clearable
            ></v-text-field>
          </v-row>

          <v-row class = "mb-2">
            <v-text-field
              :rules = "rules"
              label="Email"
              type="email"
              v-model="email"
              hide-details="auto"
              clearable
            ></v-text-field>
          </v-row>
          
          <v-row class = "mb-5">
            <v-text-field
              :rules = "rules"
              label="Password"
              type="password"
              v-model="password"
              hide-details="auto"
              clearable
            ></v-text-field>
          </v-row>

          <v-row>
            <v-btn
            depressed
            color="primary"
            type="submit"
            >
              Sign Up
            </v-btn>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    
    
    
    
    
    
    
  </main-layout>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            displayName: '',
            rules: [
              value => !!value || 'Required'

            ],
        };
    },
    methods: {
        register() {
          const auth = getAuth();
          createUserWithEmailAndPassword(
            auth, this.email, this.password, this.displayName
            )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("Register Successfully", user);
              
            })
            .catch((error) => {
              //const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
            });
          updateProfile(auth.currentUser, {
            displayName: this.displayName
          }).then(() => {
            // Profile updated!
            // ...
            console.log("updated user name!");
      
          }).catch((error) => {
            // An error occurred
            // ...
            const errorMessage = error.message;
            console.log("An error occurred when update user information: ", errorMessage)
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