import React from 'react'
import { Redirect } from 'react-router'
import {sendMessageCreator, updateNewMessageBody } from '../redux/dialogs-reducer'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'



const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements =  state.dialogs.map (d => <DialogItem name= {d.name} key={d.id} id= {d.id} />  )
    let messagesElements = state.messages.map (m => <Message message={m.message} key={m.id}/> )
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)

    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
  

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            <img src="https://st4.depositphotos.com/1000410/19911/v/450/depositphotos_199115294-stock-illustration-cartoon-character-of-pig-winking.jpg" alt='img' />
           
            {dialogsElements}
        </div>
           

        <div className={s.messages}>
           
          <div> {messagesElements} </div>

          <div className={s.sendM}>
           <div> <textarea value={newMessageBody} 
                           onChange={onNewMessageChange}
                           placeholder='Enter your message'></textarea> </div>
           <div> <button onClick={ onSendMessageClick }>Send</button>   </div>
            </div>
            


            
            </div>
            </div>

    )
}






export default Dialogs