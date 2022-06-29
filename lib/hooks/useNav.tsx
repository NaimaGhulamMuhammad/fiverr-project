import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navMenu } from "../../recoil/atoms";

const useNav = () => {
  const [isShown, setIsShown] = useRecoilState(navMenu);

  const hideNav = () => {
    setIsShown(false);
  };

  const showNav = () => {
    setIsShown(true);
  };

  useEffect(() => {
    return () => setIsShown(false);
  }, [setIsShown]);

  return { isShown, hideNav, showNav };
};

export default useNav;
