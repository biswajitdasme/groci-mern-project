import React from 'react';

const Footer = () => {
    return (
        <div className="bg-green-50 p-8">
            <div className="container mx-auto text-center space-y-4 md:space-y-0 items-center flex flex-col md:flex-row justify-between">
                <div className="space-y-4">
                    <img src="/images/logo-footer.webp" alt="Footer Logo" />
                    <div className="space-y-1">
                        <p className="text-gray-500 space-x-2"><i className="fas fa-phone-alt"></i> <span>+8801818-002211</span></p>
                        <p className="text-green-500 space-x-2"><i className="fas fa-envelope"></i> <span>hello@groci.com</span></p>
                        <p className="text-gray-500 space-x-2"><i className="fas fa-map-marker-alt"></i> <span> Uttara, Dhaka 1230</span></p>

                        <div className="">
                            <a href="https://www.facebook.com/groci.bd/" target="_blank" className="text-green-100 bg-green-500 hover:bg-orange-400 py-2 px-3 mr-2 rounded-lg inline-block" rel="noreferrer" ><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/groci.bd/" target="_blank" className="text-green-100 bg-green-500 hover:bg-orange-400 py-2 px-3 mr-2 rounded-lg inline-block" rel="noreferrer"  ><i className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/groci_bd" target="_blank" className="text-green-100 bg-green-500 hover:bg-orange-400 py-2 px-3 rounded-lg inline-block" rel="noreferrer" ><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h4 className="text-center text-2xl text-gray-700 font-semibold">Subscribe to newsletter</h4>
                    <form action="" className="flex justify-between bg-white shadow-xl rounded-full p-1">
                    <input type="email" placeholder='Enter Email' className="p-2 rounded-l-full focus:outline-none" />
                    <button className="bg-orange-500 text-white p-3 rounded-full">Subscribe</button>
                    </form>
                </div>

                <div className="flex flex-col space-y-4">
                    <h4 className="text-center text-4xl text-gray-700 font-semibold">Download App</h4>
                    <div className="flex flex-col space-y-2">
                        <img className="h-20 w-auto" src="/images/playstore.webp" alt="Play Store" />
                        <img className="h-20 w-auto" src="/images/appstore.webp" alt="App Store" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;