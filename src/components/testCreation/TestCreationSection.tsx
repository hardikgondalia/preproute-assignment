import { useEffect, useState } from "react";
import type { TestConfig } from "../../services/interfaces/test";
import MultiSelectDropdown from "../common/MultiSelectDropdown";
import { fetchSubjects, selectSubjects } from "../../store/slice/subjectSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTopics, selectTopicsBySubject } from "../../store/slice/topicSlice";
import { getSubTopicsForTopics } from "../../services/subTopic.service";
import { validateTest, type ValidationErrors } from "../../utils/testValidation";
import { createTest, updateTest } from "../../services/task.service";
import type { ApiResponse } from "../../services/interfaces/common";
import { useNavigate } from "react-router-dom";
import { setCurrentTest } from "../../store/slice/currentTestSlice";

interface SubTopic {
  id: string;
  name: string;
  topic_id: string;
}

interface TestCreationSectionProps {
  onClose?: () => void;
  initialData?: {
    id: string;
    name: string;
    questions: string[];
    total_questions: number;
    total_marks: number;
    subject: string;
    topics: string[];
    sub_topics: string[];
  };
}

const initialForm: TestConfig = {
  name: "",
  type: "chapterwise",
  subject: "",
  topics: [],
  sub_topics: [],
  correct_marks: 0,
  wrong_marks: -1,
  unattempt_marks: 0,
  difficulty: "medium",
  total_time: 0,
  total_marks: 0,
  total_questions: 0,
  status: "draft",
};

const TestCreationSection = ({ initialData, onClose }: TestCreationSectionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isEdit = !!initialData;

  const [formData, setFormData] = useState<TestConfig>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [saving, setSaving] = useState(false);
  const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
  const [loadingSubTopics, setLoadingSubTopics] = useState(false);

  const subjects = useAppSelector(selectSubjects);
  const topics = useAppSelector(selectTopicsBySubject(formData.subject));

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  useEffect(() => {
    if (!isEdit) {
      setFormData(initialForm);
      return;
    }
    if (!initialData || !subjects.length) return;
    const subject = subjects.find((x: any) => x.name === initialData.subject);
    if (!subject) return;
    setFormData({
      ...initialForm,
      ...initialData,
      subject: subject.id,
      topics: [],
      sub_topics: [],
    });
  }, [isEdit, initialData, subjects]);

  useEffect(() => {
    if (!formData.subject) return;
    dispatch(fetchTopics(formData.subject));
  }, [dispatch, formData.subject]);

  useEffect(() => {
    if (!isEdit || !initialData || !topics.length) return;
    setFormData((prev) => {
      if (prev.topics.length) return prev;
      return {
        ...prev,
        topics: topics.filter((topic: any) => initialData.topics.includes(topic.name)).map((topic: any) => topic.id),
      };
    });
  }, [isEdit, initialData, topics]);

  useEffect(() => {
    const loadSubTopics = async () => {
      if (!formData.topics.length) {
        setSubTopics([]);
        setFormData((prev) =>
          prev.sub_topics.length
            ? {
                ...prev,
                sub_topics: [],
              }
            : prev,
        );
        return;
      }

      try {
        setLoadingSubTopics(true);
        const data = await getSubTopicsForTopics(formData.topics);
        setSubTopics(data);
        setFormData((prev) => {
          if (isEdit && initialData) {
            if (prev.sub_topics.length) return prev;
            return {
              ...prev,
              sub_topics: data.filter((sub) => initialData.sub_topics.includes(sub.name)).map((sub) => sub.id),
            };
          }
          const validIds = new Set(data.map((x) => x.id));
          return {
            ...prev,
            sub_topics: prev.sub_topics.filter((id) => validIds.has(id)),
          };
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSubTopics(false);
      }
    };

    loadSubTopics();
  }, [formData.topics, isEdit, initialData]);

  const handleSubjectChange = (subjectId: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: subjectId,
      topics: [],
      sub_topics: [],
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = validateTest(formData);
    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      setSaving(true);
      const response = (await createTest(formData)) as ApiResponse;
      if (response.status !== "success") {
        const updatedTest = {
          ...response.data,
          subject: subjects.find((s) => s.id === response.data.subject)?.name ?? response.data.subject,
          topics: response.data.topics.map((id: string) => topics.find((t) => t.id === id)?.name ?? id),
          sub_topics: response.data.sub_topics.map((id: string) => subTopics.find((s) => s.id === id)?.name ?? id),
        };
        dispatch(setCurrentTest(updatedTest));
        setFormData(initialForm);
        navigate(`/test-creation/${response.data.id}/questions`);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    if (!validateForm() || !initialData) return;
    try {
      setSaving(true);
      const model = {
        name: formData.name,
        questions: [],
        total_questions: formData.total_questions,
        total_marks: formData.total_marks,
      };
      const response = (await updateTest(model, initialData.id)) as ApiResponse;
      if (response?.status === "success") {
        const updatedTest = {
          ...response.data,
          subject: subjects.find((s) => s.id === response.data.subject)?.name ?? response.data.subject,
          topics: response.data.topics.map((id: string) => topics.find((t) => t.id === id)?.name ?? id),
          sub_topics: response.data.sub_topics.map((id: string) => subTopics.find((s) => s.id === id)?.name ?? id),
        };
        dispatch(setCurrentTest(updatedTest));
        onClose?.();
      }
    } finally {
      setSaving(false);
      onClose?.();
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-3.5 md:gap-7.5">
      <div className="max-w-sm">
        <div className="relative flex items-center rounded-xl border border-[#D1D5DB] bg-white px-2.5 py-1.25">
          <div
            id="indicator"
            className="absolute left-2.5 top-1.25 h-10 w-[calc((100%-16px)/3)] rounded-lg bg-[#F8FAFF] transition-all duration-300 ease-in-out"
          />
          <button className="relative z-10 flex-1 cursor-pointer p-2.5 text-[14px] font-medium text-[#384EC7]">Chapterwise</button>
          <button className="relative z-10 flex-1 cursor-pointer p-2.5 text-[14px] font-normal text-[#9CA3AF]">PYQ</button>
          <button className="relative z-10 flex-1 cursor-pointer p-2.5 text-[14px] font-normal text-[#9CA3AF]">Mock Test</button>
        </div>
      </div>

      <form className="flex h-full w-full flex-col gap-7.5 md:h-[calc(100%-185px)] md:overflow-y-auto">
        <div className="flex w-full flex-col items-center gap-6.5 md:flex-row md:gap-12.5">
          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label htmlFor="subject" className="text-[#374151]">
              Subject
            </label>

            <div className="grid grid-cols-1">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => handleSubjectChange(e.target.value)}
                disabled={isEdit}
                autoComplete="subject-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pl-4 pr-8 text-[#374151] outline-1 -outline-offset-1 outline-[#9CA3AF]"
              >
                {subjects.map((subject: any) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>

              <img
                src="/images/input-dropdown.svg"
                alt=""
                className="pointer-events-none col-start-1 row-start-1 mr-4 size-6 self-center justify-self-end"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label htmlFor="name" className="text-[#374151]">
              Name of Test
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name of Test"
              className="rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6.5 md:flex-row md:gap-12.5">
          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label className="text-[#374151]">Topic</label>

            <MultiSelectDropdown
              options={topics}
              selectedKeys={formData.topics}
              onChange={(keys) =>
                setFormData((prev) => ({
                  ...prev,
                  topics: keys,
                  sub_topics: [],
                }))
              }
              getKey={(x: any) => x.id}
              getLabel={(x: any) => x.name}
              disabled={isEdit}
            />
          </div>

          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label className="text-[#374151]">Sub Topic</label>

            <MultiSelectDropdown
              options={subTopics}
              selectedKeys={formData.sub_topics}
              onChange={(keys) =>
                setFormData((prev) => ({
                  ...prev,
                  sub_topics: keys,
                }))
              }
              getKey={(x: any) => x.id}
              getLabel={(x: any) => x.name}
              disabled={isEdit || !formData.topics.length || loadingSubTopics}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6.5 md:flex-row md:gap-12.5">
          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label htmlFor="total_time" className="text-[#374151]">
              Duration (Minutes)
            </label>

            <input
              id="total_time"
              type="number"
              name="total_time"
              value={formData.total_time}
              onChange={handleInputChange}
              disabled={isEdit}
              className="rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-3.75 font-medium">
            <label htmlFor="difficulty" className="text-[#374151]">
              Test Difficulty Level
            </label>

            <div className="flex items-center justify-between py-3">
              {[
                { id: "Easy", value: "easy", label: "Easy" },
                { id: "Medium", value: "medium", label: "Medium" },
                { id: "Difficult", value: "difficult", label: "Difficult" },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-2.5">
                  <input
                    id={item.id}
                    type="radio"
                    name="difficulty"
                    value={item.value}
                    checked={formData.difficulty === item.value}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        difficulty: e.target.value as TestConfig["difficulty"],
                      }))
                    }
                    disabled={isEdit}
                    className="relative size-6 appearance-none rounded-full border-2 border-[#7489FF] bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-[#7489FF] checked:bg-[#7489FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7489FF] disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden cursor-pointer"
                  />

                  <label htmlFor={item.id} className="cursor-pointer text-[16px] font-medium text-[#374151]">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-[16px] font-medium text-[#374151]">Marking Scheme:</div>

        <div className="flex w-full flex-col items-center gap-6.5 xl:flex-row xl:gap-12.5">
          <div className="flex w-full items-center gap-12.5">
            <div className="flex w-full flex-col gap-3.75 font-medium">
              <label htmlFor="wrong_marks" className="text-[#374151]">
                Wrong Answer
              </label>

              <input
                id="wrong_marks"
                type="number"
                name="wrong_marks"
                value={formData.wrong_marks}
                onChange={handleInputChange}
                disabled={isEdit}
                className="w-full rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
              />
            </div>

            <div className="flex w-full flex-col gap-3.75 font-medium">
              <label htmlFor="unattempt_marks" className="text-[#374151]">
                Unattempted
              </label>

              <input
                id="unattempt_marks"
                type="number"
                name="unattempt_marks"
                value={formData.unattempt_marks}
                onChange={handleInputChange}
                disabled={isEdit}
                className="w-full rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
              />
            </div>

            <div className="flex w-full flex-col gap-3.75 font-medium">
              <label htmlFor="correct_marks" className="text-[#374151]">
                Correct Answer
              </label>

              <input
                id="correct_marks"
                type="number"
                name="correct_marks"
                value={formData.correct_marks}
                onChange={handleInputChange}
                disabled={isEdit}
                className="w-full rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-12.5">
            <div className="flex w-full flex-col gap-3.75 font-medium">
              <label htmlFor="total_questions" className="text-[#374151]">
                No of Questions
              </label>

              <input
                id="total_questions"
                type="number"
                name="total_questions"
                value={formData.total_questions}
                onChange={handleInputChange}
                placeholder="Ex: 100"
                className="w-full rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
              />
            </div>

            <div className="flex w-full flex-col gap-3.75 font-medium">
              <label htmlFor="total_marks" className="text-[#374151]">
                Total Marks
              </label>

              <input
                id="total_marks"
                type="number"
                name="total_marks"
                value={formData.total_marks}
                onChange={handleInputChange}
                placeholder="Ex: 250"
                className="w-full rounded-lg border border-[#9CA3AF] px-4 py-2.75 text-[#374151] outline-none"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="flex items-center justify-end gap-5 pt-5">
        {isEdit ? (
          <>
            <button
              type="button"
              onClick={onClose}
              className="flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-[#F8FAFF] text-[16px] font-medium text-[#384EC7]"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleUpdate}
              disabled={saving}
              className="flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-[#7489FF] text-[16px] font-medium text-[#FAFAFA] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Updating..." : "Update"}
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-[#F8FAFF] text-[16px] font-medium text-[#384EC7]"
            >
              Exit
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={saving}
              className="flex h-12 w-40 cursor-pointer items-center justify-center rounded-lg bg-[#7489FF] text-[16px] font-medium text-[#FAFAFA] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Next"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestCreationSection;
