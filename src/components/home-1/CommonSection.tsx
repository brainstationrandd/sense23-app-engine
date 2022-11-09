import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import React, { Fragment } from "react";
import navbarNavigations from "@data/navbarNavigations";

type Props = {
  navOpen?:boolean;
};


const CommonSection: React.FC<Props> = ({navOpen=true}) => {
  return (
    <Fragment>
      <Navbar navListOpen={navOpen} headBar={true} navbarNavigations={navbarNavigations} navBarTitle="Options"  />
      <Box bg="gray.white" mb="3.75rem">
        <Container pb="2rem">        
        </Container>
      </Box>
    </Fragment>
  );
};

export default CommonSection;
