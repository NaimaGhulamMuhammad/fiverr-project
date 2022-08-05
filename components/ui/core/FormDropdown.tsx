import { Dispatch, SetStateAction } from "react";
import { BsChevronDown } from "react-icons/bs";

interface FormDropdownProps {
  dropdownValue: string | number;
  setDropdownValue: Dispatch<SetStateAction<string | number>>;
  options: string[] | number[];
  containerClasses?: string;
  dropdownMenuOpen: boolean;
  setDropdownMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const FormDropdown = ({
  dropdownValue,
  setDropdownValue,
  options,
  containerClasses,
  dropdownMenuOpen,
  setDropdownMenuOpen,
}: FormDropdownProps) => {
  return (
    <div className={`relative p-1 ${containerClasses}`}>
      <div
        className="bg-white flex items-center justify-between w-full border rounded-lg px-2 py-2.5  drop-shadow"
        onClick={() => setDropdownMenuOpen((prev) => !prev)}
      >
        {dropdownValue}
        <BsChevronDown
          className={`transition-transform duration-200 ${
            dropdownMenuOpen && "-rotate-180"
          }`}
        />
      </div>
      {dropdownMenuOpen && (
        <div className="mt-2 flex flex-col z-10 absolute bg-slate-200 w-full p-2 rounded-lg border border-slate-400 max-h-40 overflow-y-scroll">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="mb-1 w-full last:mb-0"
              onClick={() => {
                setDropdownValue(option);
                setDropdownMenuOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FormDropdown;
