import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import ModalSection from "../common/ModalSection";
import TestCreationSection from "./TestCreationSection";

const TestInfo = () => {
  // const dispatch = useAppDispatch();
  const currentTestState = useAppSelector((state) => state.currentTest);
  const [testEdit , setTestEdit ] = useState(false);
  return (
    <>
    <div className="w-full p-5 flex justify-between border border-[#E5E7EB] rounded-xl">
      <div className="flex flex-col gap-5">
        <div className="w-fit h-6 px-2.5 flex justify-center text-[14px] text-[#F8FAFF] border rounded-xl border-[#F8FAFF] bg-[linear-gradient(104.9deg,#07013C_0%,#000A3A_102.39%)]">
          Chapter Wise
        </div>
        <div className="flex items-center gap-2.5">
          <img src="/images/ar_sticker.svg" alt="" className="w-6 h-6" />
          <div className="text-[16px] font-bold">{currentTestState?.data?.name}</div>
          <button className="w-25 h-6 flex justify-center items-center gap-1.5 bg-[#2AB7A9] rounded-lg cursor-pointer">
            <img src="/images/cognition.svg" alt="" />
            <span className="text-[14px] text-[#FEFEFF]">{currentTestState?.data?.difficulty}</span>
          </button>
        </div>
        <ul className="flex flex-col gap-3.75">
          <li className="flex items-center gap-1.25">
            <div className="min-w-25 text-[12px] font-normal text-[#6B7180]">Subject</div>
            <div className="text-[12px] font-normal text-[#6B7180]">:</div>
            <div className="text-[16px] font-medium text-[#6B7180]">{currentTestState?.data?.subject}</div>
          </li>
          <li className="flex items-center gap-1.25">
            <div className="min-w-25 text-[12px] font-normal text-[#6B7180]">Topic</div>
            <div className="text-[12px] font-normal text-[#6B7180]">:</div>
            <div className="flex items-center gap-1.25">
              {currentTestState?.data?.topics.map((topic: any) => (
                <span
                  key={topic}
                  className="w-fit px-2.5 flex justify-center items-center border border-[#E9B406] rounded-lg text-[14px] font-normal text-[#E9B406]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-1.25">
            <div className="min-w-25 text-[12px] font-normal text-[#6B7180]">Sub Topic</div>
            <div className="text-[12px] font-normal text-[#6B7180]">:</div>
            <div className="flex items-center gap-1.25">
              {currentTestState?.data?.sub_topics.map((subTopic: any) => (
                <span
                  key={subTopic}
                  className="w-fit px-2.5 flex justify-center items-center border border-[#E9B406] rounded-lg text-[14px] font-normal text-[#E9B406]"
                >
                  {subTopic}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end justify-between">
        <img src="/images/pen-icon.svg" alt="" className="w-4 h-4 cursor-pointer" onClick={()=>setTestEdit(true)}/>
        <div className="px-1.5 flex items-center gap-1.25 border border-[#E5E7EB] rounded-lg">
          <div className="px-1 flex items-center gap-1.25">
            <img src="/images/timer.svg" alt="" className="w-4 h-4" />
            <span className="text-[14px] font-normal text-[#374151]">{currentTestState?.data?.total_time} Min</span>
          </div>
          <div className="text-[#E5E7EB]">|</div>
          <div className="px-1 flex items-center gap-1.25">
            <img src="/images/quiz.svg" alt="" className="w-4 h-4" />
            <span className="text-[14px] font-normal text-[#374151]">{currentTestState?.data?.total_questions} Q’s</span>
          </div>
          <div className="text-[#E5E7EB]">|</div>
          <div className="px-1 flex items-center gap-1.25">
            <img src="/images/leaderboard.svg" alt="" className="w-4 h-4" />
            <span className="text-[14px] font-normal text-[#374151]">{currentTestState?.data?.total_marks} Marks</span>
          </div>
        </div>
      </div>
    </div>
    <ModalSection isOpen={testEdit} onClose={()=>setTestEdit(false)}>
      <TestCreationSection/>
    </ModalSection>
    </>
  );
};

export default TestInfo;
