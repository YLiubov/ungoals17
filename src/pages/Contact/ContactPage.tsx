import { ContactForm } from "../../components/organisms/ContactForm/ContactForm";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";

export const ContactPage = () => {
  return (
    <ContentWrapper
      title="Kontakt os"
      description="Kontakt os hvis du har spørgsmål."
    >
      <p>Du er velkommen til at kontakte os for at høre mere om projektet.</p>
      <ContactForm />
    </ContentWrapper>
  );
};
