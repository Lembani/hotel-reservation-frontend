// eslint-disable   react/jsx-one-expression-per-line
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line  object-curly-newline
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import MenuContext from '../../Context/MenuContext';

import 'swiper/css/navigation';
import { fetchHotels } from '../../Redux/Actions/hotels';
import NavBar from '../NavBar';

import 'swiper/css';
import DeletedHotel from './DeletedHotel';
import './Hotel.css';

const DeleteHotel = () => {
  const { showSideBar, sideBar } = useContext(MenuContext);
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
      {sideBar ? (
        <NavBar />
      ) : (
        <>
          <div className="hotels-home">
            <FontAwesomeIcon
              className="hamburger"
              onClick={() => showSideBar()}
              icon={faBars}
            />
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
          </div>
        </>
      )}
    </section>
  );
};
export default DeleteHotel;
