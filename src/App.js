import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {db} from './firbase.config'
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';

function App() {
  //get collection of firebase
  const usersCollectionRef = collection(db,"users");


  const [users, setUsers] = useState([]);
  const [userState, setUserState] = useState({
    newName:'',
    newSex :"",
    age:0
  });


  
  
const handleChanges = (e)=>{
  const {name,value} = e.target;
  setUserState({
    ...userState,
    [name]:value
  })

}
//we can create this function in useEffect too
const getUsers = async ()=>{
  const data = await getDocs(usersCollectionRef);
  setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))  
};

const addUser = async()=>{
  await addDoc(usersCollectionRef,{name:userState.newName,age:Number(userState.newAge),sex:userState.sex})

}
const updateUser = async(id,age)=>{
  const userDoc = doc(db,"users",id);//doc is used to get document depending on id
  const newFields = {
    age:age +1
  }

  await updateDoc(userDoc,newFields)
   
}
const deleteUser = async(id)=>{
  const del = doc(db,"users",id);
  await deleteDoc(del);

}
  useEffect(()=>{

    
    getUsers();

    console.log(users)
  },[userState.age]);
  return (
    <div className="App">
      <div>
        <input placeholder = "name..." name="newName"   onChange = {handleChanges}/> <br />
        <input type = "number" placeholder = "age" name= "newAge"  onChange ={handleChanges} /> <br />
        <input  placeholder = "sex" name="sex" onChange = {handleChanges} /> <br />
        <button onClick = {addUser}> Add User</button>
      </div>

      {users.map((user)=>(
        
          <div key = {user.id}>
          <p>
          Id: {user.id}
        </p>
        <p>
          Name: {user.name}
        </p>
        <p>
          Age: {user.age}
        </p>
        <p>
          Sex: {user.sex}
        </p>
        <button onClick = {()=>{updateUser(user.id,user.age)}}>increase age</button>
        <button onClick = {()=>{deleteUser(user.id)}}>delete</button>
        </div>
        
        
      ))}
      
      
    </div>
  );
}

export default App;
