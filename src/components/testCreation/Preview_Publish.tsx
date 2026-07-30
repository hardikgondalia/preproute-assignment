import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBulkQuestions, publishTest } from "../../services/task.service";
import type { ApiResponse } from "../../services/interfaces/common";
import { setQuestions } from "../../store/slice/questionSlice";
import ModalSection from "../common/ModalSection";
import { useNavigate } from "react-router-dom";
import TestCreationSection from "./TestCreationSection";

const Preview = () => {
  const currentTest = useAppSelector((state) => state.currentTest.data);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedQuestionId, questionOrder, questions } = useAppSelector((state) => state.questions);
  const [successModal, setSuccessModal] = useState(false);
  const [testEdit, setTestEdit] = useState(false);

  // const { questions, questionOrder, selectedQuestionId } = useAppSelector((state) => state.questions);

  const fetchQuestions = async () => {
    try {
      const response = (await fetchBulkQuestions({ question_ids: currentTest.questions })) as ApiResponse;
      if (response.status === "success") {
        const mappedQuestions = response.data.map((q: any) => ({
          id: q.id,
          type: q.type,
          question: q.question ?? "",
          option1: q.option1 ?? "",
          option2: q.option2 ?? "",
          option3: q.option3 ?? "",
          option4: q.option4 ?? "",
          correct_option: q.correct_option,
          explanation: q.explanation ?? "",
          difficulty: q.difficulty,
          topic: q.topic ?? "",
          sub_topic: q.sub_topic ?? "",
          test_id: q.test_id,
          hasStarted: true,
          isValid: true,
        }));
        dispatch(setQuestions(mappedQuestions));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!currentTest?.questions?.length) return;
    fetchQuestions();
  }, [currentTest]);

const handlePublish = async () => {
  try {
    if (!currentTest?.id) return;

    const response = (await publishTest(currentTest.id)) as ApiResponse;

    if (response.status) {
      setSuccessModal(true);

      setTimeout(() => {
        setSuccessModal(false);
        navigate("/dashboard");
      }, 5000);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <main className="flex-1 h-full">
        <div className="flex items-center gap-2.5 justify-between flex-wrap">
          {currentTest?.status === "draft" && (
            <button
              className="bg-[#7489FF] hover:bg-[#292b86] text-white rounded-lg px-6 py-3 font-medium shadow cursor-pointer"
              onClick={() => handlePublish()}
            >
              Publish Test
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 pb-4 gap-6 mt-8 md:h-[calc(100%-60px)] overflow-hidden">
          <section className="xl:col-span-4 bg-white rounded-lg border border-[#E5E7EB] md:h-[calc(100vh-245px)] overflow-y-auto">
            <div className="p-4 border-b border-[#E5E7EB] flex justify-between items-center">
              <h2 className="text-xl font-semibold">Test Details</h2>
              {currentTest?.status === "draft" && <button className="text-[#7489FF] cursor-pointer" onClick={()=>setTestEdit(true)}>Edit</button>}
            </div>

            <div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Test Name</p>
                <p className="font-medium mt-1">{currentTest?.name}</p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Subject</p>
                <p className="font-medium mt-1">{currentTest?.subject}</p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Duration</p>
                <p className="font-medium mt-1">{currentTest?.total_time} Minutes</p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Total Questions</p>
                <p className="font-medium mt-1">{currentTest?.total_questions}</p>
              </div>
              <div className="py-3 px-4 border-b border-[#E5E7EB]">
                <p className="text-slate-500 text-md">Total Marks</p>
                <p className="font-medium mt-1">{currentTest?.total_marks}</p>
              </div>
            </div>
          </section>

          <section className="xl:col-span-8 space-y-5 md:h-[calc(100vh-245px)] overflow-y-auto">
            {questionOrder.map((id, index) => {
              const question = questions[id];
              return (
                <div className="bg-white rounded-lg border border-[#E5E7EB]">
                  <div className="flex justify-between items-center border-b border-[#E5E7EB] p-4">
                    <h2 className="font-semibold text-lg">Question {index + 1}</h2>
                    <span className="text-sm text-slate-500">{currentTest.correct_marks} Marks</span>
                  </div>
                  <div className="p-6">
                    <label
                      htmlFor={`${id}-option1`}
                      className="block text-[16px] font-normal text-[#374151] cursor-pointer"
                      dangerouslySetInnerHTML={{
                        __html: question?.question ?? "",
                      }}
                    />
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <input
                          id="one"
                          type="radio"
                          name={`question-${question.id}`}
                          checked={question?.correct_option === "option1"}
                          onChange={() => {}}
                          className="pointer-events-none relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF]"
                        />
                        <label htmlFor="one" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                          {question?.option1}
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          id="two"
                          type="radio"
                          name={`question-${question.id}`}
                          checked={question?.correct_option === "option2"}
                          className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                        />
                        <label htmlFor="two" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                          {question?.option2}
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          id="three"
                          type="radio"
                          name={`question-${question.id}`}
                          checked={question?.correct_option === "option3"}
                          className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                        />
                        <label htmlFor="three" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                          {question?.option3}
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          id="four"
                          type="radio"
                          name={`question-${question.id}`}
                          checked={question?.correct_option === "option4"}
                          className="relative size-5 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                        />
                        <label htmlFor="four" className="block text-[16px] font-normal text-[#374151] cursor-pointer">
                          {question?.option4}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>

      <ModalSection isOpen={successModal} onClose={() => setSuccessModal(false)}>
        <div className="fixed inset-0 flex items-center justify-center p-5">
          <div className="rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-5xl text-green-600">
              <img src="/images/tick.svg" alt="" className="w-18 h-18" />
            </div>
            <h2 className="text-3xl font-bold text-[#374151] mt-3">Test Published!</h2>
            <p className="text-slate-500 mt-3">Your test has been published successfully.</p>
            <div className="flex gap-3 mt-6"></div>
          </div>
        </div>
      </ModalSection>

      <ModalSection isOpen={testEdit} onClose={() => setTestEdit(false)}>
        <div className="flex justify-between items-center">
          <span className="text-[16px] font-medium text-[#00000099]">Edit Test creation</span>
          <img src="/images/close_small.svg" alt="" className="w-6 h-6 cursor-pointer" onClick={() => setTestEdit(false)}/>
        </div>
        <TestCreationSection initialData={currentTest} onClose={() => setTestEdit(false)}/>
      </ModalSection>
    </>
  );
};

export default Preview;
