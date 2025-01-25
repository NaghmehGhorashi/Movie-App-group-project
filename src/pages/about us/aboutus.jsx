import React from 'react';
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
            <p>We are a team of four developers who founded a company to create innovative applications. Our flagship project is a Movie Application that allows users to explore, search, and save their favorite movies with ease. We focus on delivering a seamless user experience by combining cutting-edge technologies and creative design. Collaboration and passion for movies drive our team to constantly improve and expand our platform. Together, we aim to revolutionize the way people interact with movie content.</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Aboutus;
