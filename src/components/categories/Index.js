/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery/* , useAddCategoryMutation, useDeleteCategoryMutation */ } from '../../Redux/APIFunctions/categories';
import Loading from '../Loading';
import './Categories.css';
import CreateCategory from './Create';
import { useContext } from 'react';
import FormContext from '../../Context/FormContext';

const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  // const [showForm, setShowForm] = useState(false);
  const { showForm, setShowForm } = useContext(FormContext);
  // const [addCategory] = useAddCategoryMutation();
  // const [deleteCategory] = useDeleteCategoryMutation();

  const handleClick = (category) => {
    localStorage.setItem('category_id', category.id);
  };

  // const closeForm = () => {
  //   // e.preventDefault();
  //   setShowForm(false);
  // };

  return (
    <div>
      <h1>HOTEL CATEGORIES</h1>
      {error ? <div className="main">Ooops..! There was an error</div> : null}
      {isLoading ? <div className="main"><Loading /></div> : null}
      {data ? data?.map((category) => (
        <NavLink to={`/categories/${category.id}`} key={category.id}>
          <div className="main" onClick={() => { handleClick(category); }}>
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
