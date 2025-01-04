import React, { use } from 'react'

const users = (props) => {
  console.log('my data is :- ', props)
  return (
    <div>
      <h1> User - server side rendering</h1>
      {
      props?.data?.users.map(user => <li>{user.firstName}</li>)
      }
    </div>
  )
}

export const getServerSideProps = async () =>{
const data = await (await fetch('https://dummyjson.com/users')).json()
  return {
    props :{
    data,
    }
  }
}

export default users
