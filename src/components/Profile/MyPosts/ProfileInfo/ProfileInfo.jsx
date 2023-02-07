import React from 'react'
import Prelouder from '../../../Common/Prelouder/Prelouder'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
     if (!props.profile) {
        return <Prelouder/>
     }

    return (
        <div>
            <div>
                <img src='https://img.freepik.com/premium-photo/pastel-sky-beautiful-background-romantic-background-dreamy-background_130147-1292.jpg' alt='img' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava" />
            </div>
        </div>


    )
}




export default ProfileInfo