import { createContext, useMemo, useState } from "react";
import { Task } from "types/task";

export const AppContext = createContext({
  tasks: [] as Task[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTasks: (_value: Task[]) => {},
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
    }),
    [tasks]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
