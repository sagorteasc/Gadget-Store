import { useLocation } from 'react-router-dom';
import bannerImage from '../../assets/banner.jpg'

const Banner = () => {

    const location = useLocation();

    return (
        <div>
            <div className=
                {
                    location.pathname !== "/statistics" || location.pathname !== "/dashboard" ?
                        "bg-[#9538E2] rounded-b-4xl h-full py-12 relative"
                        : "bg-[#9538E2] rounded-4xl h-full py-12 relative"
                }>
                <div className="w-4/6 mx-auto text-center text-white">
                    <h3 className="font-bold text-4xl pb-6 lg:text-5xl">Upgrade Your Tech Accessorize with Gadget Store Accessories</h3>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn bg-white text-[#9538E2] border-none shadow-none rounded-4xl font-bold text-xl mt-8 mb-12">Shop Now</button>
                </div>

                <div className='bg-[#FFFFFF30] p-6 w-4/5 h-96 rounded-4xl absolute -translate-x-1/2 left-1/2 top-11/12 md:top-5/6 md:w-3/5'>
                    <img className='rounded-3xl w-full h-full lg:object-cover' src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;