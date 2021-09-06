<template>
    <div>
        <v-card flat>
            <p>MessageBoard</p>
            <v-form
                ref="form"
                @submit.prevent="submit"
            >
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                v-model="content"
                                color="teal"
                            >
                                <template v-slot:label>
                                    <div>
                                        Message <small>(optional)</small>
                                    </div>
                                </template>
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-btn
                                color="success"
                                class="mr-4"
                                @click="saveMessage"
                            >
                                Submit
                            </v-btn>
                        </v-col>
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
      const defaultForm = Object.freeze({
        bio: '',
      })

      return {
        form: Object.assign({}, defaultForm),
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
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
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