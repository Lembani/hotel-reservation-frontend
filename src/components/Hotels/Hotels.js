// eslint-disable   react/jsx-one-expression-per-line
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line  object-curly-newline
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { fetchHotels } from '../../Redux/Actions/hotels';
import NavBar from '../NavBar';

import 'swiper/css';
import Hotel from './Hotel';
import './Hotel.css';

const Hotels = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);
  const Hotels = useSelector((state) => state.hotels);
  console.log(Hotels);
  let availableHotels;
  if (Hotels.hotels === undefined) {
    availableHotels = <h1 className="loading">Loading hotels ...</h1>;
  } else {
    availableHotels = Hotels.hotels.map((hotel) => (
      <SwiperSlide key={hotel.id}>
        <Hotel
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
      <NavBar />
      <div className="hotels-home">
        <div className="hotels-header">
          <h1>Available Hotels</h1>
          <p>Select hotel of your choice</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
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
          <div className="mob-cards">{availableHotels}</div>
        </Swiper>
      </div>
    </section>
  );
};
export default Hotels;
