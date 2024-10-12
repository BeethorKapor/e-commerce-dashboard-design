import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TrendingUp } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

interface ChartOptions {
  plugins: {
    legend: {
      display: boolean;
    };
  };
}
interface OrderStatusCardProps {
  chartData: ChartData;
  chartOptions?: ChartOptions;
  totalPercentage: string;
  cardTitle: string;
  earningsText: string;
  legendLabels: { color: string; label: string }[];
}

const OrderStatusCard: React.FC<OrderStatusCardProps> = ({
  chartData,
  chartOptions,
  totalPercentage,
  cardTitle,
  earningsText,
  legendLabels,
}) => {
  return (
    <div className="bg-[var(--main-color)] shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-[600]">{cardTitle}</h3>
        <TrendingUp className="text-[#0AC277] w-6 h-6" />
      </div>
      <p className="text-[var(--text-color)] font-[400] mb-4">{earningsText}</p>
      <div className="flex justify-center items-center mb-6">
        <div className="relative -z-5">
          <Doughnut
            data={chartData}
            options={chartOptions}
            width={150}
            height={150}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-semibold">{totalPercentage}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        {legendLabels.map((legend, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className={`w-3 h-3 rounded-full`}
              style={{ backgroundColor: legend.color }}
            ></span>
            <span className="text-sm font-[500]">{legend.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusCard;
