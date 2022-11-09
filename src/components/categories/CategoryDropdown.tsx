import navigations from "@data/navigations";
import React from "react";
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";
import { StyledCategoryDropdown } from "./CategoryDropdownStyle";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2";

export interface CategoryDropdownProps {
  open: boolean;
  position?: "absolute" | "relative";
  navData?:{
    icon: string;
    title: string;
    href: string;
    menuComponent: string;
    menuData: {
        categories: {
            title: string;
            href: string;
            subCategories: {
                title: string;
                href: string;
                imgUrl: string;
            }[];
        }[];
    };
  }[]
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  open,
  position,
  navData=navigations
}) => {
  const megaMenu = {
    MegaMenu1,
    MegaMenu2,
  };

  return (
    <StyledCategoryDropdown open={open} position={position}>
      {navData.map((item) => {
        let MegaMenu = megaMenu[item.menuComponent];

        return (
          <CategoryMenuItem
            title={item.title}
            href={item.href}
            icon={item.icon}
            caret={!!item.menuData}
            key={item.title}
          >
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>
        );
      })}
    </StyledCategoryDropdown>
  );
};

CategoryDropdown.defaultProps = {
  position: "absolute",
};

export default CategoryDropdown;
