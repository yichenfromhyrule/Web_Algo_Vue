<template>
  <main-layout>
    
    
    <v-form v-model="valid" @submit.prevent="register">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="5"
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
              prepend-icon="mdi-account"
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
              prepend-icon="mdi-email"
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
              prepend-icon="mdi-key"
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
              updateProfile(user, {
                displayName: this.displayName
              }).then(() => {
                // Profile updated!
                // ...
                console.log("1updated user name!");
      
              }).catch((error) => {
                // An error occurred
                // ...
                const errorMessage = error.message;
                console.log("1An error occurred when update user information: ", errorMessage)
              });
              location.reload();
              this.$router.push('/');
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