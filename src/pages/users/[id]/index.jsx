import React from 'react'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const UserInfo = () => {

    const [userInfo, setUserInfo] = useState()
    console.log(userInfo)

    const myRouter = useRouter()

    useEffect(()=>{
        const id = myRouter.query.id
        async function getUserById(id) {
            const data = await fetch(`https://dummyjson.com/users/${id}`)
            setUserInfo(await data.json())
        }    
        getUserById(id)
    },[myRouter.query.id])

  return (
    <div>
      <h1>This is index inside id</h1>
      <h3>{userInfo?.firstName}</h3>
      <h4>{userInfo?.email}</h4>
    </div>
  )
}

export default UserInfo
