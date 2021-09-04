<template>
  
  <v-card
    class="d-flex flex-column mx-auto pt-2 pb-2"
    color="#DFE0F2"
    height="100%"
    tile
    flat
  > 
    <v-form v-model="valid" @submit.prevent="login">   
      <v-container class="no-padding">
        <v-row 
          class = "d-flex justify-center register_input"
          no-gutters
        >
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            solo
            clearable
            flat
          >
          </v-text-field>
        </v-row>
        <v-row 
          class = "d-flex justify-center register_input"
          no-gutters
        >
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            solo
            clearable
            flat
          >
          </v-text-field>
        </v-row>
        <v-row 
          class = "d-flex justify-end register_tiny_text"
          no-gutters
        >
        <router-link
          style="text-decoration: none;"
          class = "font-italic text-caption indigo--text text--lighten-1"
          to="/hello" 
        >
          Forget the password
        </router-link>
        
        </v-row>
        <v-row 
          class = "d-flex justify-center register_input"
          no-gutters
        >
          <v-btn
            depressed
            color="#5A62B3"
            class = "white--text"
            type="submit"
          >
            Log In
          </v-btn>
        </v-row>

        <v-row 
          class = "d-flex justify-center register_text"
          no-gutters
        >
          <router-link
            style="text-decoration: none;"
            class = "text-subtitle-1 indigo--text text--lighten-1"
            to="/sign-up" 
          >
            Create An Account
          </router-link>
        </v-row>
      </v-container>
    </v-form>
    
  </v-card>  
   
</template>

<script>
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
export default {
    name: 'Register',
    components: {
      
    },
    data() {
        return {
            email: '',
            password: '',
            createNew: false,
        };
    },
    methods: {
        login() {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Log in
              const user = userCredential.user;
              console.log("Log In Successfully", user)
            })
            .catch((error) => {
              //const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
              // ..
            });
            
        },
        switchToCreate(){
          this.createNew = true;
          console.log("createNew = ", this.createNew);
        }
    },
};
</script>
<style>
.register_input{
    max-height: 55px !important;
    margin: 5px 10px !important;
}
.register_tiny_text{
  margin: 0px 10px !important;
}
.no-padding{
  padding: 0 !important;
}
.register_text{
  max-height: 30px !important;
  margin: 0 !important;
  font-size: 14px;
}
</style>