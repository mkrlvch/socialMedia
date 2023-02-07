const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hello! How are you?' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'OK!' },
        { id: 4, message: 'letter' },
        { id: 5, message: 'See you' },
        { id: 6, message: 'Keep and touch' }
    ],
    dialogs: [
        { id: 1, name: 'Piggy' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Denis' },
        { id: 4, name: 'Oleg' },
        { id: 5, name: 'Mariia' },
        { id: 6, name: 'Vlad' }
    ],

    newMessageBody: ''

}


const dialogsReducer = (state=initialState, action) => {



    switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 

        return {
            ...state,
            newMessageBody: action.body
        }
    
    
        case SEND_MESSAGE: 
            let body = state.newMessageBody

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }
            
        default: 
         return state   
    }

}


export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE'
    }
  }

  export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    }
  }


export default dialogsReducer