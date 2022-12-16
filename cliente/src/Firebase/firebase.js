import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_7Zs2qk8gRVsMzE0T-tVl2DBETSF8gtM",
  authDomain: "cub-react.firebaseapp.com",
  databaseURL: "https://cub-react-default-rtdb.firebaseio.com",
  projectId: "cub-react",
  storageBucket: "cub-react.appspot.com",
  messagingSenderId: "34529145591",
  appId: "1:34529145591:web:7063a8d4eef310498819f2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
