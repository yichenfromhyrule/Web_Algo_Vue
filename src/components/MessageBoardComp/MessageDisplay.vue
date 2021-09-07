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
                v-for="m in allM"
                :key="m.content"
            >
                {{m.date}}
            </li>
        </ul>
        <p>haha</p>
        
    </div>
</template>

<script>
import MessageDataService from "../../services/MessageDataService";
//import { onValue} from "firebase/database";

export default {
    
    data(){
        return{
            messages: [],
            currentIndex: 0,
            allM: [],
        };
    },
    methods: {
        
    },
    created(){
        console.log("MessageDisplay created() Loading ......");
        const allM = MessageDataService.getAll();
        this.allM = allM;
    },
    

    
    
}
</script>
