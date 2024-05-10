import { StyledContainer } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { StyledDescription } from "../../common/Section/styled";

export const AuthorPage = () => (
  <StyledContainer>
    <h1>O autorze</h1>
    <Section
      title="Damian Kuczyński"
      body={
        <StyledDescription>
          Mam 24 lata i mieszkam w Warszawie.
          Uwielbiam sport i wszelkiego rodzaju aktywność fizyczną. Kibic piłki nożnej, oraz miłośnik nowinek technologicznych.
          W niedalekiej przyszłości mam nadzieję frontend developer.😉🤞
        </StyledDescription>
      }
    />
  </StyledContainer>
);
