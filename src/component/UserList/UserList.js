import React from "react";
import Classes from './UserList.Module.css'
import Card from "../UI/Card";

const UserList = (props) => {
    return (<Card className={Classes.users} >
        <ul>
            {props.users.map((user)=>(
                <li key={user.id}>
                    {user.username} ({user.age} years old)
                </li>

            ))}
        </ul>
       </Card>);

}

export default UserList