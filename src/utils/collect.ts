const collect = (collection: object | []) => {
   if (Array.isArray(collection)) {
      return collection;
   } else {
      return Object.values(collection);
   }
};

export default collect;