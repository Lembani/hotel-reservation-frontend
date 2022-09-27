// Fetch data from the backend API
import { ActionTypes } from '../Actions/reservations';

const URL = 'http://127.0.0.1:3000/api/v1/reservations';

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
