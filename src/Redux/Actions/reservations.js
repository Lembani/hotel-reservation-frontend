// Create actions and reducers
export const ActionTypes = {
  FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
  FETCH_RESERVATIONS: 'FETCH_RESERVATIONS',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',
};

const initialState = {
  reservations: [],
  loading: false,
  error: false,
};

const ReservationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.FETCH_RESERVATIONS:
      return {
        ...state, reservations: payload,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default ReservationsReducer;
