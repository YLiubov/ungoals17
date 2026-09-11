import { Button } from "../../atoms/Button/Button";
import { Label } from "../../atoms/Label/Label";
import { FormField } from "../../molecules/FormField/FormField";
import { ContactFormStyled } from "./ContactForm.styled";

export const ContactForm = () => (
  <ContactFormStyled>
    <fieldset>
      <legend>Send os en besked</legend>
      <FormField id="contactName" name="name" label="Navn:" required />
      <FormField
        id="contactEmail"
        name="email"
        type="email"
        label="E-mail:"
        required
      />
      <div className="contactFormMessage">
        <Label htmlFor="contactMessage">Besked:</Label>
        <textarea id="contactMessage" name="message" required />
      </div>
    </fieldset>
    <Button type="submit">Send besked</Button>
  </ContactFormStyled>
);
