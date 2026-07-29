import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectQuestion } from "../../store/slice/questionSlice";

const QuestionsSidebar = () => {
  const dispatch = useAppDispatch();
  const totalQuestions = useAppSelector((state) => state.currentTest.data?.total_questions ?? 0);
  const { questions, selectedQuestion } = useAppSelector((state) => state.questions);
  const handleSelectQuestion = (questionNumber: number) => {
    if (!questions[questionNumber]) return;
    dispatch(selectQuestion(questionNumber));
  };

  return (
    <div className="flex flex-col gap-2">
      {Object.keys(questions)
        .map(Number)
        .sort((a, b) => a - b)
        .map((questionNumber) => {
          const question = questions[questionNumber];

          const isStarted = question.hasStarted;
          const isCompleted = question.isValid;
          const isCurrent = selectedQuestion === questionNumber;

          let className = "border border-[#E5E7EB] bg-white text-[#9CA3AF]";

          if (isStarted && !isCompleted) {
            className = "border border-[#D1D5DB] bg-[#F9FAFB] text-[#6B7280]";
          }

          if (isCompleted) {
            className = "border border-[#22C55E] bg-[#ECFDF5] text-[#22C55E]";
          }

          if (isCurrent) {
            className += " ring-2 ring-[#7489FF]";
          }

          return (
            <button
              key={questionNumber}
              onClick={() => dispatch(selectQuestion(questionNumber))}
              className={`h-10 rounded-lg px-3 flex items-center justify-between ${className}`}
            >
              <span>Question {questionNumber}</span>

              {isCompleted && <img src="/images/tick.svg" alt="" className="w-4 h-4" />}
            </button>
          );
        })}
    </div>
  );
};

export default QuestionsSidebar;
