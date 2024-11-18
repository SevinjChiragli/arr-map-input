import { useState } from "react";
import "./App.css";
import data from ".//data/data.js";

function App() {
  let [arr, setArr] = useState(data);
  let [myArr, setMyArr] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const handleAddUser=(ev)=>{
    let newUser={ ...myArr, id: arr.length + 1 };
    const newArr = [...arr];
    newArr.push(newUser)
    setArr(newArr)
   
  }
  return (
    <>
      <h1>Add new person</h1>
      <input type="text" name="name" />
      <input type="text" name="username" />
      <input type="email" name="email" />
      <button onClick={handleAddUser}>ADD</button>

      <ul>
        {arr.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
