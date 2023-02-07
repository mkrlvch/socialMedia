import axios from "axios"


 const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    AxiosHeaders: {
        'API-KEY': 'edf8f8a9-7be8-46b0-ad5d-d3d2b391724f'
    }


})

export const usersAPI = {
     async getUsers (currentPage = 1, pageSize = 10)  {
        const response = await instance.get( `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        return response.data


         // return instance.get ( `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    // .then (response => {
    //     return response.data
    // })
   
   },
   follow(userId){
   return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },

   unfollow(userId){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${userId}`)
                
   },
  
   getProfile(userId) {
   return instance.get(`https://social-network.samuraijs.com/api/1.0/profile` + userId)
    
   }

}


export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }


}


