type LocalStorageKey = string;

const useSavePreferences = <TypeOfData,>(key: LocalStorageKey) => {
   const save = (data: TypeOfData) => {
      const savableData = JSON.stringify(data);

      localStorage.setItem(key, savableData);
   };

   const load = () => {
      const storedData = localStorage.getItem(key);
      
      if (storedData) {
         return JSON.parse(storedData) as TypeOfData;
      } else {
         return null;
      }
   };

   return {
      save,
      load
   };
};

export default useSavePreferences;