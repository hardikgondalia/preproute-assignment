import { createContext } from "react";

export interface BreadcrumbItem {
  menu: string;
  page: string;
  tab?: string;
}

export interface BreadcrumbContextType {
  breadcrumb: BreadcrumbItem;
  setBreadcrumb: React.Dispatch<React.SetStateAction<BreadcrumbItem>>;
}

export const BreadcrumbContext =
  createContext<BreadcrumbContextType | null>(null);