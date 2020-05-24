importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-messaging.js')

const config = {
    apiKey: "AIzaSyA4k2W2tQ5o6qRConhckT628KtTAgYUUUE",
    authDomain: "localhostproject-e2bae.firebaseapp.com",
    databaseURL: "https://localhostproject-e2bae.firebaseio.com",
    projectId: "localhostproject-e2bae",
    storageBucket: "localhostproject-e2bae.appspot.com",
    messagingSenderId: "465971440810",
    appId: "1:465971440810:web:33ef55b58fd01dc6cc34d3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler((payload) => {
    const title = 'Hello World'
    const options = {
        body: payload.data.status
    }
    return self.registration.showNotification(title, options);
})