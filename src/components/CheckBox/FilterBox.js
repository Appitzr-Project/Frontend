import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react';
import CheckBox from './CheckBox'

export default function FilterBox() {
  const [isDispalyCategories, toggleDisplayCategories ] = useState  (false)
  if(isDispalyCategories){
    return  <div className="container">
    <div className="col-sm-6 mt-2">
      <h4>
    <button className='btn px-2 py-1 ' onClick={() => toggleDisplayCategories(!isDispalyCategories)} >Categories
      {isDispalyCategories ? <MdKeyboardArrowUp /> :  <MdKeyboardArrowDown />} 
    </button>
    </h4>
    {Array.from({ length: 5 }).map((i, index) => (
     <CheckBox title="Pizza" qty={12} id="category"/>
      ))}
    
    </div>
  </div>
}
  return (
    <div className="container margin_30_20">			
			<div className="row">
				<aside className="col-lg-3" id="sidebar_fixed">
						{/* <!-- /filter_type --> */}
						<div className="filter_type">
            <h4>
            <button className='btn px-2 py-1 ' onClick={() => toggleDisplayCategories(!isDispalyCategories)} >Categories
              {isDispalyCategories ? <MdKeyboardArrowUp /> :  <MdKeyboardArrowDown />} 
            </button>
            </h4>
						</div>
				</aside>
						</div>
					</div>
  
  );
}