import { StyledHeader, StyledSection, StyledHeaderName } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection >
        <StyledHeader>
            <StyledHeaderName>
                {title}
            </StyledHeaderName>
            {extraHeaderContent}
        </StyledHeader>
        <div>
            {body}
        </div>
    </StyledSection>
);