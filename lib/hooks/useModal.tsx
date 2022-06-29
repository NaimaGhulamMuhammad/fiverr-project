import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/atoms";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    return () => setIsOpen(false);
  }, [setIsOpen]);

  return { isOpen, openModal, closeModal };
};

export default useModal;
