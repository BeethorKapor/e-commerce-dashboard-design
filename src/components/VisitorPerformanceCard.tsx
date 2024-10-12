import { Line } from "react-chartjs-2";
import { VisitorModel } from "../utils/VisitorModel";

const VisitorPerformanceCard: React.FC<{ data: VisitorModel[] }> = ({
  data,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Visitor Performance",
      },
    },
  };

  const labels = ["SPAIN", "CANADA", "USA", "JAPAN", "CHINA", "BANGLADESH"];

  const chartData = {
    labels,
    datasets: data.map((item) => ({
      label: item.label,
      data: item.data,
      borderColor: item.label === "New" ? "blue" : "lightblue",
      backgroundColor:
        item.label === "New"
          ? "rgba(53, 162, 235, 0.2)"
          : "rgba(75, 192, 192, 0.2)",
      tension: 0.7,
    })),
  };

  return (
    <div className="bg-[var(--main-color)] shadow-lg rounded-lg px-4 py-6">
      <h2 className="text-xl font-[600] mb-4">Visitor Performance</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default VisitorPerformanceCard;
