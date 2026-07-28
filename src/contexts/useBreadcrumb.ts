import { useContext } from "react";
import { BreadcrumbContext } from "./BreadcrumbContext";

const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error(
      "useBreadcrumb must be used within BreadcrumbProvider"
    );
  }

  return context;
};

export default useBreadcrumb;