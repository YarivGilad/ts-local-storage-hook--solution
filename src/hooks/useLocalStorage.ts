import { useState } from "react";


export function useLocalStorage<T>(
  KEY: string,
  initialValue: T
): [T, (val: T | ((val: T) => T)) => void] {

  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(KEY);
    if (item !== null) return JSON.parse(item) as T;
    return initialValue;
  });

  // const setValue = (value: T) => {
  //   setStoredValue(value);
  //   localStorage.setItem(APP_NAME, JSON.stringify(value));
  // };
  type cb = (val: T) => T

  const setValue = (value: T | cb) => {
    let newValue: T;
    if (typeof value === "function") {
      newValue = (value as cb)(storedValue);
    } else {
      newValue = value;
    }
    setStoredValue(newValue);
    localStorage.setItem(KEY, JSON.stringify(newValue));
    //return newValue;
  };

  return [storedValue, setValue];
}
//
// if we want to support passing a callback to the setValue
//-----------------------------------------------------------
// const setValue = (value: any) => {
//   let newValue = value;
//   if(typeof value === 'function'){
//     newValue = value(storedValue)
//   }
//   setStoredValue(newValue);
//   localStorage.setItem(APP_NAME, JSON.stringify(newValue));
// }
