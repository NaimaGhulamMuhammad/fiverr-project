import { Dispatch, SetStateAction } from "react";

interface FormInputProps {
  inputState: any;
  setInputState: Dispatch<SetStateAction<any>>;
  inputType?: string;
  inputClasses?: string;
  placeholder?: string;
  noShadow?: boolean;
  disabled?: boolean;
  rows?: number;
  enterFunction?: any;
}

const FormInput = ({
  inputState,
  setInputState,
  inputType,
  inputClasses,
  placeholder,
  noShadow,
  disabled,
  rows,
  enterFunction,
}: FormInputProps) => {
  return (
    <div className="w-full flex flex-col">
      {rows ? (
        <textarea
          rows={rows}
          disabled={disabled}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          className={`w-full ${
            !noShadow && "drop-shadow"
          } resize-none shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none ${inputClasses}`}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (enterFunction && e.key == "Enter") {
              enterFunction();
            }
          }}
        />
      ) : (
        <input
          disabled={disabled}
          type={inputType ? inputType : "text"}
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          className={`w-full ${
            !noShadow && "drop-shadow"
          } shadow-inner px-4 py-2.5 rounded-lg border border-back text-light text-base outline-none ${inputClasses}`}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (enterFunction && e.key == "Enter") {
              enterFunction();
            }
          }}
        />
      )}
    </div>
  );
};

export default FormInput;
