import { useEffect, useRef } from "react";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

type Props = {
  title?: string; // optional, because YouTube has no title
  color: string;
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

  // ✅ Ref for the scrollable div
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ Auto-scroll logic
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const scrollStep = 1; // pixels per tick
    const delay = 50; // ms per tick (smaller = faster scroll)

    const interval = setInterval(() => {
      if (!scrollEl) return;

      // If reached bottom, reset to top
      if (scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight) {
        scrollEl.scrollTop = 0;
      } else {
        scrollEl.scrollTop += scrollStep;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      {/* Pill Header */}
      <div className="relative z-30">
        <div
          className={`
            bg-[#2f3040] text-white text-xl 
            px-8 py-3 rounded-full font-bold 
            inline-flex items-center justify-center gap-2
            min-h-[54px] min-w-[180px]    
            ${color}
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
                ${title ? "w-6 h-6" : "w-23 h-6"}
              `}
            />
          )}
          {title && <span>{title}</span>}
        </div>
      </div>

      {/* Outer wrapper */}
      <div className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[430px] h-[500px] rounded-[30px] -mt-4 border-3 border-dashed border-[#4f4f4f] border-t-0">
        <div className="absolute inset-0 rounded-[30px] bg-[rgba(255,255,255,0.20)] backdrop-blur-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-0" />
        <div className="absolute inset-0 rounded-[30px] pointer-events-none z-10">
          <div className="absolute inset-[6px] rounded-[26px] border border-[rgba(255,255,255,0.12)] border-dotted" />
        </div>

        <div className="relative z-20 w-full h-full rounded-[26px] bg-[#272832] p-4 overflow-hidden">
          {/* Top notch / tab */}
          <div className="absolute top-0 inset-x-0 pointer-events-none">
            <div className="h-10 w-60 mx-auto bg-[#0D0D12] rounded-b-4xl border-2 border-dotted border-[#4f4f4f] border-t-0" />
          </div>

          {/* Scrollable comments area with auto-scroll */}
          <div
            ref={scrollRef}
            className="mt-10 h-[392px] overflow-y-auto no-scrollbar flex flex-col gap-3"
          >
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-[#121212] px-3 py-2 rounded-xl shadow-sm flex flex-col gap-1 min-h-[95px]"
                
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <img
                    src={ `https://i.pravatar.cc/40?img=${c.id}`}
                    alt={c.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <p className="font-semibold text-sm text-white">{c.name}</p>
                  <span className="text-xs text-gray-400 ml-auto">1 mo ago</span>
                </div>

                {/* Comment Text */}
                <p className="text-gray-300 text-sm pl-10 leading-normal">
                  {c.text}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 text-gray-400 text-xs pl-10 mt-1">
                  <button className="hover:text-white flex items-center gap-1">
                    <ThumbUpOffAltOutlinedIcon sx={{ fontSize: 20 }} />
                    <span>12</span>
                  </button>
                  <button className="hover:text-white flex items-center gap-1">
                    <ThumbDownOffAltOutlinedIcon sx={{ fontSize: 20 }} />
                    <span>1</span>
                  </button>
                  <button className="hover:text-white">Reply</button>
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


