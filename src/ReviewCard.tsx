
import React from "react";

// 1️⃣ Define the props interface
interface ReviewCardProps {
  imgSrc: string;
  name: string;
  role: string;
  rating?: number; // optional, default to 4.8
  reviewText?: string; // optional, default text
}

// 2️⃣ Component with props
const ReviewCard: React.FC<ReviewCardProps> = ({
  imgSrc,
  name,
  role,
  rating = 4.8,
  reviewText = "Your video is excellent! I learned all the sorting algorithms from your playlist. Wishing you the best for your placements. After fully watching this video, I realized that the support is still low, but keep creating great content — it takes time for it to reach more people. All the best!",
}) => {
  return (
    <div className="min-w-[330px] h-[440px] text-white rounded-[25px] p-6 border-l-2 border-r-2 border-gray-300 bg-[#281922] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img src={imgSrc} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 transform -translate-x-2">
          <p
            className="text-white text-[16px] font-semibold"
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif',
              letterSpacing: "0.5px",
            }}
          >
            {rating}
          </p>
          <img src="star.svg" alt="rating star" className="h-5 w-5 pt-1" />
        </div>
      </div>

      {/* Review Text */}
      <div className="flex flex-col items-start justify-start mb-6 ">
        <p className="text-sm text-white leading-relaxed text-start px-2"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif'}}>
          {reviewText}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
        <span>May 20, 2025</span>
        <img src="Amazonsymbol.png" alt="Amazon" className="h-10" />
      </div>
    </div>
  );
};

export default ReviewCard;

