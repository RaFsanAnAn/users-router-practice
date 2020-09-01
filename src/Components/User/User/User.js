import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {name, email, id} = props.user;
    const userStyle ={
        border : '1px solid tomato',
        padding : '20px',
        margin : '20px',
        borderRadius : '20px' ,
    }
    return (
        <div style = {userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`/users/${id}`}> <button>Get Details</button> </Link>
        </div>
    );
};

export default User;