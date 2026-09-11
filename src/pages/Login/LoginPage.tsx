import { Button } from "../../components/atoms/Button/Button";
import { FormField } from "../../components/molecules/FormField/FormField";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { LoginPageStyled } from "./LoginPage.styled";

export const LoginPage = () => (
  <ContentWrapper title="Login" description="Log ind på læringssitet.">
    <LoginPageStyled>
      <form>
        <fieldset>
          <legend>Loginoplysninger</legend>
          <FormField
            id="loginEmail"
            name="email"
            type="email"
            label="E-mail:"
            autoComplete="email"
            required
          />
          <FormField
            id="loginPassword"
            name="password"
            type="password"
            label="Adgangskode:"
            autoComplete="current-password"
            required
          />
        </fieldset>
        <Button type="submit">Login</Button>
      </form>
    </LoginPageStyled>
  </ContentWrapper>
);
