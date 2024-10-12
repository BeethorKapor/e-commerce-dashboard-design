import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { TrendingUpDown } from "lucide-react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["05 Dec", "10 Dec", "15 Dec", "20 Dec", "25 Dec"],
  datasets: [
    {
      label: "Goal Completion",
      data: [120, 150, 100, 170, 130],
      borderColor: "rgba(53, 162, 235, 1)",
      backgroundColor: "rgba(53, 162, 235, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    y: {
      min: 50,
      max: 200,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
export const GoalComletionCard: React.FC = () => {
  return (
    <div className="bg-[var(--main-color)] shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-[600]">Goal Completion</h3>
        {/* ไอคอน */}
        <TrendingUpDown className="text-[#0AC277] w-6 h-6" />
      </div>
      <div className="mb-6">
        <Line data={data} options={options} />
      </div>
      <div className="text-center">
        <h4 className="text-base font-[500]">December Month</h4>
        <p className="text-[var(--text-color)] text-sm font[400]">
          Avg Goal Completion 79%
        </p>
      </div>
    </div>
  );
};
