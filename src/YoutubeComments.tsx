import { useEffect, useRef } from "react";


type Props = {
  title?: string;
  color?: string;
  icon?: string;
};

const YoutubeComments = ({ title, color, icon }: Props) => {
  const comments = [
    { id: 1, name: "Aravindth", text: "🔥🔥 This was awesome!" },
    { id: 2, name: "Naveen", text: "Great work bruh." },
    { id: 3, name: "Abhishek", text: "Very good teaching bro." },
    { id: 4, name: "Inba", text: "This was very useful." },
    { id: 5, name: "Deepak", text: "Loved the explanation!" },
    { id: 6, name: "Surya", text: "Clean and clear!" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll small amount for a "live feed" effect.
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const scrollStep = 1;
    const delay = 50;
    const interval = setInterval(() => {
      if (!scrollEl) return;
      if (scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1) {
        scrollEl.scrollTop = 0;
      } else {
        scrollEl.scrollTop += scrollStep;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center h-full  ">
   
      {/* Outer wrapper */}
      <div className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] h-[550px] rounded-[30px] mt-8 border-2 border-dashed border-white ">
        <div className="absolute inset-0 rounded-[30px] bg-[rgba(255,255,255,0.20)] backdrop-blur-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-0 " />
        <div className="absolute inset-0 rounded-[30px] pointer-events-none z-10">
          <div className="absolute inset-[6px] rounded-[26px] border border-[rgba(255,255,255,0.12)] border-dotted" />
        </div>

        <div className="relative z-20 w-full h-full rounded-[26px] bg-[#2B1826] p-4 overflow-hidden">

   

<div
  className="absolute bottom-0 left-0 w-full h-[100px] rounded-b-[30px]"
  style={{
    background: "#2B1826",
    filter: "blur(35px)",
  }}
></div>
     
<div className="relative z-30 flex justify-center">
        <div
          className={`
            bg-[#2f3040] text-white text-xl 
            px-8 py-3  rounded-full font-bold 
            inline-flex items-center justify-center gap-2
            min-h-[4px] min-w-[180px]
            ${color ?? ""}
          `}
          style={{
            borderRadius: "36px",
            border: "0.5px solid #D8DEFF",
            background: "rgba(178, 185, 225, 0.15)",
            
          }}
        >
         {icon && (
  <img
    src={icon}
    alt={title || "logo"}
    className={`object-contain
      ${
        title === "YouTube"
          ? "w-[90px] h-[28px] "   // YouTube logo with text → larger
          : "w-6 h-6"              // Instagram & LinkedIn → normal size
      }
    `}
  />
)}

      {title && title !== "YouTube" && <span>{title}</span>}
        </div>
      </div>


         
          {/* Scrollable comments area */}
          <div ref={scrollRef} className="mt-6 h-[378px] overflow-y-auto no-scrollbar flex flex-col gap-3">
            {comments.map((c) => (
              <div key={c.id} className="bg-[#3e2a39] px-3 py- rounded-xl shadow-sm flex flex-col gap-1 min-h-[112px]">
                <div className="flex items-center gap-4">
                  <div className="mt-2">
                  <img src={`https://i.pravatar.cc/40?img=${c.id}`} alt={c.name} className="w-10 h-8  rounded-full object-cover  " /> </div>
                  <p className="font-semibold text-sm text-white ">{c.name}</p>
                  <span className="text-xs text-gray-400 ">1 minutes ago</span>
                </div>

                <p className="text-gray-300 text-sm pl-12  leading-normal">{c.text}</p>

                <div className="flex items-center gap-4 text-gray-400 text-xs pl-12 mt-1">
                 <button className="hover:text-white flex items-center gap-1">
  <img src="thumbs-up.svg" alt="like" className="w-5 h-5" />
  <span>13</span>
</button>

<button className="hover:text-white flex items-center gap-">
  <img src="thumbs-down.svg" alt="dislike" className="mx-2 w-5 h-5 mt-2" />
  <span></span>
</button>
                  {/* <button className="text-white   mb-2">Reply</button> */}
                  <button
  className=" text-white text-[15px] "
  style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight:500
  }}
>
  Reply
</button>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default YoutubeComments;



