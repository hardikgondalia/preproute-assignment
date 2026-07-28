import { useState } from "react";
import type { ReactNode } from "react";

import { BreadcrumbContext } from "./BreadcrumbContext";
import type { BreadcrumbItem } from "./BreadcrumbContext";

type Props = {
  children: ReactNode;
};

const BreadcrumbProvider = ({ children }: Props) => {
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbItem>({
    menu: "",
    page: "",
    tab: "",
  });

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumb, setBreadcrumb }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbProvider;