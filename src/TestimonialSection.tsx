

import ReviewCard from "./ReviewCard";
import TestimonialCard from "./TestimonialCard";
import YoutubeComments from "./YoutubeComments";

const TestimonialSection = () => {
  return (
    <section className="bg-[#0D0D12] text-white min-h-screen flex flex-col justify-center ">
      {/* Heading */}
      <div className="text-center mb-15 mt-4">
        <span className="bg-stone-50  text-stone-950 px-4 py-1  rounded-full text-sm">
          Testimonial
        </span>
        <h2 className="text-3xl font-bold mt-4">
          What our <span className="text-pink-500">Students Say!</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Hear from our students as they share their learning experiences and career growth.
        
        </p>
        <p className="text-gray-400 mt-2 mb-0 max-w-2xl mx-auto " >impact from begineers to professional</p>
      </div>

    
      {/* <div className="flex overflow-x-auto gap-6 px-6 no-scrollbar"> */}
        <div className="flex overflow-x-auto gap-6 px-6 pt-2  no-scrollbar">
    
        <TestimonialCard className=""  />
        <YoutubeComments  title="YouTube" color="text-red-500 " />

      
        <YoutubeComments title="Instagram" color="text-pink-500"  />
        <YoutubeComments title="YouTube" color="text-red-500" />
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        

       
      </div>
    </section>
  );
};

export default TestimonialSection;
