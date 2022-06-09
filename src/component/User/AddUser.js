import React, {useState} from "react";
import Card from "../UI/Card";
import Classes from './AddUser.Module.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser =(props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [errorState,setErrorState] = useState([])
    const okayHandler = () => {
        setErrorState([])
    }
    const AddUserHandler =(event)=> {
        event.preventDefault()
        if (age ===0) {
            setErrorState([ "Error!!",
                "Please enter a valid age"])
            return;
        } else  if (name.trim().length === 0){
            setErrorState([
                "Error!!",
                "Please enter a valid username"
            ])

        }else {

            const value ={
                "username":name,
                "age":+age,
                "id":Math.random().toString()
            }
            console.log(value)
            props.CallBackAddNewUser(value)
            setAge(parseInt(" "))
            setName(" ")
            setErrorState([])
        }


    }

    const onInputValueChanged = (event) => {
        if (event.target.id ==='age') {
            setAge(event.target.value)

        }
        else {
            setName(event.target.value)

        }

    }

    return (
        <div>
            { errorState.length>0 && <ErrorModel title={errorState[0]} message={errorState[1]} onButtonClick={okayHandler}/> }
        <Card className={Classes.input}>
        <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={name}  onChange={onInputValueChanged}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"  value={age} onInput={onInputValueChanged}/>
        <Button type="submit">Add User</Button>
         </form>
        </Card>
        </div>
            )

}

export default AddUser