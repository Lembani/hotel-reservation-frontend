// Create actions and reducers

export const hotelsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'load':
      return { ...action.playload };

    default:
      return state;
  }
};

export const fetchHotels = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/v1/hotels');
  const data = await response.json();
  dispatch({ type: 'load', playload: data });
};
