import { Field, Formik } from "formik";
import { SignUpForm, SignUpWrapper } from "@/views/SignUp/SignUp.styled.ts";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: SignUpFormValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const handleValidation = (values: SignUpFormValues) => {
    interface SignUpValidationValues {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    }
    const errors: SignUpValidationValues = {};

    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.email?.includes("@")) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirmation password is required";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      if (auth?.currentUser) {
        await updateProfile(auth?.currentUser, {
          displayName: values.fullName
        });
      } else {
        console.log("Could not set the name");
      }

      return navigate("/");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignUpWrapper>
      <h2 className="sign-up__header">Sign Up</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidation}>
        {({ errors, touched, isValidating }) => (
          <SignUpForm>
            <label className="sign-up__label" htmlFor="firstName">
              Full Name
              <Field className="sign-up__input" name="fullName" placeholder="Full Name" />
              {errors.fullName && touched.fullName && (
                <span className="sign-up__error">{errors.fullName}</span>
              )}
            </label>
            <label className="sign-up__label" htmlFor="email">
              Email
              <Field className="sign-up__input" name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <span className="sign-up__error">{errors.email}</span>
              )}
            </label>
            <label className="sign-up__label" htmlFor="password">
              Password
              <Field
                type="password"
                className="sign-up__input"
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <span className="sign-up__error">{errors.password}</span>
              )}
            </label>
            <label className="sign-up__label" htmlFor="confirmPassword">
              Confirm Password
              <Field
                type="password"
                className="sign-up__input"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span className="sign-up__error">{errors.confirmPassword}</span>
              )}
            </label>
            <button disabled={isValidating || isLoading} className="sign-up__button" type="submit">
              Sign Up
            </button>
          </SignUpForm>
        )}
      </Formik>
    </SignUpWrapper>
  );
};

export default SignUp;
