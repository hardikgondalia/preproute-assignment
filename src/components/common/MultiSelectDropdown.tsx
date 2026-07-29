import { useEffect, useMemo, useRef, useState } from "react";

type MultiSelectDropdownProps<T> = {
  options: T[];
  selectedKeys: string[];
  onChange: (keys: string[]) => void;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  placeholder?: string;
  disabled?: boolean;
};

function MultiSelectDropdown<T extends { disabled?: boolean }>({
  options,
  selectedKeys,
  onChange,
  getKey,
  getLabel,
  placeholder = "Select",
  disabled = false,
}: MultiSelectDropdownProps<T>) {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [tempSelectedKeys, setTempSelectedKeys] = useState<string[]>(selectedKeys);
  useEffect(() => {
    setTempSelectedKeys(selectedKeys);
  }, [selectedKeys]);

  const closeDropdown = () => {
    setOpen(false);
    onChange(tempSelectedKeys);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && open) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, tempSelectedKeys]);

  const enabledOptions = useMemo(() => options.filter((o) => !o.disabled), [options]);

  const isSelected = (item: T) => tempSelectedKeys.includes(getKey(item));
  const isAllSelected = enabledOptions.length > 0 && enabledOptions.every((o) => isSelected(o));

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setTempSelectedKeys([]);
    } else {
      setTempSelectedKeys(enabledOptions.map(getKey));
    }
  };

  const toggleValue = (item: T) => {
    const key = getKey(item);
    if (tempSelectedKeys.includes(key)) {
      setTempSelectedKeys((prev) => prev.filter((x) => x !== key));
    } else {
      setTempSelectedKeys((prev) => [...prev, key]);
    }
  };

  const displayValue = useMemo(() => {
    if (tempSelectedKeys.length === 0) {
      return placeholder;
    }

    const labels = options.filter((x) => tempSelectedKeys.includes(getKey(x))).map(getLabel);

    if (labels.length <= 2) {
      return labels.join(", ");
    }

    return `${labels.length} selected`;
  }, [tempSelectedKeys, getLabel, placeholder]);

  return (
    <div ref={ref} className="ms_container col-start-1 row-start-1 w-full text-[#374151] appearance-none rounded-md bg-white py-3 pr-4 pl-4 outline-1 -outline-offset-1 outline-[#9CA3AF]">
      <button
        type="button"
        className="ms_input_box"
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setOpen((prev) => !prev);
          }
        }}
      >
        <span>{displayValue}</span>

        <img src={open ? "/images/input-up-dropdown.svg" : "/images/input-dropdown.svg"} alt="" className="search_icon ml-auto" />
      </button>

      {open && (
        <div className="ms_dropdown">
          <label className="ms_option">
            <input type="checkbox" className="msd_checkbox" checked={isAllSelected} onChange={toggleSelectAll} />
            <span>Select All</span>
          </label>

          {options.map((option) => (
            <label
              key={getKey(option)}
              className="ms_option"
              style={{
                opacity: option.disabled ? 0.5 : 1,
                cursor: option.disabled ? "not-allowed" : "pointer",
              }}
            >
              <input type="checkbox" className="msd_checkbox" disabled={option.disabled} checked={isSelected(option)} onChange={() => toggleValue(option)} />
              <span>{getLabel(option)}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelectDropdown;
