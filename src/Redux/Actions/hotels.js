// Create actions and reducers
const url = 'http://127.0.0.1:3000/api/v1/hotels';
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
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
};

export const fetchHotelData = (id) => async (dispatch) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  dispatch({ type: 'loadHotel', playload: data });
};

export const deleteHotel = (id) => async () => {
  console.log('yes');
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
};
