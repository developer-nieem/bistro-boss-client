import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard";
import { useParams } from "react-router-dom";

const OrderFood = () => {

    const cetegories =  ['salad', 'pizza', 'soups', 'deserts' , 'drinks'];
    const {category} =  useParams();
    const initialIndex =  cetegories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

 
  
  const [items] =  useMenu();
  const drinks = items.filter((item) => item.category === "drinks");
  const dessert = items.filter((item) => item.category === "dessert");
  const salad = items.filter((item) => item.category === "salad");
  const soup = items.filter((item) => item.category === "soup");
  const pizza = items.filter((item) => item.category === "pizza");


  return (
    <div>
      <Cover
        img={orderCover}
        title="OUR FOODS"
        details="Would you like to try a dish?"
      ></Cover>

      <div className="max-w-screen-lg m-auto my-6">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
            {
                salad.map(item => <FoodCard key={item._id} item={item}> </FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
            {
                pizza.map(item => <FoodCard key={item._id} item={item}> </FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
            {
                soup.map(item => <FoodCard key={item._id} item={item}> </FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
            {
                dessert.map(item => <FoodCard key={item._id} item={item}> </FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-10">
            {
                drinks.map(item => <FoodCard key={item._id} item={item}> </FoodCard>)
            }
            </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
