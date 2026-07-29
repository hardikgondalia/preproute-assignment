import { useEffect } from "react";
import RichTextEditor from "../common/RichTextEditor";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { initializeTest, nextQuestion, restoreDraft, updateQuestion } from "../../store/slice/questionSlice";
import { loadQuestionDraft, saveQuestionDraft } from "../../utils/questionDraftStorage";

const QuestionsSection = () => {
  const dispatch = useAppDispatch();
  const currentTestState = useAppSelector((state) => state.currentTest);
  const questionState = useAppSelector((state) => state.questions);
  const { selectedQuestion, questions } = questionState;
  const currentQuestion = questions[selectedQuestion];
  const testId = currentTestState.data?.id ?? "";
  const totalQuestions = currentTestState.data?.total_questions ?? 0;

  useEffect(() => {
    if (!testId) return;
    const draft = loadQuestionDraft(testId);
    if (draft) {
      dispatch(restoreDraft(draft));
    } else {
      dispatch(initializeTest(testId));
    }
  }, [dispatch, testId]);

  useEffect(() => {
    if (!questionState.testId) return;
    saveQuestionDraft(questionState.testId, questionState);
  }, [questionState]);

  const handleNext = () => {
    if (selectedQuestion === totalQuestions) {
      return;
    }
    dispatch(
      nextQuestion({
        totalQuestions,
      }),
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between py-3.5">
        <div className="text-[16px] font-medium text-[#07013C]">
          Question {selectedQuestion}
          <span className="text-[#a4c5f2]">/{totalQuestions}</span>
        </div>
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
      <div className="pb-5 flex flex-col gap-7.5 h-[calc(100%-325px)] overflow-y-auto">
        <button className="w-fit flex items-center gap-0.5 py-1.5 px-1.25 bg-[#FFFBFB] rounded-lg cursor-pointer">
          <img src="/images/delete.svg" alt="" className="w-5 h-5" />
          <span className="text-[14px] font-normal text-[#FF7F7F]">Delete All Edits</span>
        </button>
        <div>
          <RichTextEditor
            content={currentQuestion?.question ?? ""}
            onChange={(html) =>
              dispatch(
                updateQuestion({
                  questionNumber: selectedQuestion,
                  field: "question",
                  value: html,
                }),
              )
            }
            onDelete={() =>
              dispatch(
                updateQuestion({
                  questionNumber: selectedQuestion,
                  field: "question",
                  value: "",
                }),
              )
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="" className="text-[16px] font-medium">
            Type the options below
          </label>
          <div className="flex flex-col gap-7.5">
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                checked={currentQuestion?.correct_option === "option1"}
                onChange={() =>
                  dispatch(
                    updateQuestion({
                      questionNumber: selectedQuestion,
                      field: "correct_option",
                      value: "option1",
                    }),
                  )
                }
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input
                  type="text"
                  placeholder="Type Option here"
                  className="flex-1 outline-none"
                  value={currentQuestion?.option1 ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "option1",
                        value: e.target.value,
                      }),
                    )
                  }
                />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                checked={currentQuestion?.correct_option === "option2"}
                onChange={() =>
                  dispatch(
                    updateQuestion({
                      questionNumber: selectedQuestion,
                      field: "correct_option",
                      value: "option2",
                    }),
                  )
                }
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input
                  type="text"
                  placeholder="Type Option here"
                  className="flex-1 outline-none"
                  value={currentQuestion?.option2 ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "option2",
                        value: e.target.value,
                      }),
                    )
                  }
                />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                checked={currentQuestion?.correct_option === "option3"}
                onChange={() =>
                  dispatch(
                    updateQuestion({
                      questionNumber: selectedQuestion,
                      field: "correct_option",
                      value: "option3",
                    }),
                  )
                }
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input
                  type="text"
                  placeholder="Type Option here"
                  className="flex-1 outline-none"
                  value={currentQuestion?.option3 ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "option3",
                        value: e.target.value,
                      }),
                    )
                  }
                />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-3.75">
              <input
                id="Easy"
                type="radio"
                checked={currentQuestion?.correct_option === "option4"}
                onChange={() =>
                  dispatch(
                    updateQuestion({
                      questionNumber: selectedQuestion,
                      field: "correct_option",
                      value: "option4",
                    }),
                  )
                }
                name="push-notifications"
                className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
              />
              <div className="py-3 px-5 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg">
                <input
                  type="text"
                  placeholder="Type Option here"
                  className="flex-1 outline-none"
                  value={currentQuestion?.option4 ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "option4",
                        value: e.target.value,
                      }),
                    )
                  }
                />
                <img src="/images/input-delete.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="" className="text-[16px] font-medium">
            Add Solution
          </label>
          <div className="relative w-full flex">
            <textarea
              name=""
              id=""
              rows={5}
              value={currentQuestion?.explanation ?? ""}
              onChange={(e) =>
                dispatch(
                  updateQuestion({
                    questionNumber: selectedQuestion,
                    field: "explanation",
                    value: e.target.value,
                  }),
                )
              }
              className="py-3 pl-5 pr-8 flex flex-1 items-center gap-4 border border-[#E5E7EB] rounded-lg outline-none"
            ></textarea>
            <img src="/images/input-delete.svg" alt="" className="w-6 h-6 absolute right-2 top-3 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-7.5">
          <label htmlFor="" className="text-[16px] font-medium">
            Question settings
          </label>
          <div className="flex flex-col gap-5">
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="country" className="text-[16px] text-[#374151]">
                Level of Difficulty
              </label>
              <div className="grid grid-cols-1">
                <select
                  id="difficulty"
                  name="difficulty"
                  value={currentQuestion?.difficulty ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "difficulty",
                        value: e.target.value,
                      }),
                    )
                  }
                  className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]"
                >
                  <option value="" disabled>
                    Select Difficulty
                  </option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Difficult">Difficult</option>
                </select>
                <img
                  src="/images/input-dropdown.svg"
                  alt=""
                  className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="topic" className="text-[16px] text-[#374151]">
                Topic
              </label>
              <div className="grid grid-cols-1">
                <select
                  id="topic"
                  name="topic"
                  value={currentQuestion?.topic ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "topic",
                        value: e.target.value,
                      }),
                    )
                  }
                  className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]"
                >
                  <option value="" disabled>
                    Select Topic
                  </option>
                  {currentTestState.data?.topics?.map((topic: string) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                <img
                  src="/images/input-dropdown.svg"
                  alt=""
                  className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end text-gray-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3.75 font-medium">
              <label htmlFor="sub_topic" className="text-[16px] text-[#374151]">
                Sub-topic
              </label>
              <div className="grid grid-cols-1">
                <select
                  id="sub_topic"
                  name="sub_topic"
                  value={currentQuestion?.sub_topic ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateQuestion({
                        questionNumber: selectedQuestion,
                        field: "sub_topic",
                        value: e.target.value,
                      }),
                    )
                  }
                  className="col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-8 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]"
                >
                  <option value="" disabled>
                    Select Sub Topic
                  </option>
                  {currentTestState.data?.sub_topics?.map((subTopic: string) => (
                    <option key={subTopic} value={subTopic}>
                      {subTopic}
                    </option>
                  ))}
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
          <button className="min-w-40 h-12 px-3 flex justify-center items-center bg-[#FF7F7F] border-none outline-none rounded-lg text-[16px] font-medium text-[#FAFAFA] cursor-pointer">
            Exit Test Creation
          </button>
          <button
            className="min-w-50 h-12 px-3 flex justify-center items-center bg-[#7489FF] border-none outline-none rounded-lg text-[16px] font-medium text-[#FAFAFA] cursor-pointer"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
