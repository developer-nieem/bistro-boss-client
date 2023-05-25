import Cover from "../../Shared/Cover/Cover";

import topCover from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [items] = useMenu();

  const offered = items.filter((item) => item.category === "offered");
  const dessert = items.filter((item) => item.category === "dessert");
  const salad = items.filter((item) => item.category === "salad");
  const soup = items.filter((item) => item.category === "soup");
  const pizza = items.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurants | Our Menu</title>
      </Helmet>
      <Cover
        img={topCover}
        title="OUR MENU"
        details="Would you like to try a dish?"
      ></Cover>

      {/* ooferd section */}

      <div className="max-w-screen-lg m-auto">
        <SectionTitle
          heading='TODAY"S OFFER '
          subHeading='Don"t miss'
        ></SectionTitle>

        <MenuCategory title='salad' items={offered}></MenuCategory>
      </div>

      {/*dessert section  */}

      <Cover
        img={dessertBg}
        title="DESSERTS"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>

      <div className="max-w-screen-lg m-auto">
        <MenuCategory title='deserts' items={dessert}></MenuCategory>
      </div>

      {/*  Pizza section*/}
      <Cover
        img={pizzaBg}
        title="PIZZA"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>

      <div className="max-w-screen-lg m-auto">
        <MenuCategory title='pizza' items={pizza}></MenuCategory>
      </div>


      {/*  Salads section*/}
      <Cover
        img={saladBg}
        title="SALADS"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>

      <div className="max-w-screen-lg m-auto">
        <MenuCategory title='salads' items={salad}></MenuCategory>
      </div>


      {/*  SOUPS section*/}
      <Cover
        img={soupBg}
        title="SOUPS"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>

      <div className="max-w-screen-lg m-auto">
        <MenuCategory title='soups'  items={soup}></MenuCategory>
      </div>


    </div>
  );
};

export default OurMenu;
