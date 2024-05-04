import SideNavbar from './components/SideNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


const Home = () => {
  return (
    <div className="bg-cover bg-gray-200 bg-center bg-cover bg-fixed bg-[url('/images/profile/devops-img.gif')]">

      <main>
      <div className="Services" style={{ marginTop: '40px', padding: '20px', marginBottom: '20px'}} >
      
      <SideNavbar />

    </div>

        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;