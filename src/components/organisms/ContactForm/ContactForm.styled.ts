import styled from "styled-components";

export const ContactFormStyled = styled.form`
  display: grid;
  max-width: 620px;
  gap: 18px;
`;

export const FieldsStyled = styled.fieldset`
  display: grid;
  gap: 18px;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const MessageGroupStyled = styled.div`
  display: grid;
  gap: 6px;
`;

export const MessageStyled = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 140px;
  padding: 10px 12px;
  border: 1px solid #b8b8b8;
  font: inherit;
  resize: vertical;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
