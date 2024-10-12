import React from "react";

const LastMonthTaskCard: React.FC = () => {
  const tasks = [
    { title: "Smart Phone buy with back-part", time: "3d ago" },
    { title: "Purchase report", time: "4d ago" },
    { title: "New Product Add", time: "5d ago" },
    { title: "Product tag Add", time: "5d ago" },
    { title: "Product Variable & Price Set", time: "5d ago" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-[600]">Last Month Task</h3>
        <a href="/dashboard" className="text-[#555757] text-sm">
          See all
        </a>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <button className="flex items-center space-x-1 text-[#1868F2]">
          <span className="w-2 h-2 bg-[#1868F2] rounded-full"></span>
          <span>All</span>
        </button>
        <button className="flex items-center space-x-1 text-[#555757]">
          <span className="w-2 h-2 bg-[#555757] rounded-full"></span>
          <span>Delivered</span>
        </button>
        <button className="flex items-center space-x-1 text-[#555757]">
          <span className="w-2 h-2 bg-[#555757] rounded-full"></span>
          <span>Order</span>
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-[#091913] font-[500] text-sm">
            #New Category Add
          </h4>
          <span className="text-[#555757] font-[400] text-sm">last week</span>
        </div>

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-[#555757] text-xs font-[400]"
          >
            <p>{task.title}</p>
            <span>{task.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastMonthTaskCard;
