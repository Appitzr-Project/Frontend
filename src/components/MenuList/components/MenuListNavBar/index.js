import React, { useEffect, useState } from 'react';

const MenuListNavBar = ({ categories, sectionRef }) => {
  const [targetElement, setTargetElement] = useState(null);
  useEffect(() => {
    if (sectionRef.current[targetElement]) {
      const offsetTop =
        window.pageYOffset +
        sectionRef.current[targetElement].getBoundingClientRect().top -
        65;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, [sectionRef, targetElement]);

  return (
    <nav className="secondary_nav">
      <div className="container">
        <ul id="secondary_nav">
          {categories?.map((category, idx) => (
            <li key={`categoryList-${idx}`}>
              <button
                className={`list-group-item list-group-item-action ${
                  targetElement === idx ? 'active' : ''
                }`}
                id="list-group-item"
                onClick={(button) => setTargetElement(idx, button)}
              >
                {category}
              </button>
            </li>
          ))}
          {/* Hide for now */}
          {/* <li>
            <button
                className={`list-group-item list-group-item-action ${
                  targetElement === categories.length ? 'active' : ''
                } review`}
              id="list-group-item"
              onClick={() => setTargetElement(categories.length)}
            >
              <i className="icon_chat_alt"></i>Reviews
            </button>
          </li> */}
        </ul>
      </div>
      <span></span>
    </nav>
  );
};

export default MenuListNavBar;
