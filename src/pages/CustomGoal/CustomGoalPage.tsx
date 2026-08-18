import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

export const CustomGoalPage = () => {
  return (
    <ContentWrapper
      title="Byg dit eget mål"
      description="Her kan du bygge dit eget mål og vælge en passende farve."
      showTitle={true}
    >
      <h2>Mangler der et mål?</h2>

      <form>
        <div>
          <label htmlFor="goalText">Måltekst:</label>

          <input
            id="goalText"
            name="goalText"
            type="text"
            placeholder="Indtast titel på mål"
          />
        </div>

        <div>
          <label htmlFor="goalColor">Farvekode:</label>

          <input
            id="goalColor"
            name="goalColor"
            type="text"
            placeholder="Indtast farvekode i hexadecimal værdi"
          />
        </div>
      </form>
    </ContentWrapper>
  );
};