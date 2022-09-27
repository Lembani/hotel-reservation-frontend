import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postReservation } from '../Redux/APIFunctions/reservations';
import { fetchHotels } from '../Redux/Actions/hotels';
import './CreateReservation.css';
/* eslint-disable  jsx-a11y/label-has-associated-control */

const CreateReservation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);
  const Hotels = useSelector((state) => state.hotels);
  const [optionId, setoption] = useState('');

  const handleSelect = (e) => {
    setoption(e.target.value);
  };
  console.log(optionId);

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
    //   user_id: user.id,
    };

    dispatch(postReservation(newReservation, optionId));
    reason.value = '';
    duration.value = '';
  };

  return (
    <div className="form-input">
      <h2>ADD NEW RESERVATION</h2>
      <form className="input-fields" onSubmit={handleSubmit}>
        <label>Reason for staying</label>
        <textarea cols={90} name="reason" placeholder="reason" required />
        <div className="input-container">
          <label>Duration:</label>
          <input className="duration" type="number" name="duration" placeholder="Duration" required />
        </div>
        <div className="input-container">
          <label>Start day:</label>
          <input type="date" name="startDay" required />
        </div>
        <div className="input-container">
          <label>End day:</label>
          <input type="date" name="endDay" required />
        </div>
        <div className="input-select">
          <label htmlFor="group">
            Choose a hotel:
            <select name="hotels" id="hotels" onChange={(e) => handleSelect(e)}>
              {
              Hotels.hotels
                ?.map((hotel) => <option key={hotel.id} value={hotel.id}>{hotel.name}</option>)
}
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default CreateReservation;
