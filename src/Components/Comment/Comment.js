import React, { useState, useEffect } from 'react';
import './Comment.css'

const Comment = (props) => {
    // console.log(props.comment)
    const { body, email, name, id } = props.comment;
    return (
        <div>
            <div className="user-contaier">
                <h4>USER ID : {id}</h4>
                <h3>{name}</h3>
                <h4>{email}</h4>
                <p>{body}</p>  <hr />
            </div>
        </div>
    );
};

export default Comment;