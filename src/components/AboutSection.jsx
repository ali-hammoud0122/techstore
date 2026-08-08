import aboutImage from '../assets/aboutus1.png';
import '../style/aboutsection.css';
function AboutSection() {
  return (
   <div className="about" id="about">
    <div className="aboutcontainer">
      <div className='abouttext'>
        <span className="aboutfheading">Who We Are</span>
        <h2 className="aboutsheading">About Us</h2>
        <p className="paragraph">
           TechStore is your one-stop shop for the latest laptops, smartphones,
          and gadgets. We bring you quality tech products at unbeatable prices,
          with fast delivery and reliable customer support. Our mission is to
          make great technology accessible to everyone, backed by a team that
          genuinely cares about helping you find the right device for your needs.
        </p>

      </div>
     <div className='aboutimg'>
        <img src="/src/assets/aboutus1.png" alt="photo"/>
      </div>
    </div>
    </div>
  );
}

export default AboutSection;