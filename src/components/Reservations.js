import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { getReservations } from '../Redux/APIFunctions/reservations';
import localStorageActions from '../utils/localStorage';
import Navbar from './NavBar';
import './CreateReservation.css';
import Reservation from './Reservation';

import MenuContext from '../Context/MenuContext';

const Reservations = () => {
  const {
    reservations, loading, error,
  } = useSelector((state) => state.reservations);
  const { showSideBar, sideBar } = useContext(MenuContext);

  const userObject = localStorageActions.getUser();

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

  console.log(reservations);

  return (

    (
      <div className="all-reservations">
        {
            sideBar ? <Navbar />
              : (
                <>
                  <FontAwesomeIcon className="toggle" id="toggle" onClick={() => showSideBar()} icon={faBars} />

                  <div className="reserve-cards">

                    {reservations?.map((reservation) => (
                      reservation.user_id === userObject.id
                        ? (
                          <div key={reservation.id}>
                            <Reservation
                              id={reservation.id}
                              reason={reservation.reason}
                              duration={reservation.duration}
                              startDay={reservation.start_day}
                              endDay={reservation.end_day}
                              userID={reservation.user_id}
                              hotelID={reservation.hotel_id}
                            />

                          </div>
                        ) : null

                    ))}

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
