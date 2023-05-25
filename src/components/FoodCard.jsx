const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
       
          <img className="image-full h-64 rounded-l-lg rounded-r-lg"
            src={image}
            alt="Shoes"
          />
        
        <p className="bg-slate-950 text-white absolute right-0 mr-5 mt-3 rounded-lg p-1"> ${price}</p>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn  bg-slate-400 border-0 border-b-4">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
