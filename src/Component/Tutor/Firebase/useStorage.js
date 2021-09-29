import { useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from './config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // ref
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');


        storageRef.put(file).on('state_changed',(snap)=> {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            //Here add the meta data for the images.
            await collectionRef.add({url, createdAt, name: file.name, type: file.type}) //Remove Await if not working.
            setUrl(url);
        });
    }, [file])

    return {progress, url, error}
}

/**
 * To send the meta data to the image file send them to the useStorage hook as
 * separate data or fetch it from the image itself, this metadata can be used to show
 *  in the table when displaying.**/

export default useStorage;
