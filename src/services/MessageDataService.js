import { getDatabase, ref, set, onValue } from "firebase/database";
const db = getDatabase();
const messageDatabase = ref(db, 'message/');

class MessageDataService {
    getAll() {
        return messageDatabase.size;
    }
    create(message, user) {
        var size = 0
        onValue(ref(db, 'message/'), (snapshot) =>{
            size = snapshot.size
        })
        console.log("We have ",size, " messages in the database.");

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        set(ref(db, 'message/' + (size + 1)),{
            userName: user.displayName,
            message: message,
            date: today,
        })
    }

}

export default new MessageDataService();