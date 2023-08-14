
import { initializeApp } from "firebase/app";
import {getfirestone} from '@firebase/firestone'

const firebaseConfig = {
apiKey: "AIzaSyC648d1vBvChN1KYaXDG1VgxykxbWEq7_o",
authDomain: "bdrestaurante1308.firebaseapp.com",
projectId: "bdrestaurante1308",
storageBucket: "bdrestaurante1308.appspot.com",
messagingSenderId: "120337025658",
appId: "1:120337025658:web:1892e0460c01e4fcffc9c3",
measurementId: "G-T1J52JBWPC"
};


const app = initializeApp(firebaseConfig);
export const db = getfirestone (app)