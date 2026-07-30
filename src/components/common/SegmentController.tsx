import clsx from "clsx";

type Tab = {
  value: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
};

export default function SegmentedControl({
  tabs,
  value,
  onChange,
}: Props) {
  const width = 100 / tabs.length;
  const index = tabs.findIndex((x) => x.value === value);

  return (
    <div className="rounded-3xl border border-[#D9DCE5] bg-white p-2">
      <div className="relative flex">
        <div
          className="absolute top-0 bottom-0 rounded-2xl bg-[#F3F5FF] transition-all duration-300"
          style={{
            width: `${width}%`,
            left: `${width * index}%`,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={clsx(
              "relative z-10 flex-1 py-6 text-[22px] font-medium transition-colors duration-300",
              value === tab.value
                ? "text-[#17175A]"
                : "text-[#9CA3AF]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}