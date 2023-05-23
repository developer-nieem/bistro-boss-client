
import featured from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle';
import '../Featured/featured.css'
const Featured = () => {
    return (
        <div className='featured-section '>
            <div className='max-w-screen-lg m-auto my-7 pb-20  text-white'>
                <SectionTitle heading='FROM OUR FEATURED' subHeading='Check it out'></SectionTitle>
                <div className='md:flex gap-5 items-center justify-items-center'>
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className='space-y-2 text-white'>
                        <p>March 20, 2023</p>
                        <h3 className='font-medium'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;