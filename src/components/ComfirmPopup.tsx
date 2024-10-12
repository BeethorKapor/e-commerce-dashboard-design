import { useEffect } from "react";
import PropTypes from "prop-types";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import QuestionImage from "../assets/question.png";

interface ComfirmPopUpProps {
  image?: string;
  title: string;
  text: string;
  comfirmText?: string;
  cancelText?: string;
  handleCancel: () => void;
  handleComfirm: () => void;
}
const ComfirmPopUp = ({ image, title, text, ...props }: ComfirmPopUpProps) => {
  const { comfirmText, cancelText, handleCancel, handleComfirm } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="w-full h-screen grid place-items-center fixed top-0 left-0 z-[9999] !important"
      style={{ background: "rgba(1, 2, 0, 0.4)" }}
      onClick={handleCancel}
    >
      <div className="w-[500px] grid place-items-center min-h-[420px] bg-white rounded-[8px] model">
        <div className="flex flex-col p-2 py-6 justify-center gap-y-3">
          <div className=" flex justify-center items-center flex-col gap-3">
            <h3 className=" text-xl font-bold">
              {title ? title : "do you want to logout?"}
            </h3>
            <p className=" text-sm font-medium">
              {text
                ? text
                : `You are about to log out. Are you sure you want to continue?`}
            </p>
          </div>
          {image ? (
            <img
              src={image}
              alt="question_image"
              className=" w-[60%] mx-auto mt-2"
            />
          ) : (
            <img
              src={QuestionImage}
              alt="question_image"
              className=" w-[60%] mx-auto mt-2"
            />
          )}
          <div className="w-full flex justify-center mt-6 gap-10">
            <SecondaryButton
              text={cancelText ? cancelText : "Cancel"}
              type={"button"}
              handleClick={handleCancel}
              icon={null}
              bg="white"
            />
            <PrimaryButton
              text={comfirmText ? comfirmText : "Comfirm"}
              type={"button"}
              handleClick={handleComfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ComfirmPopUp.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  comfirmText: PropTypes.string,
  cancelText: PropTypes.string,
  handleCancel: PropTypes.func,
  handleComfirm: PropTypes.func,
};
export default ComfirmPopUp;
