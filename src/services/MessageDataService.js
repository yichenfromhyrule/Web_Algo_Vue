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
            snap.forEach(snapshot =>{
                messageList.push(snapshot.val());
                console.log("getAll: ", snapshot.val());
            })
        }, {
            onlyOnce: true // 加上这句就不会重复出现了，但新的留言需要刷新
        })
        console.log("messageList size is: ", messageList.length);
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
        db.ref('messages/' + today).set({
            test: "Yichen Test"
        });
    }

}

export default new MessageDataService();