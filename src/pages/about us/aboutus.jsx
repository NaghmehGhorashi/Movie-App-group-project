
import PropTypes from 'prop-types';
import Navbar from '../../components/navbar/navbar';
import Wrapper from '../../components/container/container';
import style from "./aboutus.module.css";
import hannaImage from '../../assets/hanna.jpeg';
import naghmehImage from '../../assets/naghmeh.jpeg';
import raanaImage from '../../assets/raana.jpeg';
import sixtenImage from '../../assets/sixten.jpeg';

const profiles = [
  { name: 'Hanna', image: hannaImage },
  { name: 'Naghmeh', image: naghmehImage },
  { name: 'Raana', image: raanaImage },
  { name: 'Sixten', image: sixtenImage },
];

const Profile = ({ name, image }) => (
  <div className={style.profile}>
    <img src={image} alt={`${name}'s profile`} />
    <p>{name}</p>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Aboutus() {
  return (
    <div>
      <Wrapper>
        <div>
          <Navbar />
          <section className={style.profileSection}>
            {profiles.map(({ name, image }) => (
              <Profile key={name} name={name} image={image} />
            ))}
          </section>
          <div className={style.about}>
            <p>About Our Team : </p>
            <p>We are a team of four passionate developers who joined forces to create a powerful CRUD application focused on movies and films. Our platform allows users to create, update, and manage their favorite movie lists seamlessly. With a dedication to innovation and user-friendly design, we aim to provide a smooth and engaging experience for all movie enthusiasts. Our mission is to make exploring and managing movie data as enjoyable as watching the films themselves. Together, we strive to bring technology and entertainment closer than ever.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Aboutus;
