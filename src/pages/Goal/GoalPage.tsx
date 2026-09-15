import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { LikeButton } from "../../components/atoms/LikeButton/LikeButton";
import { GoalList } from "../../components/organisms/GoalList/GoalList";
import { goals } from "../../data/Goals.ts";
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper";
import { NotFoundPage } from "../NotFound/NotFoundPage";

import { GoalPageStyled } from "./GoalPage.styled";

type GoalPageProps = {
  likedGoalIds: string[];
  onToggleGoalLike: (goalId: string) => void;
};

export const GoalPage = ({
  likedGoalIds,
  onToggleGoalLike,
}: GoalPageProps) => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const goal = goals.find((currentGoal) => currentGoal.id === id);

  if (!goal) {
    return <NotFoundPage />;
  }

  const isLiked = likedGoalIds.includes(goal.id);

  const descriptionParagraphs = goal.description
    .replaceAll("&nbsp;", " ")
    .split("\n\n");

  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
      >
        <GoalPageStyled>
          <div className="goalPageMedia">
            <iframe
              src={goal.video_url}
              title={`Video om mål ${goal.id}: ${goal.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <LikeButton
              isLiked={isLiked}
              onToggle={() => onToggleGoalLike(goal.id)}
            />
          </div>

          <div className="goalPageDescription">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GoalPageStyled>
      </ContentWrapper>

      <GoalList likedGoalIds={likedGoalIds} />
    </>
  );
};
