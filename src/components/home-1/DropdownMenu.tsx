import React from "react";
import Accordion from "../accordion/Accordion";
import AccordionHeader from "../accordion/AccordionHeader";
import Card from "../Card";
import { H6, Paragraph, SemiSpan } from "../Typography";
import Icon from "@component/icon/Icon";
import FlexBox from '../FlexBox';
import { SubmenuItem } from "./subMenuItem";

const DropdownMenu = ({categroyList,CategoryTitle}) => {
  return (
    <Card p="18px 27px" elevation={5}>
      <H6 mb="10px">{CategoryTitle}</H6>

      {categroyList.map((item) =>
        item.subCategories ? (
          <Accordion key={item.title} expanded>
            <AccordionHeader
              px="0px"
              py="6px"
              color="text.muted"
              // justifyContent="flex-start"
            >
              <SemiSpan className="cursor-pointer" mr="9px">
                {item.title}
              </SemiSpan>
            </AccordionHeader>
            {item.subCategories.map((name) => (
              <SubmenuItem alignItems="center" pl="1.2rem">
                <Icon size="1rem">tablet</Icon>
                <Paragraph
                  className="cursor-pointer"
                  fontSize="14px"
                  color="text.muted"
                  pl="22px"
                  py="6px"
                  key={name}
                >
                  {name}
                </Paragraph>
              </SubmenuItem>
            ))}
          </Accordion>
        ) : (
          <SubmenuItem alignItems="center" pl="1.2rem">
            <Icon size="1rem">tablet</Icon>
            <Paragraph
              className="cursor-pointer"
              fontSize="14px"
              color="text.muted"
              py="6px"
              key={item.title}
            >
              {item.title}
            </Paragraph>
          </SubmenuItem>
        )
      )}

    </Card>
  );
};


export default DropdownMenu;
