import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../Context';

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);


  const onChangeHandler = (event) => {
    const ele = event.target;
    const value = ele.value; 
    setSearchValue(value);
  }

  return(
    <input 
      className="search-bar" 
      type="search"  
      placeholder="Search TODO"
      value={ searchValue }
      onChange={ (event) => onChangeHandler(event)}
    />
  )
}