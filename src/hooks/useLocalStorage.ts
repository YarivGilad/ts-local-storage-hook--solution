import { useState, useEffect } from "react";


export function useLocalStorage<T>(KEY: string,initialValue: T): [T, (val: T | ((val: T) => T)) => void] {
  
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(KEY);
    if (item !== null) return JSON.parse(item) as T;
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(storedValue));
  }, [storedValue]);
  
  return [storedValue, setStoredValue];
}



/* 

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
*/
