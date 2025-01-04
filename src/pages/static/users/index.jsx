import React from 'react'

const UsersPage = (props) => {
  return (
    <div>
      <h1>user page (SSG)</h1>
      {
      props?.data?.users.map(user => <li>{user.firstName}</li>)
      }
    </div>
  )
}

export const getStaticProps = async () => {

const data = await (await fetch('https://dummyjson.com/users')).json()

  return { 
    props :{
    data,
    }
  }
} 

export default UsersPage
