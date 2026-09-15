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
const MAX_GOAL_TEXT_LENGTH = 30;
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

const isValidHexColor = (value: string) =>
  HEX_COLOR_PATTERN.test(value.trim());

const isValidGoalText = (value: string) =>
  value.trim() !== "" && value.length <= MAX_GOAL_TEXT_LENGTH;

const getGoalTextError = (value: string) => {
  if (value.trim() === "") {
    return "Målteksten må ikke være tom.";
  }

  if (value.length > MAX_GOAL_TEXT_LENGTH) {
    return "Målteksten må højst indeholde 30 tegn.";
  }

  return "";
};

const getBackgroundColorError = (value: string) => {
  if (value.trim() === "") {
    return "Farvekoden må ikke være tom.";
  }

  if (!isValidHexColor(value)) {
    return "Indtast en gyldig HEX-farve, f.eks. #fff eller #ff0000.";
  }

  return "";
};

export const CustomGoalDesigner = () => {
  const [goalText, setGoalText] = useState(INITIAL_GOAL_TEXT);
  const [backgroundColor, setBackgroundColor] = useState(
    INITIAL_BACKGROUND_COLOR,
  );
  const [goalTextError, setGoalTextError] = useState("");
  const [backgroundColorError, setBackgroundColorError] = useState("");
  const [goalTextTouched, setGoalTextTouched] = useState(false);
  const [goalTextLimitExceeded, setGoalTextLimitExceeded] = useState(false);

  useEffect(() => {
    // Учебное требование: сохраняем результат validation в error-state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGoalTextError(
      goalTextLimitExceeded
        ? "Målteksten må højst indeholde 30 tegn."
        : goalTextTouched
          ? getGoalTextError(goalText)
          : "",
    );
  }, [goalText, goalTextTouched, goalTextLimitExceeded]);

  useEffect(() => {
    // Учебное требование: сохраняем результат validation в error-state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBackgroundColorError(getBackgroundColorError(backgroundColor));
  }, [backgroundColor]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGoalText = event.target.value;

    setGoalTextTouched(true);

    if (nextGoalText.length > MAX_GOAL_TEXT_LENGTH) {
      setGoalTextLimitExceeded(true);
      return;
    }

    setGoalTextLimitExceeded(false);
    setGoalText(nextGoalText);
  };

  const handleTextBlur = () => {
    setGoalTextTouched(true);
  };

  const handleBackgroundColorChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setBackgroundColor(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGoalTextTouched(true);

    if (!isValidGoalText(goalText) || !isValidHexColor(backgroundColor)) {
      return;
    }
  };

  const handleReset = () => {
    setGoalText(INITIAL_GOAL_TEXT);
    setBackgroundColor(INITIAL_BACKGROUND_COLOR);
    setGoalTextTouched(false);
    setGoalTextLimitExceeded(false);
  };

  const previewColor = isValidHexColor(backgroundColor)
    ? backgroundColor
    : INITIAL_BACKGROUND_COLOR;

  return (
    <CustomGoalDesignerStyled $backgroundColor={previewColor}>
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
              onBlur={handleTextBlur}
              aria-invalid={Boolean(goalTextError)}
              aria-describedby={goalTextError ? "goalTextError" : undefined}
            />

            <div className="customGoalTextFeedback">
              {goalTextError && (
                <p
                  id="goalTextError"
                  className="customGoalError"
                  aria-live="polite"
                >
                  {goalTextError}
                </p>
              )}

              <span
                className="customGoalCharacterCount"
                data-invalid={goalTextLimitExceeded}
              >
                {goalText.length} / {MAX_GOAL_TEXT_LENGTH}
              </span>
            </div>
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
