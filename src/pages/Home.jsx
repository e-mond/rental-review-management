import Header from "../components/Header";
import Features from "../layouts/Features"; // Import Features from layouts
import Notifications from "../layouts/Notifications"; 
import RentalTerms from "../layouts/RentalTerms";
import RentalExperienceSection from "../layouts/RentalExperienceSection"; 


const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Notifications />
      <RentalExperienceSection />
      <RentalTerms />
    </div>
  );
};

export default Home;
