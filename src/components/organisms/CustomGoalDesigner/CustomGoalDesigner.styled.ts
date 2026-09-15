import styled from "styled-components";

type CustomGoalDesignerStyledProps = {
  $backgroundColor: string;
};

export const CustomGoalDesignerStyled =
  styled.div<CustomGoalDesignerStyledProps>`
    .customGoalIntro {
      margin-bottom: 24px;

      h2 {
        margin: 0 0 4px;
      }

      p {
        margin: 0;
        font-size: 14px;
      }
    }

    .customGoalWorkspace {
      display: grid;
      grid-template-columns: minmax(0, 480px) 300px;
      justify-content: space-between;
      align-items: start;
      gap: 48px;
    }

    form {
      display: grid;
      gap: 18px;
    }

    .customGoalFieldGroup {
      display: grid;
      gap: 4px;
    }

    .customGoalFieldGroup > div:first-child {
      display: grid;
      grid-template-columns: 96px minmax(0, 400px);
      align-items: center;
      gap: 8px;
    }

    .customGoalError {
      min-height: 18px;
      margin: 0 0 0 104px;
      color: #c5192d;
      font-size: 13px;
      line-height: 1.4;
    }

    .customGoalColorControl {
      position: relative;
      box-sizing: border-box;
      height: 31px;
      border: 1px solid #b8b8b8;
      border-radius: 3px;
      background-color: #ffffff;

      span {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 15px;
      }

      input {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
      }
    }

    .customGoalActions {
      display: flex;
      gap: 12px;
    }

    .customGoalPreview {
      display: grid;
      place-items: center;
      width: 300px;
      aspect-ratio: 1;
      background-color: ${({ $backgroundColor }) => $backgroundColor};
    }

    .customGoalPreview h3 {
      margin: 0;
      padding: 20px;
      color: #ffffff;
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      overflow-wrap: anywhere;
    }

    @media (max-width: 800px) {
      .customGoalWorkspace {
        grid-template-columns: 1fr;
      }

      .customGoalPreview {
        width: min(300px, 100%);
      }
    }

    @media (max-width: 500px) {
      .customGoalFieldGroup > div:first-child {
        grid-template-columns: 1fr;
      }

      .customGoalError {
        margin-left: 0;
      }
    }
  `;
