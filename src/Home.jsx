import AboutWorkTeams from "./components/AboutWT";
import HeroSection from "./components/Hero";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Nav />
        <HeroSection />
        <AboutWorkTeams />
      </div>
    </>
  );
};

export default Home;
