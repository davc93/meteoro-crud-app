import {getFirestore,collection, getDocs, doc} from 'firebase/firestore'
export class Firestore{
    public constructor(){}
    async getDocuments(myCollection:string){
        const firestore = getFirestore();
        const data = collection(firestore,myCollection);
        return await getDocs(data);
    }
    async getDocument(collection:string,){
        //
        const firestore = getFirestore();
        
    }
    addDocument(){
        
    }
}