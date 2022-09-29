// Fetch data from the backend API
import { ActionTypes } from '../Actions/reservations';

const URL = 'https://stark-badlands-38572.herokuapp.com/api/v1/reservations';

export const fetchReservations = (reservation) => ({
  type: ActionTypes.FETCH_RESERVATIONS,
  payload: reservation,
});

export const fetchReservationsLoading = () => ({
  type: ActionTypes.FETCH_DATA_LOADING,
});

export const fetchReservationsError = () => ({
  type: ActionTypes.FETCH_DATA_ERROR,
});

export const fetchAddedReservation = (reservation) => ({
  type: ActionTypes.ADD_RESERVATION,
  payload: reservation,
});

export const getReservations = () => (dispatch) => {
  dispatch(fetchReservationsLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchReservations(data));
    })
    .catch(() => {
      dispatch(fetchReservationsError());
    });
};

const reservationURL = 'http://127.0.0.1:3000/api/v1/hotels';

export const postReservation = (reservation, hotelId) => (dispatch) => {
  console.log(reservation);
  dispatch(fetchReservationsLoading());
  fetch(`${reservationURL}/${hotelId}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((reservation)),
  }).then((res) => {
    console.log(res);
    console.log(res.statusText);
    dispatch(fetchAddedReservation(res.statusText));
  }).catch(() => {
    dispatch(fetchReservationsError());
    console.log('error');
  });
};
