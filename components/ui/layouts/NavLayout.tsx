import NavigationMenu from "./NavigationMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const NavLayout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("/");

  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    {
      name: "Home",
      link: "/home",
      img_name: "home",
    },
    {
      name: "Consult",
      link: "/consult",
      img_name: "consult",
    },
    {
      name: "Packages",
      link: "/packages",
      img_name: "package",
    },
    {
      name: "Profile",
      link: "/profile",
      img_name: "profile",
    },
  ];

  return (
    <div className="fixed bottom-0 z-40 w-full">
      <NavigationMenu menuItems={menuItems} selectedItem={selectedItem} />
      <div>{children}</div>
    </div>
  );
};

export default NavLayout;
