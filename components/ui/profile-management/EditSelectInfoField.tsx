import React from "react";
import { MediumText } from "../core/Text";

interface EditSelectInfoFieldProps {
  label: string;
  method: (e: React.FormEvent) => void;
  name: string;
  options: string[];
}

export const EditSelectInfoField = ({
  label,
  method,
  name,
  options,
}: EditSelectInfoFieldProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b p-2 border-slate-300">
      <div className="flex flex-col items-start justify-center">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row justify-end">
        <MediumText classes="font-title text-end font-semibold text-slate-700">
          <select
            className="p-2 bg-secondary-5 rounded-md"
            style={{
              textAlign: "right",
            }}
            name={name}
            onChange={method}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </MediumText>
        {}
      </div>
    </div>
  );
};
