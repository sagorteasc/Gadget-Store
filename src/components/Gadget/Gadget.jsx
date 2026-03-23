const Gadget = ({ gadgetData }) => {

    const { product_image, product_title, price } = gadgetData;

    return (
        <div>
            <div className="card bg-white text-black w-full shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src={product_image}
                        className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold text-2xl">{product_title}</h2>
                    <p className="text-[#09080F60] font-medium text-xl">Price: {price}</p>
                    <div className="card-actions">
                        <button className="btn text-[#9538E2] font-semibold text-lg border border-[#9538E2] rounded-4xl bg-white shadow-none">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;