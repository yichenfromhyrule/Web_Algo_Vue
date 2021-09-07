<template>
  <div>
    <v-card class="mb-10" color="transparent" flat>
      <v-form
        ref="form"
        @submit.prevent="submit"
      >
        <v-container fluid>
          <v-row>
            <v-textarea
              solo
              v-model="content"
              label="What do you want to say?"
              flat
            >
            </v-textarea>
          </v-row>
          <v-row class="d-flex justify-end">
            <v-btn
              color="success"
              @click="saveMessage"
            >
              Post
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
  import MessageDataService from "../../services/MessageDataService";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  

  export default {
      
    data () {
      return {
        rules: { 
        },
        message: "",
      }
    },
    created(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    computed: {
    },

    methods: {
      saveMessage(){
          const auth = getAuth();
          const user = auth.currentUser;
          const uid = user.uid;
          var content = this.content;
          MessageDataService.create(content, user)
            .then(()=>{
                console.log(uid, "Submit message successfully!");
            })
            .catch(e=>{
                console.log(e);
            })
      }
    },
  }
</script>