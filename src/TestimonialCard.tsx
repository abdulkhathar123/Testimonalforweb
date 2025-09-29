


type Props = {
  className?: string;
};

const TestimonialCard = ({ className }: Props) => {
  return (
    <div className={`w-[900px] flex-shrink-0 bg-[#222329]  rounded-2xl shadow-lg flex h-[500px] border-3 border-dotted ${className}`}
    style={{ borderColor: "rgba(255,255,255,0.3)" }}
>
      
      {/* LEFT SIDE - IMAGE */}
      <div className="w-1/3 h-full flex items-center justify-center p-4">
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
      <div >
          <p className="font-semibold text-xl">Samantha</p>
          <p className="text-sm text-gray-300">Lead UX/UI Designer</p>
        </div>
 <div className="flex justify-end ">
  <img
  src="/Amazonsymbol.png"   // <-- Leading slash means from public root
  alt="Amazon"
  className="h-12"
/>
  </div> 
  </div>
        {/* <p className="text-right text-sm  text-gray-400">— Amazon</p> */}

        <p className="text-2xl p-3.5  text-gray-200 mt-10 flex-grow">
          “I had a great learning experience with this institute. 
          The trainers explained every concept in a simple and practical way 
          which made it easy to understand. Even the toughest topic I feel more confident in my skills now.”
        </p>

       
      </div>
    </div>
  );
};

export default TestimonialCard;
