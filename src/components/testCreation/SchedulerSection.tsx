import { useState } from "react";
import SegmentedControl from "../common/SegmentController";
import { useAppSelector } from "../../store/hooks";
import type { ApiResponse } from "../../services/interfaces/common";
import { publishTest } from "../../services/task.service";
import { useNavigate } from "react-router-dom";

const SchedulerSection = () => {
  const currentTest = useAppSelector((state) => state.currentTest.data);
  const navigate = useNavigate();
  const [publishType, setPublishType] = useState("publish");

  const handleNext = async () => {
    if (publishType === "publish") {
      try {
        if (!currentTest?.id) return;
        const response = (await publishTest(currentTest.id)) as ApiResponse;
        if (response.status) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/dashboard");
    }
  };

  const handleCancel = () => {navigate("/dashboard");};
  return (
    <div className="flex flex-col gap-7.5 h-[calc(100%-295px)] overflow-y-auto">
      <div className="w-full max-w-md">
        <SegmentedControl
          value={publishType}
          onChange={setPublishType}
          tabs={[
            { value: "publish", label: "Publish Now" },
            { value: "schedule", label: "Schedule Publish" },
          ]}
        />
      </div>

      {publishType === "schedule" && (
        <div className="flex flex-1 flex-col gap-3.75">
          <label htmlFor="country" className="text-[16px] font-bold text-[#374151]">
            Select Date and Time
          </label>
          <div className="flex items-center flex-wrap gap-5">
            <input
              type="date"
              placeholder="Select Date"
              className="py-3 px-4 flex flex-1 items-center border border-[#E5E7EB] rounded-lg outline-none"
            />
            <input
              type="time"
              placeholder="Select Time"
              className="py-3 px-4 flex flex-1 items-center border border-[#E5E7EB] rounded-lg outline-none"
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3.75">
        <div className="text-[16px] font-bold text-[#374151]">Live Until</div>
        <div className="text-[16px] font-medium text-[#6B7180]">Choose how long this test should remain available on the platform.</div>
        <div className="flex gap-2.5 flex-wrap">
          <div className="flex flex-1 flex-col gap-2.5 flex-wrap">
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="Available"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="Available" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                Always Available
              </label>
            </div>
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="one"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="one" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                1 Week
              </label>
            </div>
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="two"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="two" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                2 Week
              </label>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 flex-wrap">
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="three"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="three" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                3 Weeks
              </label>
            </div>
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="Month"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="Month" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                1 Month
              </label>
            </div>
            <div className="py-3 flex items-center gap-3.75">
              <input
                id="Duration"
                type="radio"
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <label htmlFor="Duration" className="block text-[14px] font-normal text-[#374151] cursor-pointer">
                Custom Duration
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-5">
        <input
          type="date"
          placeholder="Select Date"
          className="py-3 px-4 flex flex-1 items-center border border-[#E5E7EB] rounded-lg outline-none"
        />
        <input
          type="time"
          placeholder="Select Time"
          className="py-3 px-4 flex flex-1 items-center border border-[#E5E7EB] rounded-lg outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-5">
        <button
          className="border-none bg-[#F8FAFF] rounded-lg w-40 h-12 flex justify-center items-center text-[16px] font-medium text-[#384EC7] cursor-pointer"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          className="border-none bg-[#7489FF] rounded-lg w-40 h-12 flex justify-center items-center text-[16px] font-medium text-[#FAFAFA] cursor-pointer"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SchedulerSection;
