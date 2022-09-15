import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const Home = () => (
  <div className="home">
    <nav>
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      <FontAwesomeIcon icon={faSearch} className="search" />
    </nav>
    <main>
      <strong>Welcome to...</strong>
      <h1 className="logo">HoVe</h1>
      <p>Acquire what you desire, reserve what you really deserve!!</p>
    </main>

  </div>
);

export default Home;
