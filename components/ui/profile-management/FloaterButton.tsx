import { Button } from "../core/Buttons";
import Floater from "../core/Floater";

interface FloaterButtonProps {
  isEdit: boolean;
  toggleEdit: () => void;
  saveData: (e: { preventDefault: () => void }) => void;
}

const FloaterButton = ({
  isEdit,
  toggleEdit,
  saveData,
}: FloaterButtonProps) => {
  return (
    <>
      {!isEdit ? (
        <Floater classes="flex items-center justify-center mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={toggleEdit}
          >
            Edit Info
          </Button>
        </Floater>
      ) : (
        <Floater classes="flex flex-row items-center justify-between mt-4">
          <Button
            classes="w-full font-semibold py-2 px-4 rounded mr-2"
            handleClick={toggleEdit}
          >
            Cancel
          </Button>
          <Button
            classes="w-full font-semibold py-2 px-4 rounded ml-2"
            primary={true}
            handleClick={() => {
              saveData({ preventDefault: () => {} });
              toggleEdit();
            }}
          >
            Save
          </Button>
        </Floater>
      )}
    </>
  );
};

export default FloaterButton;
