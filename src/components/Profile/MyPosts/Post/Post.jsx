import React from 'react'
import s from './Post.module.css'


const Post = (props) => {

    console.log (props.message)

    return (
        <div className={s.item}>
            <img src="https://static.vecteezy.com/system/resources/previews/003/641/174/original/pig-cartoon-cute-swine-illustration-free-vector.jpg" />
            {props.message}
            <div>
                <span>like </span>
                {props.likeCount}
            </div>
        </div>

    )
}

export default Post