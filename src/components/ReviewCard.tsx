import { Star, RefreshCw } from "lucide-react";
interface ReviewData {
  rating: number;
  reviews: {
    label: string;
    value: number;
  }[];
}

const ReviewCard: React.FC<{ data: ReviewData }> = ({ data }) => {
  return (
    <div className="bg-[var(--main-color)] shadow-lg rounded px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-[600] text-black mb-2">Customer Review</h2>
        <RefreshCw className="text-[#0AC277] w-6 h-6" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 text-[#FFBB0B] ${
                i < data.rating ? "fill-current" : ""
              }`}
            />
          ))}
        </div>
        <div className="flex items-center">
          <span className="text-xl font-[600]">{data.rating}.0</span>
          <p className="ml-2 text-[var(--text-color)] text-sm font-[500]">
            {" "}
            out of 5 stars
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        {data.reviews.map((review) => (
          <div key={review.label} className="flex items-center mb-1">
            <p className="ml-2 text-[var(--text-color)] text-sm font-[500] w-32">
              {review.label}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${review.value}%`,
                  backgroundColor:
                    review.label === "Excellent"
                      ? "#17BF6B"
                      : review.label === "Good"
                      ? "#41D98D"
                      : review.label === "Average"
                      ? "#FFC632"
                      : review.label === "Avg-below"
                      ? "#E5A53C"
                      : "#ED3333",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
