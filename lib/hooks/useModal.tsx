import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/atoms";

const useModal = () => {
  const [openModal, setOpenModal] = useRecoilState(modalState);

  const closeModal = () => {
    setOpenModal(null);
  };

  const setModal = (modal: string) => {
    setOpenModal(modal);
  };

  useEffect(() => {
    return () => setModal(null);
  }, [setOpenModal]);

  return { openModal, setModal, closeModal };
};

export default useModal;
