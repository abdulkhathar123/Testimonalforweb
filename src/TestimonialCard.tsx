
type Props = {
  className?: string;
  name?: string;
  role?: string;
  image?: string; // image path in public folder
  companyLogo?: string;
   testimonialFirstLine?: string; // white text
  testimonial2nd?: string; // gray text


 // New props for YouTube mini-card
  youtubeTitle?: string;
  youtubeImage?: string;
  youtubeUrl?: string;
   showYoutube?: boolean; 

};

const TestimonialCard = ({
  className = "",
  name = "Samantha",
  role = "Lead UX/UI Designer",
  image = "Testimage.png",

  testimonialFirstLine = "I had a great learning experience with this institute.",
  testimonial2nd = "The trainers explained every concept in a simple and practical way which made it easy to understand. Even the toughest topic I feel more confident in my skills now.",

   youtubeTitle = "Watched playlist \n Learn DSA with code Thanish",
   youtubeImage = "youtube.png",
  youtubeUrl = "",
  showYoutube = true,
}: Props) => {
  return (
    <div
      className={`max-w-[1800px] w-full bg-[#222329] rounded-2xl shadow-lg flex flex-col lg:flex-row h-auto lg:h-[550px] mt-8   ${className}`}
      style={{ borderColor: "rgba(255,255,255,0.3)" }}
    >
      {/* LEFT SIDE - IMAGE */}
      <div className="w-full lg:w-1/3 h-[250px] lg:h-full flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-full">
          <img src={image} alt={`${name} photo`} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* RIGHT SIDE - TEXT */}
      <div className="w-full lg:w-2/3 p-10 flex flex-col justify-between ">
        <div className="flex justify-between items-center w-full">
          <div>
            {/* Name */}
            <p className="text-white font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[34px]">
              {name}
            </p>

            {/* Role */}
            <p className="text-[#CCCCCC] font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[34px]">
              {role}
            </p>
          </div>

          <div className="flex items-center justify-end pr-4 gap-2 transform -translate-x-2">
  <p
    className="text-white text-[18px] font-semibold"
    style={{
      fontFamily: '"Bricolage Grotesque", sans-serif',
      letterSpacing: "0.5px",
    }}
  >
    4.8
  </p>
  <img src="star.svg" alt="rating star" className="h-5 w-5 " />
</div>
        </div>

        <p
          className="mt-10 flex-grow"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "145%",
          }}
        >
           <span className="text-white">{testimonialFirstLine} </span>
  <span style={{ color: "#A6A6A6" }}>{testimonial2nd}</span>
        </p>
{showYoutube !== false && (
        <div
          onClick={() => window.open(youtubeUrl, "_blank")}
          className="flex items-center bg-[#222329] rounded-xl shadow-md cursor-pointer hover:scale-105 transition-all duration-300 mt-4"
          style={{
            width: "550px",
            height: "89px",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "8px",
          }}
        >
          {/* Left side - Image */}
          <img
            src={youtubeImage}
            alt="YouTube Logo"
            className="w-[200px] h-[60px] rounded-lg object-cover"
          />

          {/* Right side - Text */}
       
     <div className="ml-3 flex flex-col justify-center">
    {youtubeTitle?.split("\n").map((line, index) => {
      if (index === 0) {
        // First line: gray + small icon
        return (
          <div key={index} className="flex items-center gap-2">
            
            <span
              className="text-[#A6A6A6] text-[14px] font-semibold"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {line}
            </span>
            <img src="small-icon.svg" alt="icon" className="w-4 h-4" />
          </div>
        );
      }
      // Second line: white
      return (
        <span
          key={index}
          className="text-white text-[14px] font-semibold mt-1"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          {line}
        </span>
      );
    })}
  </div>

          
          
        </div>

)}
       

       <div className="flex items-center justify-between mt-3">
  {/* Left side - Dynamic Date */}
  <p
    className="text-[#C4C4C4] text-[18px] font-medium leading-[25px]"
    style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    }}
  >
    {new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}
  </p>

  {/* Right side - Amazon logo */}
  <img src="Amazonsymbol.png" alt="Amazon logo" className="h-12 w-auto" />
</div>
       
      </div>
    </div>
  );
};

export default TestimonialCard;

