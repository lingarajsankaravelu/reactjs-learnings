import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import Classes from "./ErrorModel.Module.css"

const ErrorModel = props => {
    const Modal= (props) => {
       return (<Card className={Classes.modal}>
            <header className={Classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={Classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={Classes.actions}>
                <Button onClick={props.onButtonClick}>Okay</Button>
            </footer>
        </Card>)
    }

    const BackDrop = (props) => {
        return(<div className={Classes.backdrop} onClick={props.onButtonClick}/>)
    }

    return(<React.Fragment>
        {ReactDOM.createPortal(<BackDrop title={"something"} onClick={props.onButtonClick}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onClick={props.onButtonClick}/>, document.getElementById('overlay-root'))}
        </React.Fragment>)
}

export default ErrorModel