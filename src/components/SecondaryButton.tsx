import PropTypes from "prop-types";

interface SecondaryButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  icon: React.ReactNode;
  bg: string;
  handleClick: () => void;
}
const SecondaryButton = ({
  text,
  type,
  icon,
  bg,
  handleClick,
}: SecondaryButtonProps) => {
  return (
    <div className="w-full">
      <button
        style={{
          backgroundColor: "#FF6869",
          color: bg ? "white" : "",
        }}
        type={type ? type : "button"}
        className={`flex w-full justify-center  gap-2 items-center   font-[400] hover:shadow-md  duration-100 text-sm  px-[32px] py-[12px] rounded-[4px]`}
        onClick={handleClick}
      >
        {icon ? icon : null} {text ? text : "Secondary Button"}
      </button>
    </div>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  handleClick: PropTypes.func,
  bg: PropTypes.string,
};

export default SecondaryButton;
