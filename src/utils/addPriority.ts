export const addPriority = (priorities: number[], current: number) => {
  priorities.indexOf(current) !== -1 ? priorities.splice(priorities.indexOf(current), 1) : priorities.push(current);
  return priorities;
};
