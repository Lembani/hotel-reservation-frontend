/* eslint-disable react/prop-types */
import { useGetCategoryByIdQuery } from '../../Redux/APIFunctions/categories';

const Category = () => {
  const id = localStorage.getItem('category_id');

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
  return (
    <div>
      {error ? <div className="main">Ooops..! There was an error</div> : null}
      {isLoading ? <div className="main">...Loading!</div> : null}
      {data ? (
        <div className="main">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <small>
            Rating:
            {' '}
            {data.rating}
            {' '}
            Stars
          </small>
        </div>
      ) : <div className="main">No data!</div>}
    </div>
  );
};

export default Category;
