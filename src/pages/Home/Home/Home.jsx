import Banner from "../Banner";
import Category from "../Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu";
import Testimonial from "../Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;