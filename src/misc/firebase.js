  
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCEA828CT0m_XKuSKiK8Sp_V2WfAiXmi7A",
  authDomain: "fun-chat-4a1d7.firebaseapp.com",
  databaseURL: "https://fun-chat-4a1d7-default-rtdb.firebaseio.com",
  projectId: "fun-chat-4a1d7",
  storageBucket: "fun-chat-4a1d7.appspot.com",
  messagingSenderId: "328693716107",
  appId: "1:328693716107:web:c06638b0f5972749a4308e",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();