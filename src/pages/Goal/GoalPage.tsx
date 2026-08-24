import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { GoalList } from "../../components/organisms/GoalList/GoalList";
import { goals } from "../../data/Goals.ts";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { NotFoundPage } from "../NotFound/NotFoundPage";

import {
  GoalDescriptionStyled,
  GoalVideoStyled,
} from "./GoalPage.styled.ts";

export const GoalPage = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const goal = goals.find(
    (currentGoal) => currentGoal.id === id,
  );

  if (!goal) {
    return <NotFoundPage />;
  }

  const descriptionParagraphs = goal.description
    .replaceAll("&nbsp;", " ")
    .split("\n\n");

  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
      >
        <GoalVideoStyled
          src={goal.video_url}
          title={`Video om mål ${goal.id}: ${goal.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <GoalDescriptionStyled>
          {descriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </GoalDescriptionStyled>
      </ContentWrapper>

      <GoalList />
    </>
  );
};
