import { Field, Formik } from "formik";
import { SignUpForm, SignUpWrapper } from "@/views/SignUp/SignUp.styled.ts";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: SignInFormValues = {
    email: "",
    password: ""
  };

  const handleValidation = (values: SignInFormValues) => {
    interface SignInValidationValues {
      email?: string;
      password?: string;
    }
    const errors: SignInValidationValues = {};

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.email?.includes("@")) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (values: SignInFormValues) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, values.email, values.password);
      return navigate("/");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignUpWrapper>
      <h2 className="sign-up__header">Sign In</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidation}>
        {({ errors, touched, isValidating }) => (
          <SignUpForm>
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
            <button disabled={isValidating || isLoading} className="sign-up__button" type="submit">
              Sign In
            </button>
          </SignUpForm>
        )}
      </Formik>
    </SignUpWrapper>
  );
};

export default SignIn;
