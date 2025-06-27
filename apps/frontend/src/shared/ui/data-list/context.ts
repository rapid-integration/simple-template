import { createContext, useContext } from "react";

export type DataListContextValue = {
  orientation: "horizontal" | "vertical";
};

export const DataListContext = createContext<DataListContextValue>(
  {} as DataListContextValue,
);

export const useDataListContext = (): DataListContextValue => {
  const context = useContext(DataListContext);

  if (context === undefined) {
    throw new Error(
      "The 'useDataListContext' hook must be used within a <DataList.Root> component.",
    );
  }

  return context;
};

export default useDataListContext;
