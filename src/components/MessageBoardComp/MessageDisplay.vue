<template>
    <div>
        <v-card class = "px-2" flat>
            <v-row
            >
                <v-col class="d-flex justify-center">
                    Discussion Board
                </v-col>
            </v-row>   
            <v-list two-line>
                <v-list-item-group
                >
                    <template
                        v-for="(message,index) in messages"
                    >
                        <v-card 
                            :key="message.content"
                            class = "py-2 px-4"
                            outlined
                            flat
                            no-gutters
                        >  
                            <v-row no-gutters>
                                <v-col
                                    cols="12"
                                    sm="7"
                                    class="d-flex justify-start text-caption align-items-center"
                                >
                                <div class="align-items-center">
                                    {{message.userName}} - {{message.date}}
                                </div>
                                
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="5"
                                    class="d-flex justify-end text-caption"
                                >
                                    <v-btn
                                        tile
                                        color="black"
                                        icon
                                        
                                    >
                                        <v-icon size="15">{{ replyIcon }}</v-icon>
                                    </v-btn>
                                    <v-btn
                                        tile
                                        color="black"
                                        icon
                                        
                                    >
                                        <v-icon size="20">{{ deleteIcon }}</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row
                                no-gutters
                            >
                                <v-col>
                                    {{message.content}}
                                </v-col>
                            </v-row>   
                            
                        </v-card>
                        <v-divider
                            v-if="index < messages.length -1"
                            :key="index"
                            class="my-1"
                            color="transparent"
                        >

                        </v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-card>      
    </div>
</template>

<style>
.theme--light.v-divider {
    border-color: transparent;
}
</style>

<script>
import MessageDataService from "../../services/MessageDataService";
import { mdiDeleteForever , mdiMessageReplyText } from '@mdi/js';

export default {
    
    data(){
        return{
            messages: [],
            currentIndex: 0,
            allM: [],
            deleteIcon: mdiDeleteForever ,
            replyIcon: mdiMessageReplyText,
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
