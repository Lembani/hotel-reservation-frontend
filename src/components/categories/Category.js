/* eslint-disable react/prop-types */
import { useGetCategoryByIdQuery /* useUpdateCategoryMutation */ } from '../../Redux/APIFunctions/categories';

const Category = () => {
  const id = localStorage.getItem('category_id');

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
  // const [updateCategory] = useUpdateCategoryMutation();

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
          {data.hotels?.map((hotel) => (
            <ul key={hotel.id}>
              <li>{hotel.name}</li>
            </ul>
          ))}
        </div>
      ) : <div className="main">No data!</div>}
    </div>
  );
};

export default Category;
