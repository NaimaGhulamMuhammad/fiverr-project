import { MediumText, FadedSmallText } from "./Text";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

interface AccordionProps {
  classes?: string;
  title?: string;
  content: React.ReactNode;
  handleClick: () => {};
  open?: true | false;
  downArrowClasses?: string;
  rightArrowClasses?: string;
}

const Accordion = ({
  classes,
  title,
  content,
  handleClick,
  open,
  downArrowClasses,
  rightArrowClasses,
}: AccordionProps) => {
  return (
    <div
      className={`${classes} border-b border-gray-300 p-2 rounded`}
      onClick={() => handleClick()}
    >
      <div className="flex justify-between items-center">
        <MediumText>{title}</MediumText>
        {open ? (
          <AiOutlineDown className={downArrowClasses} />
        ) : (
          <AiOutlineRight className={rightArrowClasses} />
        )}
      </div>
      {open ? <FadedSmallText>{content}</FadedSmallText> : <></>}
    </div>
  );
};

export default Accordion;
