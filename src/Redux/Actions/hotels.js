// Create actions and reducers
const url = 'https://stark-badlands-38572.herokuapp.com/api/v1/hotels';
export const hotelsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'load':
      return { ...action.playload };
    default:
      return state;
  }
};

export const hotelDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'loadHotel':
      return { ...action.playload };
    default:
      return state;
  }
};

export const fetchHotels = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  dispatch({ type: 'load', playload: data });
};

export const addHotel = (inputData) => async () => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const fetchHotelData = (id) => async (dispatch) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  dispatch({ type: 'loadHotel', playload: data });
};

export const deleteHotel = (id) => async () => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
};
