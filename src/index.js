import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, getDocs, query, where } from "firebase/firestore"; // ojo no usar: 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAwzVnQ7Yf6f4FRIuzMgFvWYN3JB2flejY",
    authDomain: "prueba-cd23c.firebaseapp.com",
    databaseURL: "https://prueba-cd23c.firebaseio.com",
    projectId: "prueba-cd23c",
    storageBucket: "prueba-cd23c.appspot.com",
    messagingSenderId: "968172906338",
    appId: "1:968172906338:web:431e2e5eb64f57594e6e3b"
};

const bodFirebase = ()=>{
    console.log("aca");
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const list = getData(db);   // retorna promesa con resultado de operacion
    // list
    // .then(response=>{
    //     console.log(response)
    // })
    // .catch(error=>console.log(error))
    subscription(db);
}

function subscription(db){
    // const q = query(collection(db, "micoleccion"), where("capital", "==", true));
    onSnapshot(query(collection(db, "micoleccion"),where("nombre","==","Daniel")),(snapshot)=>{
        let elementos = snapshot.docs.map(doc => {return doc.data()});
        console.log(elementos);
    });
}

async function getData(db) {
    const coleccion = collection(db, 'micoleccion');
    const dataSnapshot = await getDocs(coleccion);
    const list = dataSnapshot.docs.map(doc => doc.data());
    return list;
}


const main = ()=>{
    console.log("hola");
    bodFirebase();
}

main();

export default main;