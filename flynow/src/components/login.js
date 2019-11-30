import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useForm from "react-hook-form";
import Axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        FlyNow
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#ffffff',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#00bfff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignIn() {
  const classes = useStyles();
  const { handleSubmit, register } = useForm({
    defaultValues: {
    email: "",
    password: ""
    }
  });
  const onSubmit = (data) =>  {
    console.log(data)
    Axios.post('http://localhost:5000/database/auth', data)
      .then(res => console.log(res.data));
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FlightTakeoffIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to FlyNow, Please Sign in
        </Typography>
        <form className= {classes.form} onSubmit = {handleSubmit(onSubmit)}>
          <div className = "loginForm">
            <label className = "loginFormLabel" htmlFor="email">Email</label>
            <input
            type = "email"
            id = "email"
            ref = {register({
                    required: true
            })}
            className = "loginFormInput"
            placeholder = "Enter your Email"
            name = "email"
            required
            />
          </div>
          <div className = "loginForm">
            <label className = "loginFormLabel" htmlFor="password">Password</label>
            <input
            type = "password"
            id = "password"
            ref = {register({
                    required: true
            })}
            className = "loginFormInput"
            placeholder = "Enter your password"
            name = "password"
            required
            />
          </div>
          <div className = "loginForm">
            <label className = "loginFormCheckBoxLabel">
            <input
            type = "checkbox"
            className = "loginFormCheckBoxInput"
            name = "remember"
            />
            Remember Me
            </label>
          </div>
          <div className = "loginForm">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className= "submit"
            >
              Sign In
            </Button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
