import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../redux/actions/hotels';
import localStorageActions from '../utils/localStorage';

const Reservation = (props) => {
  const {
    reason, duration, startDay, endDay, id, hotelID,
  } = props;

  const dispatch = useDispatch();

  const Hotels = useSelector((state) => state.hotels);
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const userObject = localStorageActions.getUser();

  return (
    <div className="reservation" id={id}>
      <p>
        Reason for staying:
        {reason}
      </p>
      <p>
        Duration:
        {duration}
        <small>{duration === '1' ? ' day' : ' days'}</small>
      </p>
      <p>
        Start Day:
        {startDay}
      </p>
      <p>
        End Day:
        {endDay}
      </p>
      {
        Hotels.hotels?.map((hotel) => (hotel.id === hotelID ? (
          <div className="hotel-name" key={hotel.id}>
            <h2>
              HI
              {' '}
              {userObject.name}
              !
              YOU BOOKED
              {' '}
              {hotel.name}
              {' '}
              Hotel
              !
            </h2>
          </div>
        ) : null))
      }
    </div>
  );
};

export default Reservation;
