import React, { useLayoutEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router';
import { authAPI } from '../api/auth';
import { client } from '../api/client';
import { renewAccess } from '../Feature/SignIn/SignIn';

function useIdVerification() {
    const [cookies, setCookie, clearCookie] = useCookies(['refresh']);
    const history = useHistory()

    useLayoutEffect(function checkToken(){
        const refreshToken = cookies['refresh']

        if(!refreshToken){
            history.push('/login')
        }
        else{
            try{
                verifyRefresh(refreshToken) 
            }catch{
                history.push('/login')
                clearCookie('refresh')
            }
            
        }
    },[cookies['refresh']])

    // async function renewToken(token: string) {
    //     renewAccess(token)
    //     renewRefresh(token)
    // }

   
    // async function renewRefresh(token: string) {
    //     const newRefresh = await authAPI.postRenewRefresh(token)
    //     setCookie('refresh', newRefresh)

    //     setTimeout(async() => await renewAccess(newRefresh), 3600)
    // }
}

async function verifyRefresh( refreshToken: string){
    try{
        await authAPI.postTokenVerify(refreshToken)
        await renewAccess(refreshToken)
    }catch(err){
        console.log(err)
    }
}



export default useIdVerification
