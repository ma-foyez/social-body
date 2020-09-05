import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Grid, Paper } from '@material-ui/core';

const SocialContainer = () => {
    const [posts, setPosts] = useState([]);
    // const [simplePost, setSimplePost] = useState([]);
    // const [finalPost, setFinalPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div style={{marginLeft: "15px"}}>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Grid>

        </div>
    );
};

export default SocialContainer;