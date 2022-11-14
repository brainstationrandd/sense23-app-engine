import {
    Modal,
    ModalLayout,
    ModalCloseButton,
    ModalContent,
} from "./index.styled";
import { useRef } from "react";
import useOnClickOutside from "./use-on-click-outside";
import IconButton from "@component/buttons/IconButton";
import Icon from "@component/icon/Icon";

const CustomModalLayout = ({
    handleModalClose,
    children,
    isModalOpen,
    size,
}) => {
    const ref = useRef();
    useOnClickOutside(ref, handleModalClose);

    return (
        <ModalLayout active={isModalOpen}>
            <Modal ref={ref} className="modal-content" size={size}>
                <ModalCloseButton
                    onClick={handleModalClose}
                    color="#eeeeee"
                    size="small"
                    p="5px"
                    bg="#D23F57"
                >
                    <Icon size="1.4rem">close</Icon>
                </ModalCloseButton>

                <ModalContent size={size}>{children}</ModalContent>
            </Modal>
        </ModalLayout>
    );
};
export default CustomModalLayout;
