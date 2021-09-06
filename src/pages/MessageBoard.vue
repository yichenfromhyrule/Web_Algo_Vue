<template>
    <div>
        <div v-if="user">
            <MessagePublish />
        </div>
        <div v-else>
            <p>You should log in to publish</p>
        </div>
        <MessageDisplay />
    </div>
</template>

<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import MessageDisplay from "../components/MessageBoardComp/MessageDisplay.vue";
    import MessagePublish from "../components/MessageBoardComp/MessagePublish.vue";

    export default {
        components: {
            MessageDisplay,
            MessagePublish,
        },
        data: () => ({
            user: null
        }),
        created(){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user = user;
                    console.log("User Logged In: ", user);
                } else {
                    this.user = null;
                    console.log("No User");
                }
            });
        },
        computed: {
        },

        methods: {
        
        },
  }
</script>