const QuestionsSection = () => {
  return (
    <div className="w-full flex items-center justify-between py-3.5">
      <div className="text-[16px] font-medium text-[#07013C]">Question 4<span className="text-[#a4c5f2]">/50</span></div>
      <div className="flex items-center gap-2.5">
        <button className="px-2.5 h-10 flex justify-center items-center gap-1.25 bg-[#FAFAFA] rounded-lg text-[14px] font-medium text-[#9CA3AF] cursor-pointer">
          <img src="/images/add.svg" alt="" className="w-5 h-5" />
          <span>MCQ</span>
        </button>
        <button className="px-2.5 h-10 flex justify-center items-center gap-1.25 bg-[#FAFAFA] rounded-lg text-[14px] font-medium text-[#9CA3AF] cursor-pointer">
          <img src="/images/download.svg" alt="" className="w-5 h-5" />
          <span>CSV</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionsSection;
