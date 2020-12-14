import * as React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea
} from "@chakra-ui/react";
// import { type } from 'os';
import { useField } from "formik";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrTextarea = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
