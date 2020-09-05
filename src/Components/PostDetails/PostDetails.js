import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
        // maxWidth: 327,
    },
    media: {
        height: 140,
    },
});
const PostDetails = () => {
    const classes = useStyles();
    const { postID } = useParams();

    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);

    const fetchData = () => {
        // load api data by matching current post id
        const postAPI = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        const commentAPI = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`

        const getPost = axios.get(postAPI);
        const getComment = axios.get(commentAPI);
        axios.all([getPost, getComment])
        .then(axios.spread((...data) => {
                const postDetails = data[0].data;
                const commentDetails = data[1].data;
                setPost(postDetails);
                setComment(commentDetails)
                return postDetails;
            })
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    // =============================
   

    return (
        <div style={{ marginLeft: "10%" }}>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={10} md={10}>
                    <Card className={classes.root} style={{ boxShadow: "4px 6px 12px -4px rgba(0,0,0,0.75)", width: "100%", padding: "20px" }}>
                        <CardActionArea style={{borderBottom: "3px solid green"}}>
                        <Button variant="contained" color="primary"> Post ID : {postID}</Button> <br/> 
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2" style={{ textTransform: "capitalize", textAlign: "center", color: "#ff4a03" }}> {post.title} </Typography> <br />
                                <Typography variant="body2" color="textSecondary" variant="h6" component="h4"> {post.body} </Typography>
                            </CardContent>
                        </CardActionArea> 
                        <h2>ALl Comments</h2>
                        {
                            comment.map(comment=> <Comment comment={comment} postID={postID}></Comment>)
                        }
                        <CardActions style={{ float: "right" }}>
                            <Button variant="contained" color="secondary"> <Link style={{ textDecoration: "none", color: "white" }}>Go Back</Link> </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default PostDetails;