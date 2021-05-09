import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';

const MenuListBannerModal = ({ show, setShow }) => {
  return (
    <Modal show={show} id="modal-banner" centered onHide={() => setShow(false)}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/detail_1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/detail_2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/detail_3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Modal>
  );
};

export default MenuListBannerModal;
