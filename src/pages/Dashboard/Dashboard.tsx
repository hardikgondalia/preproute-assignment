
const Dashboard = () => {
  return (
    <>
      <main className="flex-1 md:h-[calc(100%-380px)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">Test Management</h1>
            <p className="text-slate-500 mt-1">
              Create, manage and organize all your assessments
            </p>
          </div>
          <button className="bg-[#7489FF] hover:bg-[#292b86] text-white rounded-lg px-6 py-3 font-medium shadow cursor-pointer">
            + Create New Test
          </button>
        </div>
        <div className="bg-white rounded-lg mt-8 p-5 border border-[#E5E7EB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 text-[#374151]">
            <input
              className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none"
              placeholder="Search test..." />
            <select className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none">
              <option>All Subjects</option>
            </select>
            <select className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none">
              <option>All Status</option>
            </select>
            <input type="date" className="border border-[#E5E7EB] rounded-lg px-4 py-3 outline-none" />
            <button className="rounded-lg text-[#5b68f9] border border-[#edf2ff] bg-[#edf2ff] px-4 py-3 cursor-pointer">
              Reset
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 place-content-start md:h-[calc(100%-210px)] overflow-y-auto">
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#eff3fd] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#f3edfc] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#eaf8eb] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#fef4ed] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>                    
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#e4f6f8] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>                    
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
            <div className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4 text-[#374151]">
                  <div className="w-14 h-14 rounded-lg bg-[#fdeef3] flex items-center justify-center">
                    <img src="/images/note.svg" alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Angular Basics Test</h2>
                    <p className="text-slate-500">Subject: Angular</p>                    
                  </div>
                </div>
                <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">Active</span>
              </div>
              <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                <div>
                  <span>Created on</span>
                  <p className="font-medium">30 Jul 2026, 10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-[#E5E7EB]">
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebfff280] text-[#008236] font-medium cursor-pointer">
                <img src="/images/view.svg" alt="" className="w-5 h-5" />
                <span>View</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#ebf0ff80] text-[#7489FF] font-medium border-x border-[#E5E7EB] cursor-pointer">
                <img src="/images/pen-icon.svg" alt="" className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button className="py-3 flex justify-center gap-2 items-center hover:bg-[#fff0f180] text-[#fb2c36] font-medium cursor-pointer">
                <img src="/images/delete-icon.svg" alt="" className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="bg-white rounded-lg border border-[#E5E7EB] mt-8 p-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#374151]">Showing 1–6 of 24 tests</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg border border-[#E5E7EB] hover:bg-slate-100">←</button>
            <button className="w-10 h-10 rounded-lg bg-[#7489FF] text-white">1</button>
            <button className="w-10 h-10 rounded-lg border border-[#E5E7EB]">2</button>
            <button className="w-10 h-10 rounded-lg border border-[#E5E7EB]">3</button>
            <button className="w-10 h-10 rounded-lg border border-[#E5E7EB] hover:bg-slate-100">→</button>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Dashboard;