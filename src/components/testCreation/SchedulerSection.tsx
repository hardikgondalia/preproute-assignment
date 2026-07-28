const SchedulerSection = () => {
  return (
    <div className="max-w-75">
      <div className="relative flex items-center bg-white border border-[#D1D5DB] rounded-xl py-1.25 px-2.5">
        <div id="indicator"
          className="absolute top-1.25 left-2.5 h-10 w-[calc((100%-16px)/2)] rounded-lg bg-[#F8FAFF] transition-all duration-300 ease-in-out">
        </div>
        <button className="flex-1 relative z-10 p-2.5 text-[14px] font-bold text-[#07013C] cursor-pointer">
          Publish Now
        </button>
        <button className="flex-1 relative z-10 p-2.5 text-[14px] font-normal text-[#9CA3AF] cursor-pointer">
          Schedule Publish
        </button>
      </div>
    </div>
  )
};

export default SchedulerSection;
