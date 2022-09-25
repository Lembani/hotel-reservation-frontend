/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

const HotelDetails = () => {
  const hotelId = useParams('id').id;
  const Hotels = useSelector((state) => state.hotels);
  const myHotels = Hotels.hotels;
  const hotel = myHotels.filter((item) => item.id === parseInt(hotelId, 10));
  const selectedHotel = hotel[0];
  return (
    <div>
      <NavBar />
      <div className="detail-section">
        <div className="detail-image-div">
          <img
            src={selectedHotel.image_url}
            alt="hotel-img"
            className="hotel-img-detail"
          />
          <p className="hotel-detail-description">
            {selectedHotel.description}
          </p>
          <NavLink to="/hotels" className="hotels-nav">
            <i className="uil uil-angle-left-b back-description" />
          </NavLink>
        </div>

        <div className="cost-div">
          <h1 className="hotel-name-desc">{selectedHotel.name}</h1>
          <p>{selectedHotel.country},</p>
          <p>{selectedHotel.city},</p>
          <p>{selectedHotel.address}</p>
          <div className="desc-price">
            <div className="exact-cost">
              <span>Booking Fee</span>

              <span>${selectedHotel.price}</span>
            </div>
            <div className="available-benefits">
              <span>
                <i className="uil uil-check-circle detail-check" />
                40% off best available rates
              </span>
              <span>
                <i className="uil uil-check-circle" />
                Breakfast
              </span>
              <span>
                <i className="uil uil-check-circle" />
                20% off your total food and beverage bill{' '}
              </span>
              <span>
                <i className="uil uil-check-circle" />
                Minibar stocked with juices, soft drinks and crisps
              </span>
              <span>
                <i className="uil uil-check-circle" />
                Wi-Fi connectivity
              </span>
              <span>
                <i className="uil uil-check-circle" />
                Hand Sanitizer and Face Mask
              </span>
            </div>
            <button type="button" className="reserve-btn">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelDetails;
