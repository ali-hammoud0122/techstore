
import  Navbar  from '../components/Navbar';
import  Carousel  from '../components/Carousel';
import  AboutSection  from '../components/AboutSection';
import Footer from '../components/Footer';
import background1 from '../assets/background1.png';
import '../style/Home.css';
function Home() {
  return (
        <div className="home" >

      
      <Carousel />
      <AboutSection />
     
    </div>
  );
}

export default Home;