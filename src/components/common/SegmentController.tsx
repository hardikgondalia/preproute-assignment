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

export default function SegmentedControl({ tabs, value, onChange }: Props) {
  const width = 100 / tabs.length;
  const index = tabs.findIndex((x) => x.value === value);

  return (
    <div className="rounded-xl border border-[#D9DCE5] bg-white p-1">
      <div className="relative flex h-11">
        <div
          className="absolute inset-y-1 rounded-lg bg-[#F3F5FF] transition-all duration-300"
          style={{
            width: `${width}%`,
            left: `${width * index}%`,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={clsx("relative z-10 flex-1 text-[14px] font-medium", value === tab.value ? "text-[#17175A]" : "text-[#9CA3AF]")}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
