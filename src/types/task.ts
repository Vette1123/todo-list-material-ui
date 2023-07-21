export interface Task {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  description: string;
  isChecked: boolean;
  createdAt?: string;
  updatedAt?: string;
  finishedAt?: string;
  archivedAt?: string;
}
