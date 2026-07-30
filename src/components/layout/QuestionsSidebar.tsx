import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectQuestion } from "../../store/slice/questionSlice";

const QuestionsSidebar = () => {
  const dispatch = useAppDispatch();
  const totalQuestions = useAppSelector((state) => state.currentTest.data?.total_questions ?? 0);
  // // const { questions, selectedQuestion } = useAppSelector((state) => state.questions);
  // // const questionNumbers = Object.keys(questions)
  // //   .map(Number)
  // //   .sort((a, b) => a - b);
  const { questions, questionOrder, selectedQuestionId } = useAppSelector((state) => state.questions);
  const handleSelectQuestion = (questionId: string) => {
    if (!questions[questionId]) return;
    dispatch(selectQuestion(questionId));
  };

  if (questionOrder?.length === 0) {
    return <div className="flex flex-1 items-center justify-center px-4 text-center text-sm text-gray-500">No questions available</div>;
  }

  return (
    <div className="h-full flex flex-1 flex-col gap-2 pt-10 pb-4">
      <div className="px-2.5 flex justify-between items-center flex-wrap mb-6">
        <span className="text-[15px] font-medium text-[#6B7180]">Question creation</span>
        <img src="/images/previous.svg" alt="" className="w-4.5 h-4.5 cursor-pointer" />
      </div>
      <div className="px-2.5 text-[14px] font-normal text-[#6B7180] flex gap-1.25 mb-6">
        <span>Total Questions</span>
        <span>.</span>
        <span className="font-medium">{totalQuestions}</span>
      </div>
      <div className="flex flex-col gap-2.5 px-2.5 pb-5 pt-2.5 md:h-[calc(100%-110px)] md:overflow-y-auto">
        {questionOrder?.map((questionId, index) => {
          const question = questions[questionId];
          if (!question) return null;
          const isStarted = question.hasStarted;
          const isCompleted = question.isValid;
          const isCurrent = selectedQuestionId === questionId;

          let className = "border border-[#E5E7EB] bg-white text-[#9CA3AF]";

          if (isStarted && !isCompleted) {
            className = "border border-[#D1D5DB] bg-[#F9FAFB] text-[#6B7280]";
          }

          if (isCompleted) {
            className = "border border-[#0C9D61] bg-[#ECFDF5] text-[#0C9D61]";
          }

          if (isCurrent) {
            className += " ring-2 ring-[#0C9D61]";
          }

          return (
            <button
              key={questionId}
              onClick={() => handleSelectQuestion(questionId)}
              className={`rounded-lg px-3 py-1.5 flex items-center gap-2.5 hover:bg-[#F2FAF6] transition-colors duration-300 cursor-pointer ${className}`}
            >
              {isCompleted && <img src="/images/tick.svg" alt="" className="w-4 h-4" />}
              <span className="text-[12px] font-normal">Question {index + 1}</span>
              <img src="/images/next-to-next.svg" alt="" className="w-3 h-3 ml-auto" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsSidebar;
