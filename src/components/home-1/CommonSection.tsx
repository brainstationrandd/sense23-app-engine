import Navbar from "@component/navbar/Navbar";
import React from "react";
import navbarNavigations from "@data/navbarNavigations";

type Props = {
  navOpen?:boolean;
};


const CommonSection: React.FC<Props> = ({navOpen=true}) => {
  return (
    <>
      <Navbar navListOpen={navOpen} headBar={true} navbarNavigations={navbarNavigations} navBarTitle="Options"  />
    </>
  );
};

export default CommonSection;
