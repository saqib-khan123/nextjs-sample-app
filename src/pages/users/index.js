import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const UserPage = () => {

    const { data, error} = useSWR('https://dummyjson.com/users',fetcher)
    console.log('my data from api',data)
//   const [users, setUsers] = useState();
//   console.log('data from api', users)
//   useEffect(() => {
//     async function fetchUsers() {
//       const data = await fetch("https://dummyjson.com/users");
//       setUsers(await data.json());
//     }
//     fetchUsers();
//   }, []);

  return (
    <div>
      <h1>This is user page</h1>
      {
        data?.users?.map((user)=>(
        <Link href={`users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
        </Link>
    ))}
    </div>
  );
};

export default UserPage;
