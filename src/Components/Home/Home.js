import React, { useState, useEffect } from 'react';
import User from '../User/User/User';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div >
            <h2>Users : {users.length}</h2>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Home;