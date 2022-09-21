/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery, useDeleteCategoryMutation } from '../../Redux/APIFunctions/categories';
import Loading from '../Loading';
import './Categories.css';
import CreateCategory from './Create';
import { useContext } from 'react';
import FormContext from '../../Context/FormContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/fontawesome-free-solid';

const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { showForm, setShowForm } = useContext(FormContext);

  const handleClick = (category) => {
    localStorage.setItem('category_id', category.id);
  };

  return (
    <div>
      <h1>HOTEL CATEGORIES</h1>
      {error ? <div className="main">Ooops..! There was an error</div> : null}
      {isLoading ? <div className="main"><Loading /></div> : null}
      {data ? data?.map((category) => (
        <div className="main" key={category.id}>
          <NavLink to={`/categories/${category.id}`}>
            <div onClick={() => { handleClick(category); }}>
              <h2>{category.name}</h2>
              <p>
                Hotel Ratings:
                {' '}
                {category.rating}
                {' '}
                Stars
              </p>
            </div>
          </NavLink>
          <button
            type="button"
            title="Delete Category"
            className="trash"
            onClick={(e) => {
              e.preventDefault();
              deleteCategory({ id: category.id });
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )) : <div className="main">No categories yet...</div>}
      {showForm ? <CreateCategory /> : null}
      <button
        type="button"
        className="addcat-btn"
        onClick={(e) => {
          e.preventDefault();
          setShowForm(true);
        }}
      >
        Add A Category

      </button>
    </div>
  );
};

export default Categories;
