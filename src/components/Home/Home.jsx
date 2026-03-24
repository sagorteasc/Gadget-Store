import { Suspense } from "react";
import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";

const Home = () => {

    const productsPromise = fetch('/gadgets.json').then(res => res.json())

    return (
        <div>
            <Banner></Banner>

            <div className="max-w-6xl mx-auto w-full mt-96">
                <Suspense fallback={
                    <div className="flex justify-center items-center h-40">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                }>
                    <AllProducts productsPromise={productsPromise}></AllProducts>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;