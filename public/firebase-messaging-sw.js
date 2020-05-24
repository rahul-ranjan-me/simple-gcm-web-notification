importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-messaging.js')

const config = {};

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
