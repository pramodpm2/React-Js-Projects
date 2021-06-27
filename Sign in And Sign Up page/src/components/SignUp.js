import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";
import * as Yup from "yup";

const Signup = ({ field, setField, setRegAlert }) => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: "2%" };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: null,
    termsAndConditions: false,
    age: undefined,
    address: "",
    district: "",
    taluk: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Name Required"),
    email: Yup.string().email("Enter valid email").required("Email Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Gender Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Phone Number Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    age: Yup.number().required("Age is Require"),
    date: Yup.date().required("Require"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
    //   address: Yup.string().required("Address Required"),
    //   district: Yup.string().required("District Required"),
    //   taluk: Yup.string().required("taluk Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      setField(true);
      setRegAlert(true);
    }, 2000);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
                error={props.errors.name && props.touched.name}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
                error={props.errors.email && props.touched.email}
              />

              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
                error={props.errors.password && props.touched.password}
              />
              <Field
                as={TextField}
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
                error={props.errors.phoneNumber && props.touched.phoneNumber}
              />

              <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>

              <Field
                as={TextField}
                fullWidth
                name="age"
                label="Age"
                placeholder="Enter your age"
                helperText={<ErrorMessage name="age" />}
                error={props.errors.age && props.touched.age}
              />

              <TextField
                id="date"
                label="Birthday"
                type="date"
                fullWidth
                name="dateofbirth"
                style={marginTop}
                InputLabelProps={{
                  shrink: true,
                }}
                value={props.values.date}
                onChange={(e) => props.setFieldValue("date", e.target.value)}
                helperText={<ErrorMessage name="dateofbirth" />}
              />

              <TextField
                label="Address"
                multiline
                fullWidth
                name="address"
                size="small"
                helperText={<ErrorMessage name="address" />}
                error={props.errors.address && props.touched.address}
                          />
                          
                          <Field
                as={TextField}
                fullWidth
                name="district"
                label="District"
                placeholder="Enter your district"
                helperText={<ErrorMessage name="district" />}
                error={props.errors.district && props.touched.district}
                          />
                           <Field
                as={TextField}
                fullWidth
                name="taluk"
                label="Taluk"
                placeholder="Enter your Taluk"
                helperText={<ErrorMessage name="taluk" />}
                error={props.errors.taluk && props.touched.taluk}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>
              <Typography>
                {" "}
                Already have an account ?
                <Link
                  href="#"
                  onClick={() => {
                    setField(true);
                  }}
                >
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
