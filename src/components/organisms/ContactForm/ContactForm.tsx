import { Button } from "../../atoms/Button/Button";
import { Label } from "../../atoms/Label/Label";
import { FormField } from "../../molecules/FormField/FormField";
import {
  ContactFormStyled,
  FieldsStyled,
  MessageGroupStyled,
  MessageStyled,
} from "./ContactForm.styled";

export const ContactForm = () => (
  <ContactFormStyled>
    <FieldsStyled>
      <legend>Send os en besked</legend>
      <FormField id="contactName" name="name" label="Navn:" required />
      <FormField
        id="contactEmail"
        name="email"
        type="email"
        label="E-mail:"
        required
      />
      <MessageGroupStyled>
        <Label htmlFor="contactMessage">Besked:</Label>
        <MessageStyled id="contactMessage" name="message" required />
      </MessageGroupStyled>
    </FieldsStyled>
    <Button type="submit">Send besked</Button>
  </ContactFormStyled>
);
