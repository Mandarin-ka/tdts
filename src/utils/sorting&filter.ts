import { Task } from 'types/task';

export const filterByPriority = (tasks: Task[], priorities: number[]) => {
  return tasks.filter((e) => priorities.includes(e.severity));
};

export const sortByCompleteAndPriority = (tasks: Task[]) => {
  return tasks

    .sort((a, b) => a.severity - b.severity)
    .sort((a, b) => {
      if (a.done === true && b.done === false) return 1;
      if (a.done === false && b.done === true) return -1;

      return 0;
    });
};

export const searchByNameAndDescription = (tasks: Task[], value: string) =>
  tasks.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()) || e.description.toLowerCase().includes(value.toLowerCase()));
