import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
import FakeData from '../../FakeData'
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const PostDetails = () => {

    const { postID } = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [selectComment, setSelectComment] = useState([]);

    const fetchData = () => {
        // load api data by matching current post id
        const postAPI = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        const commentAPI = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`

        const getPost = axios.get(postAPI);
        const getComment = axios.get(commentAPI);
        axios.all([getPost, getComment])
            .then(axios.spread((...data) => {
                const postDetails = data[0].data;
                setPost(postDetails);

                const commentDetails = data[1].data;
                let info = commentDetails.map((user, index) => {
                    user.img = FakeData[index].img;
                    return user;
                })
                // select one comment for display
                const selectOneComment = info[0];
                setSelectComment(selectOneComment);

                // remove first comment from array & set others comments in new variable
                const othersComment = info.slice(1, 5);
                setComment(othersComment);
            })
            )
    }
    // console.log(selectComment);
    console.log(selectComment);

    useEffect(() => {
        fetchData();
    }, [])
    // console.log(comment)

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div style={{ marginLeft: "10%" }}>
            <Grid container spacing={2} style={{ marginTop: "10px", overflow: "hidden" }}>
                <Grid item xs={10} md={10}>
                    <Card style={{ boxShadow: "4px 6px 12px -4px rgba(0,0,0,0.75)", width: "100%", padding: "20px" }}>
                        <CardActionArea style={{ borderBottom: "3px solid green" }}>
                            <Button variant="contained" color="primary"> Post ID : {postID}</Button> <br />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2" style={{ textTransform: "capitalize", textAlign: "center", color: "#ff4a03" }}> {post.title} </Typography> <br />
                                <Typography variant="body2" color="textSecondary" variant="h6" component="h4"> {post.body} </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/** Display one comment in display */}
                        <h2>Latest Comment</h2>
                        <div className="user-contaier" style={{ marginTop: "15px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={10} md={3}>
                                    <div className="profile-img">
                                        <img src={selectComment.img} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={10} md={6}>
                                    <div className="profile-title">
                                        <h4>USER ID : {selectComment.id}</h4>
                                        <h3 className="name">Name : {selectComment.name}</h3>
                                        <h4 className="email">Email : {selectComment.email}</h4>
                                    </div>
                                </Grid>
                            </Grid>
                            <p className="comment">Comment :</p>
                            <p>{selectComment.body}</p>  <hr />
                        </div>
                        <List component="nav" aria-labelledby="nested-list-subheader" subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                       </ListSubheader>
                        }>
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="See All Comments" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem> <br/>
                            {
                                // here pass others comments
                                comment.map(comment => <Comment comment={comment} open={open} key={post.id}></Comment>)
                            }
                    </List>
                    </Card>
                </Grid>
            </Grid >
        </div >
    );
};

export default PostDetails;