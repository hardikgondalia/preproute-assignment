const Header = () => {
  // isActive = true
  return (
    <header className="w-full p-3 md:p-5 border-b border-[#E5E7EB]">
      <div className="flex justify-end items-start md:items-center gap-5">
        <div className="w-9 md:w-12 h-9 md:h-12 flex justify-center items-center border border-[#D1D5DB] rounded-full cursor-pointer">
          <img src="/images/status.svg" alt="" className="w-4.5 md:w-7 h-4.5 md:h-7 relative" />
          {/* <div className={clsx("w-2.5 h-2.5 rounded-full", isActive ? "bg-[#0C9D61]" : "bg-[]")}></div> */}
        </div>
        <div className="flex items-start gap-2.25">
          <div className="w-9 md:w-12 h-9 md:h-12 flex justify-center items-center bg-[#FFD284] border border-[#6366F1] rounded-full">
            <img src="/images/avtar.svg" alt="" className="w-11.5 h-11.5 -mt-2.5" />
          </div>
          <div className="flex flex-col gap-1 text-[#374151]">
            <span className="text-[14px] md:text-[20px] font-semibold">Alex Wando</span>
            <span className="text-[12px]">Admin</span>
          </div>
          <div className="w-6 h-6 flex justify-center items-center cursor-pointer">
            <img src="/images/arrow-dropdown.svg" alt="" className="w-2.5 h-1.25" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;