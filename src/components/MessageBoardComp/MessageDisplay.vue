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
                        >  
                            <v-row no-gutters>
                                <v-col
                                    class="d-flex justify-start text-subtitle-2 align-items-center"
                                >
                                     <div v-if="message.userId === currentUserId">
                                         You - {{message.date}}
                                     </div>
                                     <div v-else>
                                         {{message.userName}} - {{message.date}}
                                     </div>
                                    
                                </v-col>
                            </v-row>
                            <v-row
                               no-gutters 
                            >
                                <v-col>
                                    {{message.content}}
                                </v-col>
                            </v-row>   
                            <v-row
                                no-gutters
                            >
                                <v-col class="d-flex justify-end text-caption">
                                    <div v-if="message.userId === currentUserId">
                                        <v-btn
                                            tile
                                            color="#E8BCD5"
                                            class="white--text"
                                            small
                                            @click="deleteMessage(message.messageId)"
                                        >
                                            Delete
                                            <v-icon size="20">
                                                {{ deleteIcon }}
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                    <div v-else>
                                        
                                    </div>
                                        
                                    <div>
                                        <v-btn
                                            tile
                                            color="#5756B3"
                                            class="ml-5 white--text"
                                            small
                                            
                                        >
                                            Reply
                                            <v-icon size="15">
                                                {{ replyIcon }}
                                            </v-icon>
                                        </v-btn>
                                    </div> 
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
import { getAuth } from "firebase/auth";
export default {
    
    data(){
        return{
            messages: [],
            currentIndex: 0,
            currentUserId: null,
            deleteIcon: mdiDeleteForever ,
            replyIcon: mdiMessageReplyText,
        };
    },
    methods: {
        deleteMessage(messageId){
            MessageDataService.deleteOneMessage(messageId);
        }
        
    },
    mounted(){
        
        this.messages = [];
        console.log("MessageDisplay mounted() Loading ......");
        const allMessages = MessageDataService.getAll();
        console.log("allM: ", allMessages);
        this.messages = allMessages;
    },
    updated(){
        console.log("MessageDisplay updated() Loading ......");
        const auth = getAuth();
        const user = auth.currentUser;
        this.currentUserId = user.uid;
        
    },
    

    
    
}
</script>
