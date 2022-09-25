import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteHotel } from '../../Redux/Actions/hotels';

const DeletedHotel = (props) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line  object-curly-newline
  const { name, image, country, address, id } = props;
  const navigate = useNavigate();
  const deleteHandler = () => {
    dispatch(deleteHotel(id));
    navigate('../hotels');
  };
  return (
    <div>
      <div className="hotel">
        <div className="img-div">
          <div className="background" />
          <img src={image} alt="hotel-img" className="hotel-img" />
        </div>
        <div className="detail-div">
          <h2 className="hotel-name">{name}</h2>
          <div className="rating">
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
            <i className="uil uil-star" />
          </div>
          <div className="hotel-location">
            <p>{country}</p>
            <p>{address}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-hotel-btn"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeletedHotel;
