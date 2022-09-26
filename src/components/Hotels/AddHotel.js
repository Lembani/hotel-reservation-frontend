import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import { useGetCategoriesQuery } from '../../Redux/APIFunctions/categories';
import { addHotel } from '../../Redux/Actions/hotels';

const AddHotel = () => {
  const [notification, notify] = useState('Add Hotel');
  const dispatch = useDispatch();
  const categories = useGetCategoriesQuery().currentData;

  const [formInputs, changeFormInputs] = useState({
    name: '',
    price: '',
    description: '',
    country: '',
    city: '',
    address: '',
    image_url: '',
    category_id: '',
  });

  const updateCategory = (e) => {
    changeFormInputs({
      ...formInputs,
      category_id: e.target.value,
    });
  };

  const updateName = (e) => {
    changeFormInputs({
      ...formInputs,
      name: e.target.value,
    });
  };

  const updatePrice = (e) => {
    changeFormInputs({
      ...formInputs,
      price: e.target.value,
    });
  };

  const updateDescription = (e) => {
    changeFormInputs({
      ...formInputs,
      description: e.target.value,
    });
  };

  const updateCountry = (e) => {
    changeFormInputs({
      ...formInputs,
      country: e.target.value,
    });
  };

  const updateCity = (e) => {
    changeFormInputs({
      ...formInputs,
      city: e.target.value,
    });
  };

  const updateAddress = (e) => {
    changeFormInputs({
      ...formInputs,
      address: e.target.value,
    });
  };

  const updateUrl = (e) => {
    changeFormInputs({
      ...formInputs,
      image_url: e.target.value,
    });
  };

  let options;
  if (categories === undefined) {
    options = '';
  } else {
    options = categories.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (formInputs.name === '') {
      notify('Kindly Add Your name');
      return;
    }
    if (formInputs.price === '') {
      notify('Kindly Add The Price');
      return;
    }

    if (formInputs.description === '') {
      notify('Kindly Add The description');
      return;
    }
    if (formInputs.country === '') {
      notify('Kindly Add The Country');
      return;
    }

    if (formInputs.city === '') {
      notify('Kindly Add The city');
      return;
    }

    if (formInputs.address === '') {
      notify('Kindly Add The Address');
      return;
    }

    if (formInputs.image_url === '') {
      notify('Kindly add the image');
      return;
    }
    if (formInputs.category_id === '') {
      notify('Kindly Select a category');
      return;
    }
    dispatch(addHotel(formInputs));
    changeFormInputs({
      name: '',
      price: '',
      description: '',
      country: '',
      city: '',
      address: '',
      image_url: '',
      category_id: '',
    });
    notify('Hotel added succesfully');
    const reset = () => {
      notify('Add Hotel');
    };
    setTimeout(reset, 1000);
  };
  return (
    <div>
      <NavBar />
      <div className="form-section">
        <h1 className="notification">{notification}</h1>
        <form onSubmit={formSubmit} className="hotel-form">
          <input
            type="text"
            placeholder="Enter name"
            onChange={updateName}
            value={formInputs.name}
          />
          <input
            type="text"
            placeholder="Enter price"
            onChange={updatePrice}
            value={formInputs.price}
          />
          <input
            type="text"
            placeholder="Enter description"
            onChange={updateDescription}
            value={formInputs.description}
          />
          <input
            type="text"
            placeholder="Enter country"
            onChange={updateCountry}
            value={formInputs.country}
          />
          <input
            type="text"
            placeholder="Enter city"
            onChange={updateCity}
            value={formInputs.city}
          />
          <input
            type="text"
            placeholder="Enter address"
            onChange={updateAddress}
            value={formInputs.address}
          />
          <input
            type="text"
            placeholder="Enter image_url"
            onChange={updateUrl}
            value={formInputs.image_url}
          />
          <div className="select">
            <select name="category_id" id="1" onClick={updateCategory}>
              <option defaultValue="">select category</option>
              {options}
            </select>
          </div>
          <button type="submit" className="reserve-btn">
            submit
          </button>
        </form>
        <NavLink to="../hotels" className="hotels-nav">
          <i className="uil uil-angle-left-b back-description" />
        </NavLink>
      </div>
    </div>
  );
};

export default AddHotel;
