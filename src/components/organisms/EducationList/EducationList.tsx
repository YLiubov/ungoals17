import { useEffect, useState } from "react";

import { EducationCard } from "../../molecules/EducationCard/EducationCard";

import { EducationListStyled } from "./EducationList.styled";
import type { EducationSubject } from "./EducationList.types";

const EDUCATION_ENDPOINT = "http://localhost:4000/api/education";

export const EducationList = () => {
  const [subjects, setSubjects] = useState<EducationSubject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(EDUCATION_ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: EducationSubject[] = await response.json();

        setSubjects(data);
      } catch {
        setError("Undervisningsfagene kunne ikke hentes.");
      } finally {
        setIsLoading(false);
      }
    };

    void fetchEducation();
  }, []);

  if (isLoading) {
    return (
      <EducationListStyled>
        <p className="educationListStatus">Henter undervisningsfag...</p>
      </EducationListStyled>
    );
  }

  if (error) {
    return (
      <EducationListStyled>
        <p className="educationListStatus educationListError" role="alert">
          {error}
        </p>
      </EducationListStyled>
    );
  }

  if (subjects.length === 0) {
    return (
      <EducationListStyled>
        <p className="educationListStatus">
          Der er ingen undervisningsfag at vise.
        </p>
      </EducationListStyled>
    );
  }

  return (
    <EducationListStyled>
      <div className="educationListGrid">
        {subjects.map((subject) => (
          <EducationCard
            key={subject.id}
            name={subject.name}
            color={subject.color}
          />
        ))}
      </div>
    </EducationListStyled>
  );
};
