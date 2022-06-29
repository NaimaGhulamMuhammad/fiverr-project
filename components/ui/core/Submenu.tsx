import { Link } from "react-router-dom";

interface SubmenuProps {
  children: React.ReactNode;
  dropShadow?: true | false;
  classes?: string;
  noCursor?: true | false;
  hoverEffect?: true | false;
  href?: string;
}

export const Submenu = ({
  children,
  dropShadow,
  classes,
  noCursor,
  hoverEffect,
  href,
}: SubmenuProps) => {
  return (
    <Link to={href}>
      <div
        className={`flex flex-row items-center border rounded-lg border-gray-300 py-1 px-2 my-0.5 ${
          dropShadow ? "drop-shadow-md" : "shadow-sm"
        } ${noCursor ? "" : "cursor-pointer"} ${classes} ${
          hoverEffect ? "hover:scale-[1.02] transition ease-in" : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};
