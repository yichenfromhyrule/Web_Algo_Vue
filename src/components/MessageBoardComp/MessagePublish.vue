<template>
  <div>
    <v-card class="mb-10" color="#E8BCD5" flat>
      <v-form
        ref="form"
        @submit.prevent="submit"
      >
        <v-container fluid>
          <v-row no-gutters>
            <v-textarea
              class = "mb-0"
              solo
              v-model="content"
              label="What do you want to say?"
              flat
              no-gutters
            >
            </v-textarea>
          </v-row>
          <v-row class="d-flex justify-end" no-gutters>
            <v-btn
              color="#5756B3"
              class="white--text pl-10 pr-10"
              @click="saveMessage"
              no-gutters
            >
              Post
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<style>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important; 
}
</style>

<script>
  import MessageDataService from "../../services/MessageDataService";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  

  export default {
      
    data () {
      return {
        rules: { 
        },
        content: "",
        submitted: false,
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
          console.log("MessagePublish saveMessage loading ......");
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
            });
          
      },
      reloadPage() {
        console.log("MessagePublish reloadPage loading ......");
        window.location.reload();

      },
    },
  }
</script>