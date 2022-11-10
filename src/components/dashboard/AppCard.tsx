import styled from "styled-components";
import Box from "@component/Box";

const AppCard = styled(Box) `
    box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
    margin-bottom: 15px;
    &:hover {
        box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09); 
    }
`

export default AppCard;
