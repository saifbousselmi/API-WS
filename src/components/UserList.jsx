import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

const UserList = () => {
    const [users , setUsers] = useState([])

    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then((res) => setUsers(res.data))
     .catch((error) =>console.log(error))
    }, [])
    
  return (
    <div className='flex justify-center mt-12 gap-8 flex-wrap'>
        {
            users.map((user) => <UserCard  key={user.id} user={user}/>)
        }
    </div>
  )
}

export default UserList