import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import { useState, useEffect } from 'react';
import CheckBox from './CheckBox'
import Axios from "axios"

export default function FilterBox() {
  const [isDispalyCategories, toggleDisplayCategories ] = useState  (false)
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    let isActive = true;
    const http = async () => {
        try {
          const res = await Axios(process.env.REACT_APP_API_URL+"products/categories/ProductCategory");
          if (isActive) {
            setItems(res.data.data.Items);
          }
        } catch (error) {
          console.log(error);
        }
      return;
    };
    http();

    return () => {
      isActive = false;
    };  
  }, []);

  if(isDispalyCategories){
    return (
    <>
      <h4>
        <button className='btn px-2 py-1 ' onClick={() => toggleDisplayCategories(!isDispalyCategories)} >Categories
          {isDispalyCategories ? <MdKeyboardArrowUp /> :  <MdKeyboardArrowDown />} 
        </button>
      </h4>
      {!!items.length && items.map((item, i) => <CheckBox key={i} title={item.name} qty={12} id={i}/> )}
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