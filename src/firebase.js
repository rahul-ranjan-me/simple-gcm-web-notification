// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

const config = {

};

const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    const messaging = firebase.messaging()
    messaging.requestPermission()
        .then(() => {
            console.log('have permission')
            return messaging.getToken();
        })
        .then((token) => {
            console.log(token)
        })
        .catch((error) => {
            console.log(error)
        })
    
    messaging.onMessage((payload) => {
        console.log('onMessage ', payload)
    })
}

export default initFirebase
