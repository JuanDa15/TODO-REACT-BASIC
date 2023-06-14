import { useEffect, useState } from 'react';
import { getFromStorage, saveInStorage} from './../utilities'

export function useLocalStorage({
  storage_key,
  default_value
}) {
  let localStorageTodos = null;
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(localStorageTodos ?? default_value)
  
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      localStorageTodos = getFromStorage(storage_key);
      if (localStorageTodos) setData(localStorageTodos);
      setLoading(false);  
    }, 500)
  }, [])

  const updateStorage = (value) => {
    saveInStorage(storage_key, value);
    setData(value);
  }
  return {
    data, updateStorage, loading
  }
}