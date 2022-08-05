import { SmallText, MediumText } from "../core/Text";

interface ViewInformationFieldProps {
  label: string;
  value: string;
  suffix?: string;
}
export const ViewInformationField = ({
  label,
  value,
  suffix,
}: ViewInformationFieldProps) => {
  return (
    <div className="flex w-full items-center justify-between border-b py-4 border-slate-300 px-2">
      <div className="flex flex-col items-start justify-center">
        <MediumText classes="font-general text-slate-700">{label}</MediumText>
      </div>
      <div className="flex flex-row justify-end">
        <MediumText classes="font-title font-semibold text-slate-700">
          {value}
        </MediumText>
        {suffix && (
          <SmallText classes="font-general text-slate-700">{suffix}</SmallText>
        )}
      </div>
    </div>
  );
};
