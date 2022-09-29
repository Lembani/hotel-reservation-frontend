import React, { useEffect, useContext } from 'react';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Swiper from 'swiper/bundle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { getReservations } from '../Redux/APIFunctions/reservations';
import Navbar from './NavBar';
import './CreateReservation.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Reservation from './Reservation';

import MenuContext from '../Context/MenuContext';

const Reservations = () => {
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  //   slidePerView: 1,
  //   autoplay: true,

  //   // If we need pagination
  //   pagination: {
  //     // el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
  // console.log(swiper);

  const { reservations, loading, error } = useSelector((state) => state.reservations);
  const { showSideBar, sideBar } = useContext(MenuContext);

  // console.log(reservations);

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

  console.log(sideBar);

  return (

    (
      <div className="all-reservations">
        {
            sideBar ? <Navbar />
              : (
                <>
                  <FontAwesomeIcon className="toggle" id="toggle" onClick={() => showSideBar()} icon={faBars} />

                  <div className="reserve-cards">
                    {reservations.map((reservation) => (
                      <div key={reservation.id}>
                        <Reservation
                          id={reservation.id}
                          reason={reservation.reason}
                          duration={reservation.duration}
                          startDay={reservation.start_day}
                          endDay={reservation.end_day}
                          userID={reservation.user_id}
                        />
                      </div>

                    ))}

                    {/* <div className="swiper-pagination" />

                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />

                    <div className="swiper-scrollbar" /> */}

                  </div>
                  <Navbar />
                </>
              )
        }
      </div>
    )
  );
};
export default Reservations;
