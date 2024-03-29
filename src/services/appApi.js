import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const  appApi=createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://chatapp-backend-x37e.onrender.com'
    }),
    endpoints:(builder)=>({
        signupUser: builder.mutation({
            query:(user)=>({
                url:'/users',
                method:"post",
                body:user,

            })
        }),

        loginUser: builder.mutation({
            query:(user)=>({
                url:'/users/login',
                method:"post",
                body:user,

            })
        }),

        logoutUser: builder.mutation({
            query:(payload)=>({
                url:'/logout',
                method:"DELETE",
                body:payload,

            })
        })
    })
})

export const {useSignupUserMutation,useLoginUserMutation,useLogoutUserMutation} =appApi;
export default appApi;