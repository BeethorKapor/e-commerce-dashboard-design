interface CardBoxProps {
  icon: JSX.Element;
  title: string;
  amount: string;
}
export const CardBox: React.FC<CardBoxProps> = ({ icon, title, amount }) => {
  return (
    <>
      <div className="bg-[var(--main-color)] shadow-lg rounded-lg p-4 flex flex-col items-center gap-2">
        <div>{icon}</div>
        <h3 className="text-base font-[500]">{title}</h3>
        <p className="text-2xl font-[600] text-gray-700">{amount}</p>
      </div>
    </>
  );
};
