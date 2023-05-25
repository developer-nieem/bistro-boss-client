import Banner from "../Banner";
import Category from "../Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu";
import Testimonial from "../Testimonial";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurants | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
