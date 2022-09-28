// eslint-disable   react/jsx-one-expression-per-line
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line  object-curly-newline
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { fetchHotels } from '../../Redux/Actions/hotels';
import Navbar from '../NavBar';

import 'swiper/css';
import DeletedHotel from './DeletedHotel';
import './Hotel.css';

const DeleteHotel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);
  const Hotels = useSelector((state) => state.hotels);

  let availableHotels;
  if (Hotels.hotels === undefined) {
    availableHotels = <h1 className="loading">Loading hotels ...</h1>;
  } else {
    availableHotels = Hotels.hotels.map((hotel) => (
      <SwiperSlide key={hotel.id}>
        <DeletedHotel
          id={hotel.id}
          name={hotel.name}
          image={hotel.image_url}
          country={hotel.country}
          address={hotel.address}
        />
      </SwiperSlide>
    ));
  }

  return (
    <section className="hotels-section">
      <Navbar />
      <div className="hotels-home">
        <div className="hotels-header">
          <h1>Delete Hotels</h1>
          <p>Click delete button to delete hotel</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          speed={800}
          navigation
          className="container"
        >
          <div>{availableHotels}</div>
        </Swiper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={1}
          speed={800}
          navigation
          className="mobile-version"
        >
          <div>{availableHotels}</div>
        </Swiper>
        <NavLink to="../hotels" className="hotels-nav del-nav">
          <i className="uil uil-angle-left-b back-description" />
        </NavLink>
      </div>
    </section>
  );
};
export default DeleteHotel;
