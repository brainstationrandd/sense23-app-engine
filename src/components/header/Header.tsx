import React from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import SearchBox from "../search-box/SearchBox";
import StyledHeader from "./HeaderStyle";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox justifyContent="center" alignItems={'center'} flex="1 1 0">
          <h1>Sense 23 App Engine</h1>
          <SearchBox />
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
