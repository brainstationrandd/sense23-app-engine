import { useEffect } from "react";
import CustomModalLayout from "./index.layout";

const CustomModal = ({ isModalOpen, handleModalClose, children, size }) => {
    const closeModalByEsc = (e) => {
        if (e.keyCode === 27) handleModalClose();
    };

    useEffect(() => {
        window.addEventListener("keydown", closeModalByEsc);

        return () => {
            window.removeEventListener("keydown", closeModalByEsc);
        };
    }, [isModalOpen]);

    return (
        <CustomModalLayout
            size={size}
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
        >
            {children}
        </CustomModalLayout>
    );
};

export default CustomModal;
