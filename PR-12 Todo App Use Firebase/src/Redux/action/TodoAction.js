import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore} from 'firebase/firestore'
import { app } from '../../firebaseConfig'



const db = getFirestore(app)
export const Add_todo = (todo) =>{
    return async(dispatch) =>{
        try {
             await  addDoc(collection(db,'Todos'),{
                list:todo.list
            })
            dispatch({
                type:'ADD_TODO',
                payload:todo
            })

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const View_todo = () =>{
    return async(dispatch) =>{
        try {
           
            let list = collection(db,'Todos');
            let gettodos = await getDocs(list)
            const todosArray = gettodos.docs.map(val => ({
                id: val.id,
                ...val.data()
            }))
            dispatch({
                type:'VIEW_TODO',
                payload:todosArray
            })
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

// TodoAction.js

export const Clear_all_todos = () => {
    return {
      type: 'CLEAR_ALL_TODOS',
    };
  };
  

export const Delete_todo =(id) =>{
    return async(dispatch) =>{
        try {
                let list = await doc(db,'Todos',id);
                await deleteDoc(list)
                dispatch({
                    type:'DELETE_TODO',
                    payload:id
                })
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}