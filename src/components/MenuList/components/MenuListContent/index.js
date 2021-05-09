import React from 'react';
import OrderSummaryCard from '../../../Card/components/OrderSummaryCard';
import MenuListCard from '../MenuListCard';
import MenuListOrderSummary from '../MenuListOrderSummary';

const MenuListContent = ({ handleShow, menu, sectionRef }) => {
  return (
    <div className="bg_gray">
      <div className="container margin_detail">
        <div className="row">
          <div className="col-lg-8 list_menu">
            {Object.entries(menu).map((detail, idx) => (
              <section
                key={`menu-${idx}`}
                id={`section-${idx + 1}`}
                ref={(el) => (sectionRef.current[idx] = el)}
              >
                <h4>{detail[0]}</h4>
                <div className="row">
                  {detail[1].map((menuItem, index) => (
                    <MenuListCard
                      key={`card-${index}`}
                      handleShow={handleShow}
                      detail={detail}
                      index={index}
                      menuItem={menuItem}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default MenuListContent;
