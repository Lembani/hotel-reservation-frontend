// Fetch data from the backend API
import { ActionTypes } from '../actions/reservations';

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

const reservationURL = 'https://stark-badlands-38572.herokuapp.com/api/v1/hotels';

export const postReservation = (reservation, hotelId) => (dispatch) => {
  dispatch(fetchReservationsLoading());
  fetch(`${reservationURL}/${hotelId}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((reservation)),
  }).then((res) => {
    dispatch(fetchAddedReservation(res.statusText));
    window.location.reload();
  }).catch(() => {
    dispatch(fetchReservationsError());
  });
};

const DelUrl = 'https://stark-badlands-38572.herokuapp.com/api/v1/hotels';

export const deleteReservation = (hotelId, id) => (dispatch) => {
  fetch(`${DelUrl}/${hotelId}/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  }).then(() => {
    window.location.reload();
  }).catch(() => {
    dispatch(fetchReservationsError());
  });
};
