import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-r from-teal-400 to-green-400">
                <h1 className="py-8 text-center text-5xl text-green-50 font-medium">About Us</h1>
            </div>
            <div className="bg-white ">
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 justify-center '>
                    <img className='w-full h-auto' src="/images/about.webp" alt="About" />
                    <div className='p-8 space-y-5'>
                        <h2 className="text-orange-600 text-4xl tracking-wider font-bold">Save more with GO! We give you the lowest prices on all your grocery needs.</h2>
                        <h3 className="text-gray-500 text-3xl font-semibold py-2">What We Provide?</h3>
                        <div className="grid gap-5 grid-cols-2 text-left text-green-500">
                            <div>
                                <i className="fas fa-shopping-bag text-3xl"></i>
                                <h5 className="text-lg">Best Prices & Offers</h5>
                            </div>

                            <div>
                                <i className="fas fa-shipping-fast text-3xl"></i>
                                <h5 className="text-lg">Free & Next Day Delivery</h5>
                            </div>

                            <div>
                                <i className="fas fa-tag text-3xl"></i>
                                <h5 className="text-lg">Great Daily Deals & Discounts</h5>
                            </div>

                            <div>
                                <i className="fas fa-globe-asia text-3xl"></i>
                                <h5 className="text-lg">Wide Assortment</h5>
                            </div>

                            <div>
                                <i className="fas fa-smile text-3xl"></i>
                                <h5 className="text-lg">100% satisfaction guranteed</h5>
                            </div>

                            <div>
                                <i className="fas fa-undo text-3xl"></i>
                                <h5 className="text-lg">Easy Return</h5>
                            </div>
                        </div>
                        <h3 className="text-gray-500 text-3xl font-semibold py-2">Our Engineering Team</h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div className='space-y-2 flex flex-col  justify-center items-center'>
                                <img className="rounded-full h-28 w-28 ring-4  ring-offset-1 ring-green-400" src="/images/team1.webp" alt="" />
                                <h5 className="text-lg text-green-500 font-bold">Steve Martin</h5>
                                <p className="text-sm font-bold uppercase text-gray-400">Manager</p>
                            </div>

                            <div className='space-y-2 flex flex-col  justify-center items-center'>
                                <img className="rounded-full h-28 w-28 ring-4  ring-offset-1 ring-green-400" src="/images/team2.webp" alt="" />
                                <h5 className="text-lg text-green-500 font-bold">Mark Smith</h5>
                                <p className="text-sm font-bold uppercase text-gray-400">UI Designer</p>
                            </div>
                            
                            <div className='space-y-2 flex flex-col  justify-center items-center'>
                                <img className="rounded-full h-28 w-28 ring-4  ring-offset-1 ring-green-400" src="/images/team3.webp" alt="" />
                                <h5 className="text-lg text-green-500 font-bold">Ryan Printz</h5>
                                <p className="text-sm font-bold uppercase text-gray-400">Full Stack Developer</p>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
            <Footer />  
        </>
    );
};

export default AboutUs;