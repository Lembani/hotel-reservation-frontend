/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../Redux/APIFunctions/categories';
import './Categories.css';

const Categories = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  const handleClick = (category) => {
    localStorage.setItem('category_id', category.id);
  };

  return (
    <div>
      <h1>HOTEL CATEGORIES</h1>
      {error ? <div className="main">Ooops..! There was an error</div> : null}
      {isLoading ? <div className="main">...Loading!</div> : null}
      {data ? data.map((category) => (
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
    </div>
  );
};

export default Categories;
