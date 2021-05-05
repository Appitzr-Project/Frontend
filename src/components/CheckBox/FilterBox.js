import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react';
import CheckBox from './CheckBox'

export default function FilterBox() {
  const [isDispalyCategories, toggleDisplayCategories ] = useState  (false)
  if(isDispalyCategories){
    return (
    <>
      <h4>
        <button className='btn px-2 py-1 ' onClick={() => toggleDisplayCategories(!isDispalyCategories)} >Categories
          {isDispalyCategories ? <MdKeyboardArrowUp /> :  <MdKeyboardArrowDown />} 
        </button>
      </h4>
      {Array.from({ length: 5 }).map((i, index) => <CheckBox key={index} title="Pizza" qty={12} id={index}/> )}
    </>)
}
  return (
    <h4>
      <button className='btn px-2 py-1 ' onClick={() => toggleDisplayCategories(!isDispalyCategories)} >Categories
        {isDispalyCategories ? <MdKeyboardArrowUp /> :  <MdKeyboardArrowDown />} 
      </button>
    </h4>
  );
}