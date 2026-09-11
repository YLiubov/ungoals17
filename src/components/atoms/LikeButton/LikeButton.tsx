import { useState } from "react";
import { Heart } from "lucide-react";

import { LikeButtonStyled } from "./LikeButton.styled";

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <LikeButtonStyled
      type="button"
      aria-pressed={liked}
      aria-label={liked ? "Fjern like" : "Synes godt om"}
      onClick={handleLikeClick}
    >
      <Heart fill={liked ? "currentColor" : "none"} />
    </LikeButtonStyled>
  );
};
