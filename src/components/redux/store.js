import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import dialogsReducer from "./dialogs-reducer"



let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are you?', likeCount: 21 },
                { id: 2, message: 'Its my first post!', likeCount: 25 },
                { id: 3, message: 'Its my second post!', likeCount: 26 }
            ],
            newPostText: 'Hello!'
        },
        dialogsPage: {
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

        },
        sidebar: {

        },

    },
    _rerenderEntireTree() {
        console.log('state changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)



        this._rerenderEntireTree(this._state)


  }
}








export default store;
window.store = store;