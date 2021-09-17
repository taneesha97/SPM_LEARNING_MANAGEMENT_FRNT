import {useState, useEffect} from 'react';
import { projectFirestore } from "./config";

const useFirestore = (collection) => {
    //Collection of All the file in case need to show in another location.
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy("createdAt", 'desc')
            .onSnapshot((snap) => {
               let document = [];
               snap.forEach(doc => {
                   document.push({...doc.data(), id: doc.id })
               });
               setDocs(document);
            });

        return () => unsub();

    }, [collection])
    return { docs };
}

export default useFirestore;

