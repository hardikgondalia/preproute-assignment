const QuestionsSection = () => {
  return (
    <div>
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
      <div className="flex flex-col gap-7.5">
        <button className="w-fit flex items-center gap-0.5 py-1.5 px-1.25 bg-[#FFFBFB] rounded-lg cursor-pointer">
          <img src="/images/delete.svg" alt="" className="w-5 h-5" />
          <span className="text-[14px] font-normal text-[#FF7F7F]">Delete All Edits</span>
        </button>
        <div className="flex flex-col gap-5">
          <label htmlFor="" className="text-[16px] font-medium">Type the options below</label>
          <div className="flex flex-col gap-7.5">
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input type="text" placeholder="Type Option here" className="flex-1 outline-none" />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input type="text" placeholder="Type Option here" className="flex-1 outline-none" />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input type="text" placeholder="Type Option here" className="flex-1 outline-none" />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input type="text" placeholder="Type Option here" className="flex-1 outline-none" />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="" className="text-[16px] font-medium">Add Solution</label>
          <div className="relative w-full flex">
            <textarea name="" id="" rows={5} className="py-3 pl-5 pr-8 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg outline-none"></textarea>
            <img src="/images/input-delete.svg" alt="" className="w-6 h-6 absolute right-2 top-3 cursor-pointer" />
          </div>
          <div className="py-2.5 flex items-center justify-center gap-2">
            <div className="w-7 h-7 flex justify-center items-center cursor-pointer">
              <img src="/images/Left.svg" alt="" className="w-3.5 h-3.5" />
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center">
              <span className="text-[12px] font-normal text-[#7489FF]"></span>
            </div>
            <div className="w-7 h-7 flex justify-center items-center cursor-pointer">
              <img src="/images/Right.svg" alt="" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <label htmlFor="" className="text-[16px] font-medium">Question settings</label>
          <div className="flex flex-col gap-5">
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="country" className="text-[16px] text-[#374151]">Level of Difficulty</label>
              <div className="grid grid-cols-1">
                <select id="subject" name="subject" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                  <option></option>
                </select>
                <img
                  src="/images/input-dropdown.svg"
                  alt=""
                  className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="country" className="text-[16px] text-[#374151]">Topic</label>
              <div className="grid grid-cols-1">
                <select id="subject" name="subject" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                  <option></option>
                </select>
                <img
                  src="/images/input-dropdown.svg"
                  alt=""
                  className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="country" className="text-[16px] text-[#374151]">Sub-topic</label>
              <div className="grid grid-cols-1">
                <select id="subject" name="subject" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                  <option></option>
                </select>
                <img
                  src="/images/input-dropdown.svg"
                  alt=""
                  className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <button className="min-w-40 h-12 px-3 flex justify-center items-center bg-[#FF7F7F] border-none outline-none rounded-lg text-[16px] font-medium text-[#FAFAFA] cursor-pointer">Exit Test Creation</button>
          <button className="min-w-50 h-12 px-3 flex justify-center items-center bg-[#7489FF] border-none outline-none rounded-lg text-[16px] font-medium text-[#FAFAFA] cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
