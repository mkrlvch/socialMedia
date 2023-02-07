import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";
import thunkMiddleware  from "redux-thunk";



let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReduser,
    auth: authReduser
})


let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store