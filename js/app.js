
// initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyBrc5-k7DLBqBb_Sikwr7gjYuym9DTzePA",
    authDomain: "stickers-center-2019.firebaseapp.com",
    databaseURL: "https://stickers-center-2019.firebaseio.com",
    projectId: "stickers-center-2019",
    storageBucket: "stickers-center-2019.appspot.com",
    messagingSenderId: "561200702492",
    appId: "1:561200702492:web:ab68b68c290064a6"
};
firebase.initialize(firebaseConfig);

const outputHeader = document.querySelector("#stayUpdated");
const inputTextField = document.querySelector("#userEmail");
const submitButton = document.querySelector("#submitEmail");
