import { Heart } from "lucide-react";

import { GoalCardStyled } from "./GoalCard.styled";

import type {
  GoalCardProps,
} from "./GoalCard.types";

export const GoalCard = ({
  id,
  title,
  color,
  icon,
  isLiked,
}: GoalCardProps) => {
  return (
    <GoalCardStyled
      to={`/maal/${id}`}
    //   для разных карточек можно использовать разные цвета, поэтому передаем цвет как пропс
      $color={color}
    >
      <div className="goalCardHeading">
        <span className="goalCardNumber">{id}</span>
        <h3>{title}</h3>
      </div>

      <div
        className="goalCardIcon"
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />

      {isLiked && (
        <span className="goalCardLikedIcon" aria-hidden="true">
          <Heart />
        </span>
      )}
    </GoalCardStyled>
  );
};
