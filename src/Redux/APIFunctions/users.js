// // Fetch data from the backend API
// import { fetchReservationsLoading, fetchReservationsError } from './reservations';
// // /users
// const ActionTypes = {
//   FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
//   FETCH_RESERVATIONS: 'FETCH_RESERVATIONS',
//   FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
// };
// const USERURL = 'http://127.0.0.1:3000/users';

// export const fetchUsers = (users) => ({
//   type: 'FETCH_USERS',
//   payload: users,
// });

// export const getUsers = () => (dispatch) => {
//   dispatch(fetchReservationsLoading());
//   fetch(USERURL)
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(fetchUsers(data));
//     })
//     .catch(() => {
//       dispatch(fetchReservationsError());
//     });
// };

// const initialState = {
//   users: [],
//   loading: false,
//   error: false,
// };

// const UsersReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.FETCH_DATA_LOADING:
//       return {
//         ...state, loading: true,
//       };
//     case 'FETCH_USERS':
//       return {
//         ...state, reservations: payload,
//       };
//     case ActionTypes.FETCH_DATA_ERROR:
//       return {
//         ...state, error: true,
//       };
//     default:
//       return state;
//   }
// };
// export default UsersReducer;
