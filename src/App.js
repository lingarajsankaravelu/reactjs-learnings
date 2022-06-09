import React, {useState} from 'react';
import AddUser from "./component/User/AddUser";
import UserList from "./component/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserData = (newData) => {
    setUsers((prevData) => {
      return [...prevData,newData];
    })
  }
  return (
    <div>
    <AddUser CallBackAddNewUser={addUserData}/>
      {users.length>0 &&  <UserList users={users}/>}

    </div>
  );
}

export default App;
