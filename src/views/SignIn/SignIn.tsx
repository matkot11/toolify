import { Formik } from "formik";
import { SignUpForm, SignUpWrapper } from "@/views/SignUp/SignUp.styled.ts";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormikInput from "@/components/FormikInput/FormikInput.tsx";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { dispatchSnackbar } = useSnackbar();
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

      dispatchSnackbar("Successfully signed in", "success");
      return navigate("/");
    } catch (error: any) {
      dispatchSnackbar(error.message, "error");
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
            <FormikInput
              name="email"
              labelName="Email"
              errorMessage={errors.email}
              touched={touched.email}
            />
            <FormikInput
              name="password"
              labelName="Password"
              type="password"
              errorMessage={errors.password}
              touched={touched.password}
            />
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
