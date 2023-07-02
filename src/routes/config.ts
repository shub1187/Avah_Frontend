import { ReactNode } from "react";

export type RouteType = {
  element: ReactNode,
  state: string,
  tabIndex:string,
  index?: boolean,
  childView?: boolean,
  path?: string,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    icon?: String;
  };
};