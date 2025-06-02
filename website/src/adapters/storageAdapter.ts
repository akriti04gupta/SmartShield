export const storage = {
  get: (key: string): Promise<any> => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      return new Promise((resolve) =>
        chrome.storage.local.get([key], (result) => resolve(result[key]))
      );
    } else {
      const item = localStorage.getItem(key);
      return Promise.resolve(item ? JSON.parse(item) : null);
    }
  },
  set: (key: string, value: any): Promise<void> => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      return new Promise((resolve) =>
        chrome.storage.local.set({ [key]: value }, () => resolve())
      );
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    }
  },
};
