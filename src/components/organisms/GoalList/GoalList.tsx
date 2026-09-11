import { goals } from "../../../data/Goals";

import divider from "../../../assets/images/Divider.svg";
import goalsLogo from "../../../assets/images/Verdensmål.svg";

import { GoalCard } from "../../molecules/GoalCard/GoalCard";

import { GoalListStyled } from "./GoalList.styled";

export const GoalList = () => {
  return (
    <GoalListStyled>
      <div className="goalListContent">
        <h2>
          FN&apos;s 17 verdensmål for bæredygtig udvikling
        </h2>

        <img
          className="goalListDivider"
          src={divider}
          alt=""
          aria-hidden="true"
        />

        {goals.length === 0 ? (
          <p className="goalListEmpty">
            Der er ingen verdensmål at vise
          </p>
        ) : (
          <div className="goalListGrid">
            {goals.map((goal) => (
              <GoalCard
                key={goal.id}
                id={goal.id}
                title={goal.title}
                color={goal.color}
                icon={goal.icon}
              />
            ))}

            <div className="goalListLogoCard">
              <img
                className="goalListLogo"
                src={goalsLogo}
                alt="FN's Verdensmål"
              />
            </div>
          </div>
        )}
      </div>
    </GoalListStyled>
  );
};
