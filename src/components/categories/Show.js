/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import FormContext from '../../Context/FormContext';
import { useGetCategoryByIdQuery } from '../../Redux/APIFunctions/categories';
import Loading from '../Loading';
import UpdateCategory from './Update';

const Category = () => {
  const id = localStorage.getItem('category_id');

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
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
            {data.hotels?.map((hotel) => (
              <ul key={hotel.id}>
                <li>{hotel.name}</li>
              </ul>
            ))}
          </div>

        </>
      ) : <div className="main">No data!</div>}
      {showForm ? <UpdateCategory category={data} /> : null}
    </div>
  );
};

export default Category;
