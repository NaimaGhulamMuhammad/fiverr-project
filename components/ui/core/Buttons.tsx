import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  primary?: boolean;
  full?: boolean;
  classes: string;
  handleClick: () => void;
}

export const Button = ({
  href,
  children,
  primary,
  full,
  classes,
  handleClick,
}: ButtonProps) => {
  return href != undefined ? (
    <Link to={href}>
      <button
        className={`px-6 py-2 my-2 rounded text-white hover:scale-105 hover:shadow-md ${
          primary ? "bg-primary-100" : "bg-secondary-100"
        } ${full ? "w-full" : ""} ${classes}`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`px-6 py-2 my-2 rounded text-white hover:scale-105 hover:shadow-md ${
        primary ? "bg-primary-100" : "bg-secondary-100"
      } ${full ? "w-full" : ""} ${classes}`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({
  href,
  children,
  primary,
  full,
  classes,
  handleClick,
}: ButtonProps) => {
  return href != undefined ? (
    <Link to={href}>
      <button
        className={`px-6 py-2 my-2 rounded border ${
          primary ? "border-primary-100" : "border-secondary-100"
        } ${full ? "w-full" : ""} ${classes}`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`px-6 py-2 my-2 rounded border ${
        primary ? "border-primary-100" : "border-secondary-100"
      } ${full ? "w-full" : ""} ${classes}`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};
