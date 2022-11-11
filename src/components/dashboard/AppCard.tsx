import styled from "styled-components";
import Box from "@component/Box";

const AppCard = styled(Box) `
    box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
    margin-bottom: 15px;
    button {
        margin-right: 10px;
    }
    &:hover {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        button {
            background: #F178B6;
        }
    }
`

export default AppCard;
