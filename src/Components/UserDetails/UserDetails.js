import React ,{ useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    let {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const divStyle = {
        border : '1px solid teal',
        padding : '20px',
        margin : '20px auto',
        width : '500px',
        borderRadius : '20px' ,
    }

    return (
        <div style = {divStyle}>
            <h1>Details of {id}</h1>
            <h2>Name : {user.name}</h2>
            <h3>Email : {user.email}</h3>
            <h4>Phone : {user.phone}</h4>
            <p>Website : {user.website}</p>
        </div>
    );
};

export default UserDetails;