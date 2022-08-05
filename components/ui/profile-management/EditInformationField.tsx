import React from "react";
import { MediumText } from "../core/Text";

interface EditInformationFieldProps {
  label: string;
  method: (e: React.FormEvent) => void;
  name: string;
  value: string;
  type?: string;
  options?: string[];
}

export const EditInformationField = ({
  label,
  method,
  name,
  value,
  type,
  options,
}: EditInformationFieldProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b p-2 border-slate-300">
      <div className="flex flex-col items-start justify-center w-2/5">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row justify-end w-3/5">
        <MediumText classes="font-title text-end font-semibold text-slate-700">
          <input
            className="p-2 bg-secondary-5 rounded-md"
            style={{
              textAlign: "right",
              outline: "none",
              border: "none",
            }}
            type={type}
            id={name}
            name={name}
            placeholder={value}
            onChange={method}
          />
        </MediumText>
      </div>
    </div>
  );
};
