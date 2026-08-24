import { goals } from "../../../data/Goals";

import divider from "../../../assets/images/Divider.svg";
import goalsLogo from "../../../assets/images/Verdensmål.svg";

import { GoalCard } from "../../molecules/GoalCard/GoalCard";

import {
  EmptyMessageStyled,
  GoalListContentStyled,
  GoalListDividerStyled,
  GoalListSectionStyled,
  GoalListTitleStyled,
  GoalLogoCardStyled,
  GoalLogoStyled,
  GoalsGridStyled,
} from "./GoalList.styled";

export const GoalList = () => {
  return (
    <GoalListSectionStyled>
      <GoalListContentStyled>
        <GoalListTitleStyled>
          FN&apos;s 17 verdensmål for bæredygtig udvikling
        </GoalListTitleStyled>

        <GoalListDividerStyled
          src={divider}
          alt=""
          aria-hidden="true"
        />

        {goals.length === 0 ? (
          <EmptyMessageStyled>
            Der er ingen verdensmål at vise
          </EmptyMessageStyled>
        ) : (
          <GoalsGridStyled>
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                id={goal.id}
                title={goal.title}
                color={goal.color}
                icon={goal.icon}
              />
            ))}

            <GoalLogoCardStyled>
              <GoalLogoStyled
                src={goalsLogo}
                alt="FN's Verdensmål"
              />
            </GoalLogoCardStyled>
          </GoalsGridStyled>
        )}
      </GoalListContentStyled>
    </GoalListSectionStyled>
  );
};
