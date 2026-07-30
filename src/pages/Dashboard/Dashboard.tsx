import { useEffect } from "react";
import { getAllTests } from "../../services/task.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearFilters, selectFilteredTests, setFilters, setLoading, setTestList } from "../../store/slice/testListSlice";
import type { ApiResponse } from "../../services/interfaces/common";
import { formatDateTime } from "../../utils/appUtils";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.testList);
  const tests = useAppSelector(selectFilteredTests);
  const filters = useAppSelector((state) => state.testList.filters);

  const fetchTests = async () => {
    try {
      dispatch(setLoading(true));
      const response = (await getAllTests()) as ApiResponse;
      if (response.status === "success") {
        dispatch(setTestList(response.data));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);
  return (
    <>
      <main className="flex-1 md:h-[calc(100%-380px)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">Test Management</h1>
            <p className="text-slate-500 mt-1">Create, manage and organize all your assessments</p>
          </div>
          <button className="bg-[#7489FF] hover:bg-[#292b86] text-white rounded-lg px-6 py-3 font-medium shadow cursor-pointer">
            + Create New Test
          </button>
        </div>
        <div className="bg-white rounded-lg mt-8 p-5 border border-[#E5E7EB]">
          <div className="grid grid-cols-1 gap-4 text-[#374151] sm:grid-cols-2 xl:grid-cols-5">
            <input
              className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none"
              placeholder="Search test..."
              value={filters.name}
              onChange={(e) =>
                dispatch(
                  setFilters({
                    name: e.target.value,
                  }),
                )
              }
            />

            <select
              className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none"
              value={filters.status}
              onChange={(e) =>
                dispatch(
                  setFilters({
                    status: e.target.value,
                  }),
                )
              }
            >
              <option value="">All Status</option>
              <option value="draft">Draft</option>
              <option value="live">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="expired">Expired</option>
            </select>

            <input
              type="date"
              className="rounded-lg border border-[#E5E7EB] px-4 py-3 outline-none"
              value={filters.date}
              onChange={(e) =>
                dispatch(
                  setFilters({
                    date: e.target.value,
                  }),
                )
              }
            />

            <button
              className="cursor-pointer rounded-lg border border-[#EDF2FF] bg-[#EDF2FF] px-4 py-3 text-[#5B68F9]"
              onClick={() => dispatch(clearFilters())}
            >
              Reset
            </button>
          </div>
        </div>

        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 place-content-start md:h-[calc(100%-210px)] overflow-y-auto">
          {tests.map((test) => (
            <div key={test.id} className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="flex gap-4 text-[#374151]">
                    <div className="w-14 h-14 rounded-lg bg-[#eff3fd] flex items-center justify-center">
                      <img src="/images/note.svg" alt="" className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{test?.name}</h2>
                      <p className="text-slate-500">Subject: {test?.subject}</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit h-fit rounded-full bg-green-100 text-[#008236] text-sm px-3 py-1">{test?.status}</span>
                </div>
                <div className="flex items-center gap-3 border-t border-[#E5E7EB] mt-5 pt-4 text-sm text-slate-500">
                  <img src="/images/date-time.svg" alt="" className="w-6 h-6" />
                  <div>
                    <span>Created on</span>
                    <p className="font-medium">{formatDateTime(test?.created_at)}</p>
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
          ))}

          {/* <div className="bg-white h-fit rounded-lg border border-[#E5E7EB] hover:shadow-sm transition">
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
          </div> */}
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
