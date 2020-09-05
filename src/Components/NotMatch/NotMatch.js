import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
const NotMatch = () => {
    return (
        <div>
            <Grid container spacing={2} style={{ marginTop: "10px" }}>
                <Grid item xs={10} md={10}>
                    <Card style={{ boxShadow: "4px 6px 10px -4px rgba(0,0,0,0.75)", width: "90%", padding: "25px", marginLeft: "10%", textAlign: "center" }}> 
                        <CardActionArea>
                            <Typography gutterBottom variant="h1" component="h2">
                                404
                            </Typography>
                            <Typography variant="h4" color="textSecondary" component="h4">
                                Sorry..! Page Not Found.
                               
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div >
    );
};

export default NotMatch;