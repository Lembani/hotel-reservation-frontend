/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHotelData } from '../../Redux/Actions/hotels';
import NavBar from '../NavBar';

const HotelDetails = () => {
  const hotelId = useParams('id').id;
  const dispatch = useDispatch();
  useState(() => {
    dispatch(fetchHotelData(hotelId));
  }, [dispatch]);
  const Hotel = useSelector((state) => state.hotelData);
  const selectedHotel = Hotel.hotel;
  return (
    <div>
      <NavBar />
      {selectedHotel === undefined ? (
        <h1 className="loading">Loading...</h1>
      ) : (
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
              <button type="button" className="reserve-btn submit-mobile">
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HotelDetails;
