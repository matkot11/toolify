import { Field } from "formik";
import {
  FormikInputError,
  FormikInputWrapper
} from "@/components/FormikInput/FormikInput.styled.ts";

type FormikInputProps = {
  name: string;
  labelName: string;
  type?: string;
  errorMessage?: string;
  touched?: string | boolean;
};

const FormikInput = ({
  name,
  labelName,
  type = "text",
  errorMessage,
  touched
}: FormikInputProps) => (
  <FormikInputWrapper htmlFor={name}>
    {labelName}
    <Field type={type} className="formik-input__input" name={name} placeholder={labelName} />
    <FormikInputError isVisible={!!(errorMessage && touched)}>{errorMessage}</FormikInputError>
  </FormikInputWrapper>
);

export default FormikInput;
