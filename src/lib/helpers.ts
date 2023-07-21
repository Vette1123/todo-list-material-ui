import { LOCAL_STORAGE_KEY } from "./constants";

export const getLocalStorageTasks = () => {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
};
