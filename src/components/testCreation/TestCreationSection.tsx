const TestCreationSection = () => {
  return (
    <div className="w-full flex flex-col gap-7.5">
      <div className="max-w-sm">
        <div className="relative flex items-center bg-white border border-[#D1D5DB] rounded-xl py-1.25 px-2.5">
          <div id="indicator"
            className="absolute top-1.25 left-2.5 h-10 w-[calc((100%-16px)/3)] rounded-lg bg-[#F8FAFF] transition-all duration-300 ease-in-out">
          </div>
          <button className="flex-1 relative z-10 p-2.5 text-[14px] font-medium text-[#384EC7] cursor-pointer">
            Chapterwise
          </button>
          <button className="flex-1 relative z-10 p-2.5 text-[14px] font-normal text-[#9CA3AF] cursor-pointer">
            PYQ
          </button>
          <button className="flex-1 relative z-10 p-2.5 text-[14px] font-normal text-[#9CA3AF] cursor-pointer">
            Mock Test
          </button>
        </div>
      </div>
      <form action="" className="w-full flex flex-col gap-7.5">
        <div className="w-full flex items-center gap-12.5">
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="country" className="text-[#374151]">Country</label>
            <div className="grid grid-cols-1">
              <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                <option>Select Country</option>
                <option></option>
                <option></option>
              </select>
              <img src="/images/input-dropdown.svg" alt="" className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="userid" className="text-[#374151]">Name of Test</label>
            <input type="text" name="userid" placeholder="Enter name of Test" className="py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
          </div>
        </div>
        <div className="w-full flex items-center gap-12.5">
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="country" className="text-[#374151]">Topic</label>
            <div className="grid grid-cols-1">
              <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                <option>Select Country</option>
                <option></option>
                <option></option>
              </select>
              <img src="/images/input-dropdown.svg" alt="" className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="country" className="text-[#374151]">Sub Topic</label>
            <div className="grid grid-cols-1">
              <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                <option>Select Country</option>
                <option></option>
                <option></option>
              </select>
              <img src="/images/input-dropdown.svg" alt="" className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-12.5">
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="userid" className="text-[#374151]">Duration (Minutes)</label>
            <input type="text" name="userid" placeholder="Enter name of Test" className="py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
          </div>
          <div className="flex flex-1 flex-col gap-3.75 font-medium">
            <label htmlFor="userid" className="text-[#374151]">Test Difficulty Level</label>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center gap-2.5">
                <input id="Easy" type="radio" name="push-notifications" className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer" />
                <label htmlFor="Easy" className="block text-[16px] font-medium text-[#374151] cursor-pointer">Easy</label>
              </div>
              <div className="flex items-center gap-2.5">
                <input id="Medium" type="radio" name="push-notifications" className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer" />
                <label htmlFor="Medium" className="block text-[16px] font-medium text-[#374151] cursor-pointer">Medium</label>
              </div>
              <div className="flex items-center gap-2.5">
                <input id="Difficult" type="radio" name="push-notifications" className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer" />
                <label htmlFor="Difficult" className="block text-[16px] font-medium text-[#374151] cursor-pointer">Difficult</label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[16px] font-medium text-[#374151]">Marking Scheme:</div>
        <div className="w-full flex items-center gap-12.5">
          <div className="flex-1 flex items-center gap-12.5">
            <div className="w-full flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">Wrong Answer</label>
              <input type="number" name="userid" placeholder="" className="w-full py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
            <div className="w-full flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">Unattempted</label>
              <input type="number" name="userid" placeholder="" className="w-full py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
            <div className="w-full flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">Correct Answer</label>
              <input type="number" name="userid" placeholder="" className="w-full py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
          </div>
          <div className="flex-1 flex items-center gap-12.5">
            <div className="w-full flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">No of Questions</label>
              <input type="text" name="userid" placeholder="Ex:250 Marks" className="w-full py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
            <div className="w-full flex flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">Total Marks</label>
              <input type="text" name="userid" placeholder="Ex:250 Marks" className="w-full py-2.75 px-4 text-[#374151] border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
          </div>
        </div>
      </form>
      <div className="pt-5 flex justify-end items-center gap-5">
        <button className="border-none bg-[#F8FAFF] rounded-lg w-40 h-12 flex justify-center items-center text-[16px] font-medium text-[#384EC7] cursor-pointer">Cancel</button>
        <button className="border-none bg-[#7489FF] rounded-lg w-40 h-12 flex justify-center items-center text-[16px] font-medium text-[#FAFAFA] cursor-pointer">Next</button>
      </div>
    </div>
  )
};

export default TestCreationSection;
