import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import {Route, NavLink, Routes} from 'react-router-dom'
import Music from './components/Music/Music'
import SettingsNav from './components/SettingsNav/SettingsNav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';





function App (props) {


  return (
    
      <div className = 'app-wrapper'>
        <HeaderContainer  />
        <Nav  />
        <NavLink />
        <div className='app-wrapper-content'>
    
        <Routes>
          <Route path='/dialogs' element = { <DialogsContainer store= {props.store} />}  />
          <Route path='/profile' element = { <ProfileContainer store= {props.store} />}  />  
          <Route path='/users' element={<UsersContainer />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/music' element={<Music/>}  />
          <Route path='/settings' element={<SettingsNav/>}  /> 
          </Routes> 
        </div>
    </div>

   );
}








export default App;
