import { useState, useRef, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import TestimonialCard from "./TestimonialCard";
import YoutubeComments from "./YoutubeComments";

const TestimonialSection = () => {
  const [slide, setSlide] = useState(0);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => setSlide((prev) => (prev === 0 ? 3 : prev - 1));
  const handleNext = () => setSlide((prev) => (prev === 3 ? 0 : prev + 1));

  useEffect(() => {
    if (slide !== 3) return;

    const el = reviewRef.current;
    if (!el) return;

    const pxPerTick = 2.5;
    let animationId: number;

    const loopScroll = () => {
      if (!el) return;
      el.scrollLeft += pxPerTick;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(loopScroll);
    };

    loopScroll();
    return () => cancelAnimationFrame(animationId);
  }, [slide]);

  return (
    <section className="bg-[#0D0D12] text-white min-h-screen px-4 sm:px-8 lg:px-10 py-16 space-y-12 overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between pl-4 sm:pl-10 lg:pl-16">
        <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#0D0D12] font-mono text-[16px]">
          <img src="symbol.svg" alt="icon" className="w-4 h-4" />
          Testimonial
        </span>
      </div>

      {/* Title and Buttons */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 px-4 sm:px-10 lg:px-16">
        <div>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold leading-normal">
            <span className="text-white">What our Students </span>
            <span className="text-[#FA81A3]">Say!</span>
          </h2>
          <p className="text-white text-[14px] sm:text-[16px] font-normal leading-normal">
            Hear from our students as they share their learning experiences <br className="hidden sm:block" />
            and career growth. Real impact—from beginners to professionals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-2">
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-[12px] font-medium text-white shadow-md outline-none border border-transparent hover:border-[#DADADA] focus:border-[#DADADA] transition-all duration-200"
            style={{ background: "var(--Brand-color, #451AF5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "transparent")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#451AF5")}
          >
            Start Learning
            <img src="play-icon.png" alt="play" className="w-5 h-5" />
          </button>

          <button
            className="flex items-center gap-2 border border-[#DADADA] px-6 py-2 rounded-[12px]"
            style={{
              color: "#FFF",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "14px",
            }}
          >
            Watch our videos
          </button>
        </div>
      </div>

      {/* Slide Section */}
      <div
        className="relative w-full min-h-[70vh] flex flex-col items-center transition-all duration-700 ease-in-out bg-[url('bg_color.png')] bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-10"
      >
        {slide < 3 ? (
          <div
            key={slide}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 transition-all duration-700 ease-in-out w-full"
          >
            {/* Slide 1 */}
            {slide === 0 && (
              <>
                <div className="w-full lg:w-[80%] xl:w-[90%]">
                  <TestimonialCard />
                </div>
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
                  <YoutubeComments title="YouTube" color="text-red-500" icon="youtube.svg" />
                </div>
              </>
            )}

            {/* Slide 2 */}
            {slide === 1 && (
              <>
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
                  <YoutubeComments title="Instagram" color="text-pink-500" icon="instagram.png" />
                </div>
                <div className="w-full lg:w-[80%] xl:w-[90%]">
                  <TestimonialCard />
                </div>
              </>
            )}

            {/* Slide 3 */}
            {slide === 2 && (
              <>
                <div className="w-full lg:w-[80%] xl:w-[90%]">
                  <TestimonialCard  />
                </div>
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
                  <YoutubeComments title="LinkedIn" color="text-blue-500" icon="linkedin.png" />
                </div>
              </>
            )}
          </div>
        ) : (
          // Slide 4 → Review Cards (scrolling)
          <div
            ref={reviewRef}
            className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-12 py-10 no-scrollbar w-full"
            style={{
              scrollBehavior: "auto",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=5" name="Aarav Sharma" role="Frontend Developer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=1" name="Priya Nair" role="UX/UI Designer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=15" name="Rohan Mehta" role="Backend Developer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=11" name="Aarav Sharma" role="Developer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=13" name="Priya Nair" role="UX/UI Designer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=13" name="Rohan Mehta" role="Backend Developer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=5" name="Aarav Sharma" role="Developer" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=12" name="Priya Nair" role="Business Analyst" />
            <ReviewCard imgSrc="https://i.pravatar.cc/40?img=15" name="Rohan Mehta" role="Backend Developer" />
          </div>
        )}

        {/* Arrows and Pagination */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700"
          >
            ←
          </button>
          <span className="text-gray-400">{slide + 1} / 4</span>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
