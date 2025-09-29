

import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

type Props = { title: string; color: string };

const YoutubeComments = ({ title, color }: Props) => {
  const comments = [
    { id: 1, name: "Aravindth", text: "🔥🔥 This was awesome!" },
    { id: 2, name: "Naveen", text: "Great work bruh." },
    { id: 3, name: "Abhishek", text: "Very good teaching bro." },
    { id: 4, name: "Inba", text: "This was very useful." },
    { id: 5, name: "Deepak", text: "Loved the explanation!" },
    {
      id: 6,
      name: "Surya",
      text: "Clean and clear!",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  return (
   
    <div className=" flex flex-col items-center mx-5 ">

<div className="flex flex-col items-center relative z-10 transform  ">
      
      {/* YouTube Pill */}
      <div className="-mt-2 relative z-10">
        <div className="bg-[#2f3040] text-white text-xl px-8 py-3  rounded-full font-bold    inline-flex items-center gap-1 ">
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="30"
  height="30"
  className="rounded"
>
  <path
    fill="#FF0000"
    d="M23.498 6.186a2.88 2.88 0 0 0-2.025-2.04C19.553 3.5 12 3.5 12 3.5s-7.553 0-9.473.646a2.88 2.88 0 0 0-2.025 2.04A29.01 29.01 0 0 0 0 12a29.01 29.01 0 0 0 .502 5.814 2.88 2.88 0 0 0 2.025 2.04C4.447 20.5 12 20.5 12 20.5s7.553 0 9.473-.646a2.88 2.88 0 0 0 2.025-2.04A29.01 29.01 0 0 0 24 12a29.01 29.01 0 0 0-.502-5.814z"
  />
  <path fill="#FFFFFF" d="M9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
</svg>
          YouTube
        </div>
      </div>

      {/* Phone-like Card */}
      <div className="w-[320px] sm:w-[340px] h-[480px] rounded-[28px] border-3 border-dotted border-[#4f4f4f] border-t-0  bg-[#1e1f2b] p-4 shadow-inner overflow-hidden relative -mt-4">

        {/* dessign for card */}
       <div className="absolute top-0 inset-x-0 ">
         <div className="h-10 w-60 mx-auto bg-[#0D0D12] rounded-b-4xl border-3 border-dotted border-[#4f4f4f] border-t-0  "></div>
       </div>



        {/* Scrollable Comment List */}
        <div className="mt-10 h-[420px] overflow-y-auto no-scrollbar flex flex-col gap-3">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-[#2f3040] px-3 py-2 rounded-xl shadow-sm flex flex-col gap-1 min-h-[95px]"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <img
                  src={c.avatar || `https://i.pravatar.cc/40?img=${c.id}`}
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
                  <ThumbUpOffAltOutlinedIcon sx={{fontSize:20}} /> 
                  <span>12</span>
                </button>
                <button className="hover:text-white flex items-center gap-1">
                  <ThumbDownOffAltOutlinedIcon sx={{fontSize:20}} />
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


