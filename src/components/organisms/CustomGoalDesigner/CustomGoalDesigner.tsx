import { useEffect, useState } from "react";
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
  const [goalTextError, setGoalTextError] = useState("");
  const [backgroundColorError, setBackgroundColorError] = useState("");

  useEffect(() => {
    // Учебное требование: сохраняем результат validation в error-state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoalTextError(
      goalText.trim() === "" ? "Du skal skrive dit eget verdensmål." : "",
    );
  }, [goalText]);

  useEffect(() => {
    // Учебное требование: сохраняем результат validation в error-state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBackgroundColorError(
      backgroundColor.trim() === "" ? "Du skal vælge en farve." : "",
    );
  }, [backgroundColor]);

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
          <div className="customGoalFieldGroup">
            <FormField
              id="goalText"
              name="goalText"
              type="text"
              label="Måltekst:"
              placeholder="Indtast titel på mål"
              value={goalText}
              onChange={handleTextChange}
              aria-invalid={Boolean(goalTextError)}
              aria-describedby={goalTextError ? "goalTextError" : undefined}
            />

            {goalTextError && (
              <p
                id="goalTextError"
                className="customGoalError"
                aria-live="polite"
              >
                {goalTextError}
              </p>
            )}
          </div>

          <div className="customGoalFieldGroup">
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
                  aria-invalid={Boolean(backgroundColorError)}
                  aria-describedby={
                    backgroundColorError ? "backgroundColorError" : undefined
                  }
                />
              </div>
            </div>

            {backgroundColorError && (
              <p
                id="backgroundColorError"
                className="customGoalError"
                aria-live="polite"
              >
                {backgroundColorError}
              </p>
            )}
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
