export const saveDataToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  };
  
  export const getDataFromLocalStorage = (key, defaultValue) => {
    try {
      const savedData = localStorage.getItem(key);
      return savedData !== null ? JSON.parse(savedData) : defaultValue;
    } catch (error) {
      console.error('Error getting data from localStorage:', error);
      return defaultValue;
    }
  };