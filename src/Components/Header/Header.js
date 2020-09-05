import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Link to="/home" style={{ textDecoration: "none", color: "white" }}> <MenuIcon /></Link>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>Social Body</Link>
                        </Typography>
                        <Button color="inherit"><Link style={{ textDecoration: "none", color: "white" }} to="/home">Home</Link></Button>
                        <Button color="inherit"><Link style={{ textDecoration: "none", color: "white" }} to="/registration">Registration</Link></Button>
                        <Button color="inherit"><Link style={{ textDecoration: "none", color: "white" }} to="/login">Login</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
};

export default Header;