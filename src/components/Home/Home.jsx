import { Suspense } from "react";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {

    const gadgetsPromise = fetch('gadgets.json').then(res => res.json())

    return (
        <div>
            <Banner></Banner>

            <div className="mt-96 flex justify-center items-center min-h-screen">
                <Suspense fallback={<Loading />}>
                    <Gadgets gadgetsPromise={gadgetsPromise}></Gadgets>
                </Suspense>
            </div>
        </div>
    );
};

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

export default Home;