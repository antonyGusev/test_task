const makeHash = (length: number = 10, justNumbers = false) => {
  let text = ''
  const chars =
    justNumbers ? '0123456789' :
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return text;
};

const varToString = (varObj: any) => Object.keys(varObj);

const initSingleton = (ClassPage: any) => {
  if (!ClassPage._instance) {
    ClassPage._instance = new ClassPage();
    return ClassPage._instance;
  }

  return ClassPage._instance;
};

const mapAsync = (arr: any[], cb: (value: any, index: number, array: any[]) => unknown): Promise<any[]> => Promise.all(arr.map(cb));

const filterAsync = async (arr: any[], cb: (value: any, index: number, array: any[]) => unknown) => {
  const filterMap = await mapAsync(arr, cb);
  return arr.filter((val, i) => filterMap[i]);
}

export {
  makeHash, varToString, initSingleton, mapAsync, filterAsync
};
