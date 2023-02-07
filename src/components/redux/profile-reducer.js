import { usersAPI } from "../../api/api"


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { id: 1, message: 'Hi, How are you?', likeCount: 21 },
    { id: 2, message: 'Its my first post!', likeCount: 25 },
    { id: 3, message: 'Its my second post!', likeCount: 26 }
  ],
  newPostText: 'Hello!',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likeCount: 0
      }

      return{
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
     
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }


    default:
      return state
  }

}



export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const setUserProfile = (profile) => {
  return ( {
    type: 'SET_USER_PROFILE',
    profile: profile

  })
}

export const getUserProfile = (userId) =>(dispatch) => {
  usersAPI.getProfile(userId) .then(response => {
    dispatch (setUserProfile (response.data))
})
}


export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}


export default profileReducer