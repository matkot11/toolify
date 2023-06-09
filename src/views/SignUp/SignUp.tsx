import { Formik } from "formik";
import { SignUpForm, SignUpWrapper } from "@/views/SignUp/SignUp.styled.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormikInput from "@/components/FormikInput/FormikInput.tsx";
import { useSnackbar } from "@/hooks/useSnackbar.tsx";
import { useAuth } from "@/hooks/useAuth.tsx";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { dispatchSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();

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

    if (values.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
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
    setIsLoading(true);

    const { error } = await signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          fullName: values.fullName,
          admin: false
        }
      }
    });

    setIsLoading(false);

    if (error) {
      dispatchSnackbar(error.message, "error");
    } else {
      dispatchSnackbar("Successfully signed up", "success");
      return navigate("/");
    }
  };

  return (
    <SignUpWrapper>
      <h2 className="sign-up__header">Sign Up</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidation}>
        {({ errors, touched, isValidating }) => (
          <SignUpForm>
            <FormikInput
              name="fullName"
              labelName="Full Name"
              errorMessage={errors.fullName}
              touched={touched.fullName}
            />
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
            <FormikInput
              name="confirmPassword"
              labelName="Confirm Password"
              type="password"
              errorMessage={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
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
