const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FATCHING = 'TOGGLE_IS_FATCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
     users: [
    //     {id: 1, photoUrl: 'data:image/jpeg;base64,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Kaa8eaJ4lbEWMbw4BzSHNIu0tILSORGhWSj2EREUREQEREEOcpREBFIC0WM7X0FKcstQzPcARx/rZi47hkZcg+dlUmYju3i0G0m08dMWwRsM9XLpT08er3E7nP8AgZvJJ4A+BI8ccmMV+kEJw6nO+aqAdVuafw4Bow/veNwVZ9l9k6WgDjEHPlfrPPM7PUTHjmeeHIWHrqmme+bxV4tjNl305fVVT2y1s4HXPHchZvEMPgwWF/EgeCtSIqzCIiAiIgIiICIiAiIgIixc5BJK+VZSxysMcrGSMdo5sjQ5h82nQrNreKzQUqbo1pGuL6SasonEkkUs5ETj+aN9wRyFgvkNl8ajvkxaKUcG1FAwWHN8brnzV6RFi0x2lQhTbRsOrMHmHDI+ojefPMLBYSYjjjN+Dxyc4sShaPk9t10BEd/Lf2oDcfxIDt4LWA8ernhkHoRa6j9KKrjhGK+kTD/mXQERfmv7c/8A0pqeGEYt6wsH+ZHbQYiR2MFrCeHWTwxD5m9vkugIh81/agR1uOybsKgh5z4gx487Rtus2YPtBKDnqsMpr7jTwSzvH/lOW6viI5nJafKjt6Outt7biFfVadpgkFPTu844/wDUrFgezNDRi1NTQxG1szW3kI5yOu4+pW2UOKONhKlYBvErNAREQEREBERAREQEREBERBBKxDbrNEBERAREQEREBERAREQEREEErENus0QEREBERAREQEREBERAREQEREBERAREQEUEIAglERAREQEREBERAREQEREBLoVACCUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==' ,followed: false, fullName: 'Mariia', status: 'Princess', location: {city: 'Wustenbrand', country: 'Germany'} },
    //     {id: 2, photoUrl: 'data:image/jpeg;base64,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Kaa8eaJ4lbEWMbw4BzSHNIu0tILSORGhWSj2EREUREQEREEOcpREBFIC0WM7X0FKcstQzPcARx/rZi47hkZcg+dlUmYju3i0G0m08dMWwRsM9XLpT08er3E7nP8AgZvJJ4A+BI8ccmMV+kEJw6nO+aqAdVuafw4Bow/veNwVZ9l9k6WgDjEHPlfrPPM7PUTHjmeeHIWHrqmme+bxV4tjNl305fVVT2y1s4HXPHchZvEMPgwWF/EgeCtSIqzCIiAiIgIiICIiAiIgIixc5BJK+VZSxysMcrGSMdo5sjQ5h82nQrNreKzQUqbo1pGuL6SasonEkkUs5ETj+aN9wRyFgvkNl8ajvkxaKUcG1FAwWHN8brnzV6RFi0x2lQhTbRsOrMHmHDI+ojefPMLBYSYjjjN+Dxyc4sShaPk9t10BEd/Lf2oDcfxIDt4LWA8ernhkHoRa6j9KKrjhGK+kTD/mXQERfmv7c/8A0pqeGEYt6wsH+ZHbQYiR2MFrCeHWTwxD5m9vkugIh81/agR1uOybsKgh5z4gx487Rtus2YPtBKDnqsMpr7jTwSzvH/lOW6viI5nJafKjt6Outt7biFfVadpgkFPTu844/wDUrFgezNDRi1NTQxG1szW3kI5yOu4+pW2UOKONhKlYBvErNAREQEREBERAREQEREBERBBKxDbrNEBERAREQEREBERAREQEREEErENus0QEREBERAREQEREBERAREQEREBERAREQEUEIAglERAREQEREBERAREQEREBLoVACCUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==' ,followed: true, fullName: 'Olga', status: 'Princess', location: {city: 'Paris', country: 'France'} },
    //     {id: 3, photoUrl: 'data:image/jpeg;base64,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Kaa8eaJ4lbEWMbw4BzSHNIu0tILSORGhWSj2EREUREQEREEOcpREBFIC0WM7X0FKcstQzPcARx/rZi47hkZcg+dlUmYju3i0G0m08dMWwRsM9XLpT08er3E7nP8AgZvJJ4A+BI8ccmMV+kEJw6nO+aqAdVuafw4Bow/veNwVZ9l9k6WgDjEHPlfrPPM7PUTHjmeeHIWHrqmme+bxV4tjNl305fVVT2y1s4HXPHchZvEMPgwWF/EgeCtSIqzCIiAiIgIiICIiAiIgIixc5BJK+VZSxysMcrGSMdo5sjQ5h82nQrNreKzQUqbo1pGuL6SasonEkkUs5ETj+aN9wRyFgvkNl8ajvkxaKUcG1FAwWHN8brnzV6RFi0x2lQhTbRsOrMHmHDI+ojefPMLBYSYjjjN+Dxyc4sShaPk9t10BEd/Lf2oDcfxIDt4LWA8ernhkHoRa6j9KKrjhGK+kTD/mXQERfmv7c/8A0pqeGEYt6wsH+ZHbQYiR2MFrCeHWTwxD5m9vkugIh81/agR1uOybsKgh5z4gx487Rtus2YPtBKDnqsMpr7jTwSzvH/lOW6viI5nJafKjt6Outt7biFfVadpgkFPTu844/wDUrFgezNDRi1NTQxG1szW3kI5yOu4+pW2UOKONhKlYBvErNAREQEREBERAREQEREBERBBKxDbrNEBERAREQEREBERAREQEREEErENus0QEREBERAREQEREBERAREQEREBERAREQEUEIAglERAREQEREBERAREQEREBLoVACCUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==' ,followed: false, fullName: 'Sasha', status: 'Princess', location: {city: 'Roma', country: 'Italia'} },
     ],
     pageSize: 5,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: true,
     followingInProgress: []
}

const usersReduser = (state=initialState, action) => {
    switch(action.type) {

        case FOLLOW:
            return {
                ...state,
                 users: state.users.map (u =>  {
                   if(u.id === action.userId) {
                    return {...u, followed: true}
                   }
                   return u
                 })
                }

        case UNFOLLOW: 
            return {
                ...state,
                 users: state.users.map (u =>  {
                   if(u.id === action.userId) {
                    return {...u, followed: false}
                   }
                   return u
                 })
                }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
         case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
         }

         case TOGGLE_IS_FATCHING: {
            return {...state, isFetching: action.isFetching}
         }

         case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,
                 followingInProgress: action.isFetching 
                 ? [...state.followingInProgress, action.userId ] 
                 : [state.followingInProgress.filter(id=> id != action.userId)]}
         }

        default:
            return state
    }

}


export const FollowSuccess = (userId) => ({ type: FOLLOW , userId })
export const UnfollowSuccess = (userId) => ({ type: UNFOLLOW,  userId })
export const setUsers = (users) => ({ type: SET_USERS, users})
export const setCurrentPage=(currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount=(totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})



export const getUsers = (currentPage, pageSize) => {
         return (dispatch) => {
    
            dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleIsFetching(false))
            dispatch(setUsers (data.items))
            dispatch(setTotalUsersCount (data.totalCount))
    })
 }
}

export const follow = (userId) => {
    return(dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))

        usersAPI.follow(userId)
        .then(response => {
         if  ( response.data.resultCode == 0) {
            dispatch (FollowSuccess(userId))
         }
         dispatch(toggleFollowingProgress(false, userId))
    })

    }
}

export const unfollow = (userId) => {
    return(dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))

        usersAPI.unfollow(userId)
        .then(response => {
         if  ( response.data.resultCode == 0) {
            dispatch (UnfollowSuccess(userId))
         }
         dispatch(toggleFollowingProgress(false, userId))
    })

    }
}




export default usersReduser