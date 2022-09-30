import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { postReservation } from '../redux/api-functions/reservations';
import { fetchHotels } from '../redux/actions/hotels';
import localStorageActions from '../utils/localStorage';
import './CreateReservation.css';

import NavBar from './NavBar';
import MenuContext from '../context/MenuContext';

/* eslint-disable  jsx-a11y/label-has-associated-control */
/* eslint-disable  no-unused-expressions */

const CreateReservation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);
  const Hotels = useSelector((state) => state.hotels);
  const { addedReservation } = useSelector((state) => state.reservations);

  const [optionId, setoption] = useState('');
  const { showSideBar, sideBar } = useContext(MenuContext);
  const userID = localStorageActions.getUser();

  const handleSelect = (e) => {
    setoption(e.target.value);
  };

  const location = useLocation();
  const { hotelId } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      reason, duration, startDay, endDay,
    } = e.target.elements;
    const newReservation = {
      reason: reason.value,
      duration: duration.value,
      start_day: startDay.value,
      end_day: endDay.value,
      user_id: userID.id,
    };

    hotelId ? dispatch(postReservation(newReservation, hotelId))
      : dispatch(postReservation(newReservation, optionId));

    reason.value = '';
    duration.value = '';
  };

  return (
    sideBar ? <NavBar />
      : (
        <div className="forms">
          <FontAwesomeIcon className="toggle" onClick={() => showSideBar()} icon={faBars} />
          <div className="form-input">
            <h2>ADD NEW RESERVATION</h2>
            <h1>{addedReservation}</h1>
            <form className="input-fields" onSubmit={handleSubmit}>
              <label>Reason for staying</label>
              <textarea cols={90} name="reason" placeholder="reason" required />

              <label>Duration:</label>
              <input className="duration" type="number" name="duration" placeholder="Duration" required />

              <label>Start day:</label>
              <input type="date" name="startDay" required />

              <label>End day:</label>
              <input type="date" name="endDay" required />

              {
                hotelId ? null : (
                  <div className="input-select">
                    <label htmlFor="group">
                      Choose a hotel:
                    </label>
                    <select name="hotels" id="hotels" onChange={(e) => handleSelect(e)}>
                      <option>Choose a hotel</option>
                      {Hotels.hotels
                        ?.map(
                          (hotel) => (
                            <option key={hotel.id} value={hotel.id}>
                              {hotel.name}
                            </option>
                          ),
                        )}
                    </select>

                  </div>
                )
              }

              <button type="submit">

                Add

              </button>
            </form>
          </div>
        </div>
      )
  );
};
export default CreateReservation;
