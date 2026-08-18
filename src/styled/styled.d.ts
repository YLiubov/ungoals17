import "styled-components";
import type { theme } from "./Theme.styled";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
    fontSizes: typeof theme.fontSizes;
  }
}