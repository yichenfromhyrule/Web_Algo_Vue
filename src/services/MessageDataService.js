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
        onValue(ref(db, 'message'), (snap)=>{
            snap.forEach(snapshoot =>{
                messageList.push(snapshoot.val());
                console.log("getAll: ", snapshoot.val());
            })
        })
        return messageList;
    }
    getAllMessage(){
        console.log("MessageDataService getAllMessage() Running......");
        onValue(messagesRef, (snapshot) =>{
            console.log("Snapshot: ", snapshot);
            return snapshot;
        })
        return messagesRef;
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
        db.ref('messages/' + today).set({
            test: "Yichen Test"
        });
    }

}

export default new MessageDataService();