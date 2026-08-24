import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import { FormFieldStyled } from "./FormField.styled";
import type { FormFieldProps } from "./FormField.types";

export const FormField = ({ label, id, ...inputProps }: FormFieldProps) => (
  <FormFieldStyled>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...inputProps} />
  </FormFieldStyled>
);
