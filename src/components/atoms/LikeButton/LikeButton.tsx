import { Heart } from "lucide-react";

import type { LikeButtonProps } from "./LikeButton.types";
import {
  LikeButtonStyled,
  LikeButtonWrapper,
} from "./LikeButton.styled";

export const LikeButton = ({ isLiked, onToggle }: LikeButtonProps) => {
  return (
    <LikeButtonWrapper>
      <LikeButtonStyled
        type="button"
        aria-pressed={isLiked}
        aria-label={isLiked ? "Fjern like" : "Synes godt om"}
        onClick={onToggle}
      >
        <Heart fill={isLiked ? "currentColor" : "none"} />
      </LikeButtonStyled>
    </LikeButtonWrapper>
  );
};
