import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="max-w-screen-lg m-auto my-7">
            <SectionTitle heading='TESTIMONIALS' subHeading='What Our Clients Say'></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <>
                        <SwiperSlide>

                            <div className="text-center w-9/12 m-auto">
                                <Rating
                                    style={{ width: '160px' , margin:'auto'}}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="flex justify-center text-4xl my-6"><FaQuoteLeft></FaQuoteLeft></p>
                                <p>{review.details}</p>
                                <h2 className="font-semibold text-xl text-yellow-500">{review.name}</h2>
                            </div>
                        </SwiperSlide>

                    </>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;