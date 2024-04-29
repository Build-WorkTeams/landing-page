import HeroSection from "./components/Hero";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Nav />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
