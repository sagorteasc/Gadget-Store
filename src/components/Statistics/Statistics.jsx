import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const gadgetsData = useLoaderData();
    const gadgetData = gadgetsData.map(gadget => {
        return {
            name: gadget.product_title,
            price: gadget.price,
            rating: gadget.rating
        }
    })

    return (
        <div>
            <div className="bg-[#9538E2] max-w-405 mx-auto rounded-b-4xl mb-10">
                <div className="w-9/12 text-center mx-auto p-10 text-white">
                    <h3 className="font-bold text-3xl pb-2">Statistics</h3>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <ComposedChart
                style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={gadgetData}
                margin={{
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="price" barSize={20} fill="#413ea0" />
                <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;