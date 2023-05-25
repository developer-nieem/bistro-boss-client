
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import useMenu from "../../Hooks/useMenu";

const PopulerMenu = () => {

    const [items] =  useMenu();
    const populars =  items.filter( item => item.category === "popular")
  
    return (
        <div className="max-w-screen-lg m-auto my-10">
            <SectionTitle heading='FROM OUR MENU' subHeading='Check it Popular Menu'></SectionTitle>

            <div className="md:grid md:grid-cols-2 gap-5">
                {
                    populars.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;