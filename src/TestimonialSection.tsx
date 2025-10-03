import ReviewCard from "./ReviewCard";
import TestimonialCard from "./TestimonialCard";
import YoutubeComments from "./YoutubeComments";

const TestimonialSection = () => {
  return (
    <section className="bg-[#0D0D12] text-white min-h-screen px-15 py-16 space-y-12">
      
      {/* 1. First Row - Testimonial label */}
      <div className="flex items-center justify-between">
  <span
    className="flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#0D0D12]"
    style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.32px",
    }}
  >
    <img src="symbol.svg" alt="icon" className="w-4 h-4" />
    Testimonial
  </span>
</div>

      {/* 2. Second Row - Heading + Buttons */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Left side - heading */}
        <div>
         <h2 className="text-[42px] font-bold leading-normal"
         style={{fontFamily : 'Bricolage Grotesque' }}
      >
 <span className="text-white">What our Students </span>
            <span className="text-[#FA81A3]">Say!</span>
          </h2>


       <p
  className="text-white text-[16px] font-normal leading-normal"
  style={{ fontFamily: '"Plus Jakarta Sans"' }}
>
  Hear from our students as they share their learning experiences <br />
  and career growth. Real impact—from beginners to professionals.
</p> </div>

        {/* Right side - buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-2">
        <button
  className="flex items-center gap-2 px-6 py-2 rounded-[12px] font-medium text-white shadow-md hover:opacity-90"
  style={{ background: "var(--Brand-color, #451AF5)" }}
>
  Start Learning
  {/* SVG icon on the right */}
  <img src="play-icon.png" alt="play" className="w-5 h-5" />
</button>
         <button
  className="flex items-center gap-2 border border-gray-500 px-6 py-2 rounded-[12px] hover:bg-gray-800"
  style={{
    color: "#FFF",
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "-0.32px",
  }}
>
  Watch our videos
 
</button>
        </div>
      </div>

      {/* 3. Third Row - Testimonial Card */}
      <div>
        <TestimonialCard />
      </div>

      {/* 4. Fourth Row - YouTube Comments */}
  <div className="flex overflow-x-auto gap-6 no-scrollbar px-4">
  <YoutubeComments title="" color="text-red-500" icon="youtube.svg" />
  <YoutubeComments title="Instagram" color="text-pink-500" icon="instagram.png" />
  <YoutubeComments title="LinkedIn" color="text-blue-500" icon="linkedin.png" />
</div>
      {/* 5. Fifth Row - Review Cards */}
      <div 
       className="flex gap-6 overflow-x-auto px-8 py-12 no-scrollbar"
  style={{
    WebkitMaskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  }}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      
      </div>

     
    </section>
  );
};

export default TestimonialSection;
