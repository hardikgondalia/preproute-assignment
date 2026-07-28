import { useEffect } from "react";
import { login } from "../../services/auth.service";

const Dashboard = () => {
  useEffect(() => {
    const testLogin = async () => {
      try {
        const response = await login();
        console.log("✅ Login Success:", response);
      } catch (error) {
        console.error("❌ Login Failed:", error);
      }
    };

    testLogin();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="py-6 px-5 flex items-center gap-2 text-[16px] font-medium text-[#00000099]">
        <span>Test Creation</span>
        <span>/</span>
        <span>Create Test</span>
        <span>/</span>
        <span className="pl-2.5">Chapter Wise</span>
      </div>
      <div className="w-full px-5 flex flex-col gap-7.5">
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
                <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
                  <option>Select Country</option>
                  <option></option>
                  <option></option>
                </select>
                <img src="/images/input-dropdown.svg" alt="" className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="userid" className="text-[#374151]">Name of Test</label>
              <input type="text" name="userid" placeholder="Enter name of Test" className="py-2.75 px-4 border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
          </div>
          <div className="w-full flex items-center gap-12.5">
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="country" className="text-[#374151]">Topic</label>
              <div className="grid grid-cols-1">
                <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
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
                <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
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
              <input type="text" name="userid" placeholder="Enter name of Test" className="py-2.75 px-4 border border-[#9CA3AF] rounded-lg outline-none" />
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;