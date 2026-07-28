import useBreadcrumb from "../../contexts/useBreadcrumb";

const Breadcrumb = () => {
  const { breadcrumb } = useBreadcrumb();

  return (
    <div className="flex items-center gap-2 text-[16px] font-medium text-[#00000099]">
      <span>{breadcrumb.menu}</span>

      {breadcrumb.page && (
        <>
          <span>/</span>
          <span>{breadcrumb.page}</span>
        </>
      )}

      {breadcrumb.tab && (
        <>
          <span>/</span>
          <span className="text-[#111827]">{breadcrumb.tab}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
