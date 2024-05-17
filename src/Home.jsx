import AboutWorkTeams from "./components/AboutWT";
import Features from "./components/Features";
import HeroSection from "./components/Hero";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Nav />
        <HeroSection />
        <AboutWorkTeams />
        <Features />
      </div>
    </>
  );
};

export default Home;
