export const LocalStorage = {
   get(key: string): string | null {
      const data = window.localStorage.getItem(key);
      if (data !== null) {
         return data;
      }
      return null;
   },

   set(key: string, value: string | number | boolean | object): void {
      const val =
         typeof value === 'object' ? JSON.stringify(value) : value.toString();
      window.localStorage.setItem(key, val);
   },

   remove(key: string): void {
      window.localStorage.removeItem(key);
   },

   clear(): void {
      window.localStorage.clear();
   },
};
