import { Button } from "../../components/atoms/Button/Button";
import { FormField } from "../../components/molecules/FormField/FormField";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { GoalFieldsStyled, GoalFormStyled } from "./CustomGoalPage.styled";

export const CustomGoalPage = () => {
  return (
    <ContentWrapper
      title="Byg dit eget mål"
      description="Her kan du bygge dit eget mål og vælge en passende farve."
    >
      <h2>Mangler der et mål?</h2>
      <GoalFormStyled>
        <GoalFieldsStyled>
          <legend>Oplysninger om målet</legend>
          <FormField
            id="goalText"
            name="goalText"
            type="text"
            label="Måltekst:"
            placeholder="Indtast titel på mål"
          />
          <FormField
            id="goalColor"
            name="goalColor"
            type="text"
            label="Farvekode:"
            placeholder="Indtast farvekode i hexadecimal værdi"
          />
        </GoalFieldsStyled>
        <Button type="submit">Byg mål</Button>
      </GoalFormStyled>
    </ContentWrapper>
  );
};
