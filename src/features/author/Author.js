import { StyledContainer } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { StyledDescription } from "../../common/Section/styled";

export default () => (
  <StyledContainer>
    <h1>O autorze</h1>
    <Section
      title="Damian Kuczyński"
      body={
        <StyledDescription>
          Mam 23 lata i przez ostatnie 10 lat grałem w piłkę nożną.
          W tym czasie miałem okazję występować w drużynach juniorskich takich klubów jak<strong> Polonia Warszawa</strong>, czy <strong>Ruch Chorzów</strong>. Uwielbiam sport i wszelkiego rodzaju aktywność fizyczną.
          Obecnie zajmuję się sprzedażą artykułów i kosmetyków fryzjerskich online w hurtowni kosmetycznej.
        </StyledDescription>
      }
    />
  </StyledContainer>
);