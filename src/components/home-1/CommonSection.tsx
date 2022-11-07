import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import React, { Fragment } from "react";

const CommonSection: React.FC = () => {
  return (
    <Fragment>
      <Navbar navListOpen={true} />
      <Box bg="gray.white" mb="3.75rem">
        <Container pb="2rem">
         
        </Container>
      </Box>
    </Fragment>
  );
};

export default CommonSection;
