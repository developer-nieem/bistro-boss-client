import { Link } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items , title}) => {
    return (
        <div className="my-10">
           
            <div className="md:grid md:grid-cols-2 gap-5">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <p className="text-center my-7">
            <Link to={`/order/${title}`} className="btn bg-slate-400 border-0 border-b-4 ">Order Your favorites foods</Link>
            </p>
        </div>
    );
};

export default MenuCategory;