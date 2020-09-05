import React from 'react';
import './Comment.css'
import { Grid } from '@material-ui/core';
const Comment = (props) => {
    // console.log(props.comment);
    const { body, email, name, id, img } = props.comment;
    return (
        <div className="user-contaier">
            <Grid container spacing={2}>
                <Grid item xs={10} md={3}>
                    <div className="profile-img">
                        <img src={img} alt="" />
                    </div>
                </Grid>
                <Grid item xs={10} md={6}>
                    <div className="profile-title">
                        <h4>USER ID : {id}</h4>
                        <h3 className="name">Name : {name}</h3>
                        <h4 className="email">Email : {email}</h4>
                    </div>
                </Grid>
            </Grid>
            <p className="comment">Comment :</p>
            <p>{body}</p>  <hr />
        </div>
    );
};

export default Comment;