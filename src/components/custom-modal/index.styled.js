import IconButton from "@component/buttons/IconButton";
import styled from "styled-components";

export const ModalLayout = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  transition: 0.3s;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  > div {
    transition: 0.3s;
    transform: translateY(${({ active }) => (active ? "0" : "-20px")});
  }
  @media (max-width: 610px) {
    padding: 10vw 0;
  }
`;



export const Modal = styled.div`
  background-color: white;
  
  width: ${props => {
    switch (props.size) {
      case 'xl':
        return `910px`
        break;
      case 'lg':
        return `750px`
        break;
      case 'md':
        return `550px`
        break;
      case 'sm':
        return `350px`
          break;
      case 'fluid':
        return `98%`
          break;
      default :
        return `550px`
        break;
      }
    }
  };

  margin: auto;
  border-radius: 10px;
  position: relative;
  @media (max-width: 800px) {
    max-width: 80%;
  }

  @media (max-width: 610px) {
    width: 90vw;
    border-radius: 5vw;
  }
`;
export const ModalTitle = styled.h2`
  margin: 0;
  padding: 48px 32px 0 32px;

  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 24px;
    line-height: 110%;
    padding: 30px 20px 0 20px;
  }
  @media (max-width: 610px) {
    padding: 5vw 5vw 0 5vw;
    font-size: 6.5vw;
    line-height: 8vw;
    width: 90%;
  }
`;
export const ModalContent = styled.div`
  padding: 20px;
  min-height: 100px;
`;
export const ModalCloseButton = styled(IconButton)`
  position: absolute;
  right: 15px;
  top: 10px;
  &:hover {
    background: #932d3d;
    color: #ffffff;
  }
`;
export const ModalBackButton = styled.button`
  background-color: #fafafa;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  outline: none;
  cursor: pointer;
  margin-right: 16px;
  @media (max-width: 610px) {
    width: 6.5vw;
    height: 6.5vw;
    margin-right: 5vw;
  }
`;
