import Banner from "../Banner";
import Category from "../Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;