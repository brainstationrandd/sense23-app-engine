import React, { useEffect, useRef, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import { StyledCategory } from "./CategoryStyle";

export interface CategoriesProps {
  open?: boolean;
  children: React.ReactElement;
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

const Categories: React.FC<CategoriesProps> = ({ open: isOpen, children,navData }) => {
  const [open, setOpen] = useState(isOpen);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!isOpen) setOpen(!open);
  };

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <StyledCategory open={open}>
      {React.cloneElement(children, {
        open,
        className: `${children.props.className} cursor-pointer`,
        onClick: toggleMenu,
      })}
      <CategoryDropdown open={open} navData={navData}/>
    </StyledCategory>
  );
};

export default Categories;
