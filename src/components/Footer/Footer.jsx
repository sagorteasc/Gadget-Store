const Footer = () => {
    return (
        <div className="bg-base-200 mt-10">
            <div className="text-center pt-10">
                <h3 className="font-bold text-3xl">Gadget Store</h3>
                <p className="font-medium mt-2 opacity-60">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <footer className="flex justify-between max-w-400 mx-auto text-base-content px-2 py-8 md:w-4/5 md:p-10">
                <nav className="flex flex-col">
                    <h6 className="footer-title opacity-100">Services</h6>
                    <a className="link link-hover opacity-60">Product Support</a>
                    <a className="link link-hover opacity-60">Order Tracking</a>
                    <a className="link link-hover opacity-60">Shipping & Delivery</a>
                    <a className="link link-hover opacity-60">Returns</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title opacity-100">Company</h6>
                    <a className="link link-hover opacity-60">About us</a>
                    <a className="link link-hover opacity-60">Careers</a>
                    <a className="link link-hover opacity-60">Contact</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title opacity-100">Legal</h6>
                    <a className="link link-hover opacity-60">Terms of use</a>
                    <a className="link link-hover opacity-60">Privacy policy</a>
                    <a className="link link-hover opacity-60">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;