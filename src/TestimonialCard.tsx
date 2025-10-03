


type Props = {
  className?: string;
};

const TestimonialCard = ({ className }: Props) => {
  return (
  <div
  className={`max-w-[1500px] w-full bg-[#222329] rounded-2xl  shadow-lg flex flex-col lg:flex-row h-auto lg:h-[500px] border-3 border-dotted ${className}`}
  style={{ borderColor: "rgba(255,255,255,0.3)" }}
>
      
      {/* LEFT SIDE - IMAGE */}
      <div className="w-full lg:w-1/3 h-[250px] lg:h-full flex items-center justify-center p-4">
  <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-full">
    <img
      src="Testimage.png"
      alt="student"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      {/* RIGHT SIDE - TEXT */}
      <div className="w-2/3 p-10 flex flex-col justify-between ">
    <div className="flex justify-between items-center w-full">
     <div>
  {/* Name */}
  <p className="text-white font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[34px]">
    Samantha
  </p>

  {/* Role */}
  <p className="text-[#CCCCCC] font-['Plus_Jakarta_Sans'] text-[18px] font-medium leading-[34px]">
    Lead UX/UI Designer
  </p>
</div>
 <div className="flex justify-end ">
  <img
  src="Amazonsymbol.png"   // <-- Leading slash means from public root
  alt="Amazon"
  className="h-12"
/>
  </div> 
  </div>
        {/* <p className="text-right text-sm  text-gray-400">— Amazon</p> */}

       <p
  className="mt-10 flex-grow"
  style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "145%",
  }}
>
 <span className="text-white">
  I had a great learning experience with this institute.
</span>
  <span style={{ color: "#A6A6A6" }}>
    The trainers explained every concept in a simple and practical way
    which made it easy to understand. Even the toughest topic I feel
    more confident in my skills now.
  </span>


</p>

 <div className="flex justify-end mt-auto">
  <img
    src="ra.png"
    alt="Amazon"
    className="h-8"
  />
</div>
       
      </div>
    </div>
  );
};

export default TestimonialCard;
