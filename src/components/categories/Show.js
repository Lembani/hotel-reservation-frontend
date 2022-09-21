/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import FormContext from '../../Context/FormContext';
import { useGetCategoryByIdQuery, useGetCategoryHotelsQuery } from '../../Redux/APIFunctions/categories';
import Loading from '../Loading';
import UpdateCategory from './Update';

const Category = () => {
  const id = localStorage.getItem('category_id');

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
  const { data: hotels } = useGetCategoryHotelsQuery(id);
  const { showForm, setShowForm } = useContext(FormContext);

  return (
    <div>
      {error ? <div className="main">Ooops..! There was an error</div> : null}
      {isLoading ? <div className="main"><Loading /></div> : null}
      {data ? (
        <>
          <h1>{data.name.toUpperCase()}</h1>
          <div className="main">
            <p>{data.description}</p>
            <small>
              Rating:
              {' '}
              {data.rating}
              {' '}
              Stars
            </small>
            <button
              type="button"
              title="Edit This Category"
              className="edit"
              onClick={(e) => {
                e.preventDefault();
                setShowForm(true);
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
          <h2>Hotels Under This Category</h2>
          {hotels ? (hotels.map((hotel) => (
            <div key={hotel.id} className="main">
              <img src={hotel.image_url} alt={hotel.name} size="90x90" />
              <h3>
                <span>Hotel Name:</span>
                {' '}
                {hotel.name}
              </h3>
              <p>
                <span>Description:</span>
                {' '}
                {hotel.description}
              </p>
              <strong>
                <span>Price per Night:</span>
                {' '}
                $
                {hotel.price}
              </strong>
              <p>
                <span>Address:</span>
                {' '}
                {hotel.address}
              </p>
            </div>
          ))) : (<h6> No Hotel Yet.</h6>)}

        </>
      ) : <div className="main">No data!</div>}
      {showForm ? <UpdateCategory category={data} /> : null}
    </div>
  );
};

export default Category;
