import React,{useState} from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  Avatar,
  Link,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 150,
    backgroundColor: theme.palette.background.paper,
   
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: 100,
    left: "30%",
  },
}));
const RegistrationForm = ({
  field,
  setField,
  login,
  setLogin,
  regAlert,
  setRegAlert,
}) => {
  const paperStyle = { padding: "40px 20px", width: 250, margin: "20px auto" };
  const btnStyle = { marginTop: 10 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const btnstyle = { margin: "8px 0" };

  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),

    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .matches(
        passwordRegExp,
        "Password must have one upper, lower case, number, special symbol"
      )
      .required("Password is required"),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      setLogin(false);
    }, 2000);
  };

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [modalAlert, setModalAlert] = useState(false);
  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        {regAlert && (
          <Alert
            onClose={() => {
              setRegAlert(false);
            }}
          >
            Registrastion is successful please log in !
          </Alert>
        )}
        <Grid align="center" style={{ marginTop: "1%" }}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form noValidate>
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                error={props.errors.email && props.touched.email}
                helperText={<ErrorMessage name="email" />}
                required
              />

              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={props.errors.password && props.touched.password}
                helperText={<ErrorMessage name="password" />}
                required
              />

              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign in
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Grid className={classes.paper}>
                  <Grid style={{marginBottom:'2%'}}>
                  {modalAlert && (
                    <Alert
                      onClose={() => {
                        setModalAlert(false);
                      }}
                    >
                      Verification Link sent to your mail id!
                    </Alert>
                  )}
                 </Grid>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    error={props.errors.email && props.touched.email}
                    helperText={<ErrorMessage name="email" />}
                    required
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                    onClick={() => {
                      setModalAlert(true);
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Modal>
              <Typography>
                <Link href="#" onClick={handleOpen}>
                  Forgot password ?
                </Link>
              </Typography>
              <Typography>
                {" "}
                Do you not have an account ?
                <Link
                  href="#"
                  onClick={() => {
                    setField(false);
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
