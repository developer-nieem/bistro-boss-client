
const MenuItems = ({item}) => {
    const {name , recipe , image , price}   = item
    return (
        <div>
            <div className="flex gap-4">

                <div>
                <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
                </div>
                <div className="flex gap-3">
                <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                </div>
                <div className="text-yellow-500"> 
                    ${price}
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default MenuItems;