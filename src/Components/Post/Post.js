import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        // maxWidth: 327,
    },
    media: {
        height: 140,
    },
});

const Post = (props) => {
    const classes = useStyles();
    const { id, title, body } = props.post;

    // console.log(props.post)

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root} style={{ boxShadow: "4px 6px 12px -4px rgba(0,0,0,0.75)", width: "90%", }}>
                <CardActionArea>
                    <Button variant="contained" color="primary"> Post ID : {id}</Button>
                    <CardContent style={{ height: 250 }}>
                        <Typography gutterBottom variant="h5" component="h3" style={{ textTransform: "capitalize", textAlign: "center", color: "#ff4a03" }}> {title} </Typography> <br />
                        <Typography variant="body2" color="textSecondary" component="p"> {body} </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary"> <Link style={{ textDecoration: "none", color: "white" }} to={`/details/${id}`}>See More</Link> </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Post;