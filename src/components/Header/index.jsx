import { styled } from "styled-components";
import { Field } from "@components/Field";

const StylizedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212px;
    }
`;

export const Header = () => {
    return(
        <StylizedHeader>
            <img src="/assets/logo.png" alt="Logomarca do Space App" />
            <Field />
        </StylizedHeader>
    );
}