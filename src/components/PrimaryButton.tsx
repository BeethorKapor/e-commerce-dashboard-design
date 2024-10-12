import PropTypes from "prop-types";

interface PrimaryButtonProps {
  text: string | null | undefined;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactElement;
  disabled?: boolean;
  handleClick?: () => void;
}
const PrimaryButton = ({
  text,
  type,
  icon,
  disabled,
  handleClick,
}: PrimaryButtonProps) => {
  return (
    <div className="w-full">
      <button
        type={type ? type : "button"}
        className={`
          flex w-full justify-center gap-2 items-center bg-[#6597FF] text-[#FFFFFF] font-[400] hover:shadow-md  duration-100 text-sm  px-[32px] py-[12px] rounded-[4px]
        `}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon ? icon : null} {text ? text : "Primary Button"}
      </button>
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default PrimaryButton;
