import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const MenuListModalDetail = ({ show, handleClose, menuDetailData }) => {
  const menuDetail = menuDetailData?.[1]?.[0] || {};
  const [quantity, setQuantity] = useState(1);
  const handleBtnClick = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} id="modal-detail">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{menuDetail?.productName}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {menuDetail?.images?.map((image, idx) => (
              <Carousel.Item key={`item-${idx}`}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <h5 style={{ marginTop: '8px' }}>Quantity</h5>
          <div className="numbers-row">
            <input
              type="text"
              value={quantity}
              id="qty_1"
              className="qty2 form-control"
              name="quantity"
            />
            <div
              className="inc button_inc"
              onClick={() => handleBtnClick('inc')}
            >
              +
            </div>
            <div
              className="dec button_inc"
              onClick={() => handleBtnClick('dec')}
            >
              -
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            className="row small-gutters full-width"
            style={{
              width: '100%',
            }}
          >
            <div className="col-md-4">
              <button
                type="reset"
                className="btn_1 outline full-width mb-mobile"
              >
                Cancel
              </button>
            </div>
            <div className="col-md-8">
              <button type="reset" className="btn_1 full-width">
                Add to cart
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MenuListModalDetail;
