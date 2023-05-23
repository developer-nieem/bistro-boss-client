import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";

const PopulerMenu = () => {
    const [items , setItems] =  useState([])

    useEffect(()=> {
        fetch('/menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem =  data.filter(item => item.category === 'popular');
            setItems(popularItem)
        })
    },[])

    return (
        <div className="max-w-screen-lg m-auto my-10">
            <SectionTitle heading='FROM OUR MENU' subHeading='Check it Popular Menu'></SectionTitle>

            <div className="md:grid md:grid-cols-2 gap-5">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopulerMenu;