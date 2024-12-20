import { Task } from './../types/task';

export const getItems = (): Task[] => JSON.parse(localStorage.getItem('deals') || '[]') || [];

export const setItem = (item: Omit<Task, 'id'>) => {
  if (!localStorage.getItem('deals')) {
    const currentItem = getItemWithId(item);
    localStorage.setItem('deals', JSON.stringify([currentItem]));
  } else {
    const items = getItems();
    const currentItem = getItemWithId(item);
    items.push(currentItem);
    localStorage.setItem('deals', JSON.stringify(items));
  }
};

export const deleteItem = (id: number) => {
  if (localStorage.getItem('deals')) {
    const items = JSON.parse(localStorage.getItem('deals') || '').filter((e: Task) => e.id !== id);
    localStorage.setItem('deals', JSON.stringify(items));
  }
};

export const changeItemStatus = (id: number) => {
  const items = getItems();
  const i = items.findIndex((e) => e.id === id);
  items[i].done = !items[i].done;
  console.log(items);
  localStorage.setItem('deals', JSON.stringify(items));
};

const getItemWithId = (item: Omit<Task, 'id'>): Task => {
  const items = getItems();

  if (items.length) {
    const i = Math.max(...items.map((e) => e.id)) + 1;
    return { id: i, ...item };
  } else {
    return { id: 1, ...item };
  }
};
