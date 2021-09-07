<template>
    <div>
        <v-card class = "pa-4" flat>
            <v-list two-line>
                <v-list-item-group
                >
                    <template
                        v-for="(message, index) in messages"
                    >
                        <v-list-item :key="message.content">
                            <v-list-item-content>
                                <v-list-item-title v-text="message.content" />
                                <v-list-item-subtitle
                                    class="text--primary"
                                    v-text="message.userName"
                                />
                                <v-list-item-subtitle v-text="message.date" />
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider
                            v-if="index < messages.length -1"
                            :key="index"
                        >

                        </v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-card>      
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
    mounted(){
        this.messages = [];
        console.log("MessageDisplay created() Loading ......");
        const allM = MessageDataService.getAll();
        console.log("allM: ", allM);
        this.allM = allM;
        this.messages = allM;
    },
    

    
    
}
</script>
