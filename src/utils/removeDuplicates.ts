export const removeDuplicates = (arr: string[]) => {
  const cleanArr = [...new Set(arr)];

  return cleanArr;
};
