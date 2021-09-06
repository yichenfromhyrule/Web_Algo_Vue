import { getDatabase, ref, set, onValue} from "firebase/database";

const db = getDatabase();
const messagesRef = ref(db, 'message/');
var numMessage = 0
onValue(messagesRef, (snapshot) =>{
    numMessage = snapshot.size;
    console.log("numMessage = ", numMessage);
})
class MessageDataService {
    getAll() {
        console.log("MessageDataService getAll() Running......")
        console.log("numMessage = ", numMessage);
        const messageList = new Array();
        for (let i = 1; i < numMessage + 1; i++) {
            onValue(ref(db, 'message/' + i), (snapshot) =>{
                var message_detail = snapshot.val();
                messageList.push(message_detail);
                console.log("Services:", message_detail);
            })
          } 
        return messageList;
    }
    create(content, user) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        set(ref(db, 'message/' + (numMessage + 1)),{
            userName: user.displayName,
            userId: user.uid,
            content: content,
            date: today,
        })
    }

}

export default new MessageDataService();