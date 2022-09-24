/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import {
  Pagination, Navigation,
} from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FormContext from '../../Context/FormContext';
import { useGetCategoryByIdQuery, useGetCategoryHotelsQuery } from '../../Redux/APIFunctions/categories';
import Loading from '../Loading';
import UpdateCategory from './Update';
import '../Hotel.css';
import NavBar from '../NavBar';
import Hotel from '../Hotel';

const Category = () => {
  const id = localStorage.getItem('category_id');

  const { data, isLoading, error } = useGetCategoryByIdQuery(id);
  const { data: hotels } = useGetCategoryHotelsQuery(id);
  const { showForm, setShowForm } = useContext(FormContext);

  const noHotels = <h1 className="loading">No Hotels have been added to this category yet...</h1>;

  return (
    <div className="parent">
      {isLoading ? <div className="main"><Loading /></div> : error ? <div className="main">Ooops..! There was an error</div> : showForm ? <UpdateCategory category={data} /> : data ? (
        <section className="cat-hotels-section">
          <NavBar />
          <div className="cat-info">
            <div className="cat-header">
              <h1>{data.name.toUpperCase()}</h1>
              <span>Payment confirms reservation for any hotel in this category.</span>
            </div>
            <div className="details">
              <h3>Category Description</h3>
              <p className="gray">{data.description}</p>
              <h3>Rating Of Hotels In This Category</h3>
              <p className="gray">
                {data.rating === null ? <p>No Rating</p> : data.rating === 1 ? <p>1 Star</p> : (
                  <p>
                    {data.rating}
                    {' '}
                    Stars
                  </p>
                )}
              </p>
              <div className="rating">
                { data.rating === 1 ? (<i className="uil uil-star bigger" />) : data.rating === 2 ? (
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
                ) : null }
              </div>
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
            </div>
          </div>
          <div className="cat-hotels-container">
            <div className="">
              <h2>
                Hotels Under This Category
                {' '}
                {hotels ? hotels.length === 0 ? <span>No Hotel Added Yet</span> : <span>{hotels.length}</span> : <span>Loading Hotels...</span>}
              </h2>
              <button
                type="button"
                className="addcat-btn"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Add A Hotel

              </button>
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
              className="container"
            >
              {hotels ? (hotels.map((hotel) => (
                <SwiperSlide key={hotel.id} className="cat-hots">
                  <Hotel
                    key={hotel.id}
                    name={hotel.name}
                    image={hotel.image_url}
                    country={hotel.country}
                    address={hotel.address}
                  />
                </SwiperSlide>
              ))) : noHotels }
            </Swiper>
          </div>
        </section>
      ) : <div className="main">No data!</div>}

    </div>
  );
};

export default Category;
