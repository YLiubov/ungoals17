import {
  GoalCardStyled,
  GoalHeadingStyled,
  GoalIconStyled,
  GoalNumberStyled,
  GoalTitleStyled,
} from "./GoalCard.styled";

import type {
  GoalCardProps,
} from "./GoalCard.types";

export const GoalCard = ({
  id,
  title,
  color,
  icon,
}: GoalCardProps) => {
  return (
    <GoalCardStyled
      to={`/maal/${id}`}
    //   для разных карточек можно использовать разные цвета, поэтому передаем цвет как пропс
      $color={color}
    >
      <GoalHeadingStyled>
        <GoalNumberStyled>
          {id}
        </GoalNumberStyled>

        <GoalTitleStyled>
          {title}
        </GoalTitleStyled>
      </GoalHeadingStyled>

      <GoalIconStyled
        dangerouslySetInnerHTML={{
          __html: icon,
        }}
      />
    </GoalCardStyled>
  );
};