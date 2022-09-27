import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../Redux/APIFunctions/reservations';
// import { fetchHotels } from '../Redux/Actions/hotels';

const Reservations = () => {
  const { reservations } = useSelector((state) => state.reservations);

  console.log(reservations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <div>
      I am starting
    </div>
  );
};

export default Reservations;
