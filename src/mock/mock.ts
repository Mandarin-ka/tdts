export const getRandomString = (mode: 'descr' | 'name'): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  if (mode === 'name')
    for (let i = 0; i < Math.floor(Math.random() * 3 + 1); i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  else {
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result += ' ';
    }
  }

  return result;
};
