import React from 'react';
import SideNavbar from './components/SideNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <main className="main-content">
          <div className="sidebar">
          </div>
          <section className="content-section">
            <About />
            <Projects />
            <Contact />
          </section>
        </main>
        <footer className="footer">
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
