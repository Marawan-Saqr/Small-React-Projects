import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your journey with us starts here</p>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>InspireTech</strong>, where innovation meets dedication. We are a team of passionate developers,
          designers, and visionaries committed to delivering exceptional solutions tailored to your needs. Our journey began
          with a simple goal: to empower businesses and individuals with cutting-edge technology.
        </p>

        <p>
          Over the years, we have worked with diverse industries, transforming ideas into reality. Our expertise spans a wide
          range of technologies, ensuring that every project we undertake is executed with precision and creativity. At
          InspireTech, we believe in building lasting relationships with our clients, fostering trust and collaboration every
          step of the way.
        </p>

        <p>
          Whether you're a budding entrepreneur or an established enterprise, we are here to help you navigate the digital
          landscape with confidence and ease. Let's create something extraordinary together.
        </p>

        <div className="about-highlight">
          <h2>Our Mission</h2>
          <p>
            To empower our clients by providing innovative and reliable solutions, fostering growth, and delivering excellence
            in every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;