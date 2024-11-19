export const setItem = (key: string, val: unknown) => {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(val));
};
export const getItem = (key: string) => {
  if (typeof window !== "undefined")
    return JSON.parse(localStorage.getItem(key) as string);
};
