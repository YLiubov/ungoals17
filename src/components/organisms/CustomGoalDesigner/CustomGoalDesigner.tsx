import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import { FormField } from "../../molecules/FormField/FormField";
import { theme } from "../../../styles/Theme.styled";
import { CustomGoalDesignerStyled } from "./CustomGoalDesigner.styled";

const INITIAL_GOAL_TEXT = "";
const INITIAL_BACKGROUND_COLOR = theme.colors.primary;

export const CustomGoalDesigner = () => {
  const [goalText, setGoalText] = useState(INITIAL_GOAL_TEXT);
  const [backgroundColor, setBackgroundColor] = useState(
    INITIAL_BACKGROUND_COLOR,
  );

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGoalText(event.target.value);
  };

  const handleBackgroundColorChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setBackgroundColor(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setGoalText(INITIAL_GOAL_TEXT);
    setBackgroundColor(INITIAL_BACKGROUND_COLOR);
  };

  return (
    <CustomGoalDesignerStyled $backgroundColor={backgroundColor}>
      <div className="customGoalIntro">
        <h2>Mangler der et mål?</h2>
        <p>
          Med tekst feltet herunder kan du bygge dit eget mål og give det en
          bestemt farve.
        </p>
      </div>

      <div className="customGoalWorkspace">
        <form onSubmit={handleSubmit}>
          <FormField
            id="goalText"
            name="goalText"
            type="text"
            label="Måltekst:"
            placeholder="Indtast titel på mål"
            value={goalText}
            onChange={handleTextChange}
          />

          <div className="customGoalColorField">
            <Label htmlFor="goalColor">Farvekode:</Label>

            <div className="customGoalColorControl">
              <span aria-hidden="true">{backgroundColor}</span>
              <Input
                id="goalColor"
                name="goalColor"
                type="color"
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
              />
            </div>
          </div>

          <div className="customGoalActions">
            <Button type="submit">Byg mål</Button>

            <Button type="button" onClick={handleReset}>
              Nulstil
            </Button>
          </div>
        </form>

        <div className="customGoalPreview">
          <h3>{goalText || "Min måltekst"}</h3>
        </div>
      </div>
    </CustomGoalDesignerStyled>
  );
};
