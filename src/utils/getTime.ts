export const getTime = (): string => {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const getRandomTime = (): string => {
  return `2024.${Math.floor(Math.random() * 11) + 1}.${Math.floor(Math.random() * 30 + 1)} ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`;
};
