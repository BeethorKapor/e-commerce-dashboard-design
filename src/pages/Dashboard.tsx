import { CardBox } from "../components/CardBox";
import {
  UsersRound,
  ShoppingBag,
  CircleDollarSign,
  ChartNoAxesCombined,
} from "lucide-react";
import { GoalComletionCard } from "../components/GoalComletionCard";
import OrderStatusCard from "../components/OrderStatusCard";
import LastMonthTaskCard from "../components/LastMonthTaskCard";
import VisitorPerformanceCard from "../components/VisitorPerformanceCard";
import ReviewCard from "../components/ReviewCard";
import { VisitorModel } from "../utils/VisitorModel";

const Dashboard = () => {
  const data = {
    labels: ["Success", "Pending", "Failed"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#17BF6B", "#FFC632", "#ED3333"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  const legendLabels = [
    { color: "#17BF6B", label: "Success" },
    { color: "#FFC632", label: "Pending" },
    { color: "#ED3333", label: "Failed" },
  ];

  const visitorData: VisitorModel[] = [
    { label: "New", data: [10, 15, 20, 18, 25, 12] },
    { label: "Returning", data: [5, 8, 12, 10, 15, 8] },
  ];
  const reviewData = {
    rating: 4,
    reviews: [
      { label: "Excellent", value: 80 },
      { label: "Good", value: 60 },
      { label: "Average", value: 40 },
      { label: "Avg-below", value: 20 },
      { label: "Poor", value: 10 },
    ],
  };
  return (
    <>
      <div className="p-4 grid grid-cols-4 gap-4">
        <CardBox
          icon={<UsersRound className="w-16 h-16 text-[#00DCA7]" />}
          title="Total Customer"
          amount="2,32000.00"
        />
        <CardBox
          icon={<ShoppingBag className="w-16 h-16 text-[#FF6869]" />}
          title="Total Orders"
          amount="32000.00"
        />
        <CardBox
          icon={<CircleDollarSign className="w-16 h-16 text-[#6597FF]" />}
          title="Total Baiance"
          amount="$3,32000.00"
        />
        <CardBox
          icon={<ChartNoAxesCombined className="w-16 h-16 text-[#FD7F30]" />}
          title="Revenue"
          amount="50%"
        />
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <GoalComletionCard />
        <OrderStatusCard
          chartData={data}
          chartOptions={options}
          totalPercentage="100%"
          cardTitle="Order Status"
          earningsText="Total Earnings of the Month"
          legendLabels={legendLabels}
        />
        <LastMonthTaskCard />
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <VisitorPerformanceCard data={visitorData} />
        </div>
        <ReviewCard data={reviewData} />
      </div>
    </>
  );
};

export default Dashboard;
