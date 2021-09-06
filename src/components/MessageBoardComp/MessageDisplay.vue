<template>
    
    <div>
        <h1>Message Board</h1>
        <v-btn
            color="success"
            class="mr-4"
            @click="mounted"
        >
            Refresh
        </v-btn>
    </div>
</template>

<script>
import MessageDataService from "../../services/MessageDataService";

export default {
    methods: {
        mounted() {
            const a = MessageDataService.getAll();
            console.log(a);
        }
    }
}
</script>
