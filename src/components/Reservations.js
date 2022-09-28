import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
// import { Navigation, Pagination } from 'swiper';
import { getReservations } from '../Redux/APIFunctions/reservations';
import NavBar from './NavBar';

import './CreateReservation.css';

import 'swiper/css/bundle';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Reservation from './Reservation';
// import { fetchHotels } from '../Redux/Actions/hotels';

const Reservations = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidePerView: 1,
    autoplay: true,

    // If we need pagination
    pagination: {
      // el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  console.log(swiper);

  const { reservations, loading, error } = useSelector((state) => state.reservations);
  console.log(reservations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  if (reservations === undefined && loading) {
    <h1 className="loading">Loading reservation ...</h1>;
  }

  if (error) {
    <h1 className="error">Kindly refresh the page ...</h1>;
  }

  return (
    <div className="all-reservations">
      {/* <h1>ALL MY RESERVATIONS</h1> */}

      <div className="swiper" id="swipper">
        <div className="swiper-wrapper">
          {
        reservations.map((reservation) => (

          <div key={reservation.id} className="swiper-slide">
            <Reservation
              key={reservation.id}
              reason={reservation.reason}
              duration={reservation.duration}
              startDay={reservation.startDay}
              endDay={reservation.endDay}
            />
          </div>

        ))
          }
        </div>
        <div className="swiper-pagination" />

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />

        <div className="swiper-scrollbar" />

      </div>
      <NavBar />
    </div>
  );
};
export default Reservations;
