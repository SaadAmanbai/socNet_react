import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import s from "./Messages.module.css";



const Messages = (props) => {


    let dialogsElements = 
        props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = 
        props.state.messages.map (m => <MessageItem message={m.message} />)
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages;