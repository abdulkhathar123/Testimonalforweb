// components/ReviewCard.tsx


const ReviewCard = () => {
  return (
    <div className="min-w-[330px] max-h-120  bg-gradient-to-b from-[#1b1b1f] to-[#0f0f10] text-white rounded-xl p-6 border border-[#4b0082]">
      {/* Profile Section */}
      <div className="flex items-center justify-between mb-20">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Sivakumar</p>
            <p className="text-sm text-gray-400">Lead UX/UI Designer</p>
          </div>
        </div>
        <div className="flex items-center text-yellow-400 font-semibold">
          4.8
          <span className="ml-1">⭐</span>
        </div>
      </div>

      {/* Review Text */}
      <div className="flex-grow flex items-center justify-center">
      <p className="text-sm text-gray-300 mb-6 leading-relaxed text-center px-2">
        Your video is excellent! I learned all the sorting algorithms from your
        playlist. Wishing you the best for your placements. After fully watching
        this video, I realized that the support is still low, but keep creating
        great content — it takes time for it to reach more people. All the best!
      </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-400 mt-6">
        <span>May 20, 2025</span>
        <img
  src="/Amazonsymbol.png"   // <-- Leading slash means from public root
  alt="Amazon"
  className="h-10"
/>
      </div>
    </div>
  );
};

export default ReviewCard;
