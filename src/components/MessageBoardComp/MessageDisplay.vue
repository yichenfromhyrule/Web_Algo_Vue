<template>
    
    <div>
        <h1>Message Board</h1>
        <v-btn
            color="success"
            class="mr-4"
            
        >
            Refresh
        </v-btn>
        <ul class="list-group">
            <li
                v-for="m in messages"
                :key="m.content"
            >
                {{m.content}}
            </li>
        </ul>
        
    </div>
</template>

<script>
import MessageDataService from "../../services/MessageDataService";
//import {ref} from 'vue';

export default {
    
    data(){
        return{
            messages: []
        }
    },
    methods: {
        
    },
    
    mounted() {
        this.messages = MessageDataService.getAll();
    },
    
    beforeDestroy() {
        this.messages = MessageDataService.getAll();
        
    },
}
</script>
