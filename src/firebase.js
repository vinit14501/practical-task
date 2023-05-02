import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLnW84P3gSL0MhhpQN0Piq1KdQYva-0NE',
  authDomain: 'practical-task-9ce9c.firebaseapp.com',
  projectId: 'practical-task-9ce9c',
  storageBucket: 'practical-task-9ce9c.appspot.com',
  messagingSenderId: '795039764190',
  appId: '1:795039764190:web:10b8cdb4cf859e58cfbc4f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage();
export default app;
