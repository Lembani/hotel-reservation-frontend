/* eslint-disable max-len */
/* eslint-disable no-nested-ternary,react/jsx-indent,indent */
/* eslint-disable react/prop-types,react/jsx-one-expression-per-line */
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import { Pagination, Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FormContext from '../../Context/FormContext';
import {
  useGetCategoryByIdQuery,
  useGetCategoryHotelsQuery,
} from '../../Redux/APIFunctions/categories';
import UpdateCategory from './Update';
import '../Hotels/Hotel.css';
import NavBar from '../NavBar';
import Hotel from '../Hotels/Hotel';
import localStorageActions from '../../utils/localStorage';

const Category = () => {
  const id = localStorage.getItem('category_id');
  const user = localStorageActions.getUser();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
  const { data: hotels } = useGetCategoryHotelsQuery(id);
  const { showForm, setShowForm } = useContext(FormContext);

  const noHotels = (
    <h1 className="loading">
      No Hotels have been added to this category yet...
    </h1>
  );

  return (
    <div className="parent">
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : error ? (
        <div className="main">Ooops..! There was an error</div>
      ) : showForm ? (
        <UpdateCategory category={data} />
      ) : data ? (
        <section className="cat-hotels-section">
          <div className="cat-info">
            <div className="cat-header">
              <h1>{data.name.toUpperCase()}</h1>
              <span>
                Payment confirms reservation for any hotel in this category.
              </span>
            </div>
            <div className="details">
              <h3>Category Description</h3>
              <p className="gray">{data.description}</p>
              <h3>Rating Of Hotels In This Category</h3>
              <div className="gray">
                {data.rating === null ? (
                  <p>No Rating</p>
                ) : data.rating === 1 ? (
                  <p>1 Star</p>
                ) : (
                  <p>{data.rating} Stars</p>
                )}
              </div>
              <div className="rating">
                {data.rating === 1 ? (
                  <i className="uil uil-star bigger" />
                ) : data.rating === 2 ? (
                  <div className="rating">
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                  </div>
                ) : data.rating === 3 ? (
                  <>
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                  </>
                ) : data.rating === 4 ? (
                  <>
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                  </>
                ) : data.rating === 5 ? (
                  <>
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                    <i className="uil uil-star bigger" />
                  </>
                ) : null}
              </div>
              { user.admin
              ? (
<div className="edit-div">
                <button
                  type="button"
                  title="Edit This Category"
                  className="edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm(true);
                  }}
                >
                  Edit
                  <FontAwesomeIcon icon={faEdit} />
                </button>
</div>
)
              : null }
            </div>
          </div>
          <div className="cat-hotels-container">
            <div className="center">
              <h2>
                Hotels Under This Category{' '}
                {hotels ? (
                  hotels.length === 0 ? (
                    <span>No Hotel Added Yet</span>
                  ) : (
                    <span>{hotels.length}</span>
                  )
                ) : (
                  <span>Loading Hotels...</span>
                )}
              </h2>
              { user.admin
              ? (
<button
  type="button"
  className="addcat-btn pos"
  onClick={(e) => {
                  e.preventDefault();
                  navigate('/add_hotel');
                }}
>
                Add A Hotel
</button>
)
              : null }
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              speed={800}
              loop
              pagination={{
                clickable: true,
              }}
              navigation
              grabCursor
              className="cat-container"
            >
              {hotels
                ? hotels.map((hotel) => (
                    <SwiperSlide key={hotel.id} className="cat-hots">
                      <Hotel
                        key={hotel.id}
                        id={hotel.id}
                        name={hotel.name}
                        image={hotel.image_url}
                        country={hotel.country}
                        address={hotel.address}
                      />
                    </SwiperSlide>
                  ))
                : noHotels}
            </Swiper>
            <NavLink to="/categories" className="hotels-nav white">
              <i
                onClick={() => localStorage.removeItem('category_id')}
                role="presentation"
                title="Return to categories"
                className="uil uil-angle-left-b back-description"
              />
            </NavLink>
          </div>
          <NavBar />
        </section>
      ) : (
        <div className="main">No data!</div>
      )}
    </div>
  );
};

export default Category;
