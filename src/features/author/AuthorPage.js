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
          Mam 23 lata i przez ostatnie 10 lat grałem w piłkę nożną. Obecnie uczę się frontendu w YouCode z nadzieją, że uda mi się za jakiś czas znaleźć swoją pierwszą pracę jako programista. 
          Uwielbiam korzystać z nowych wynalazków technologicznych i sprawdzać ich możliwości. Naturalnie moją drugą pasją jest piłka nożna jak i również wszelkiego rodzaju aktywność fizyczna.  
        </StyledDescription>
      }
    />
  </StyledContainer>
);
