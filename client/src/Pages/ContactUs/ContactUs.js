import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const ContactUs = () => {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-r from-teal-400 to-green-400">
                <h1 className="py-8 text-center text-5xl text-green-50 font-medium">Contact Us</h1>
            </div>
            <div className="bg-white py-20 h-full">
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center '>
                    <div className="hidden md:block md:bg-contat-us-side md:bg-no-repeat md:bg-contain md:bg-center">
                    </div>
                    <div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-5'>
                            <div className='text-center space-y-2'>
                                <i className="fas fa-map-marker-alt text-5xl text-green-500"></i>
                                <h3 className="text-gray-700 text-3xl tracking-wider font-bold">Location</h3>
                                <p className='text-base text-gray-600 tracking-wider'>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                            </div>
                            <div className='text-center space-y-2'>
                                <i className="fas fa-envelope text-5xl text-green-500"></i>
                                <h3 className="text-gray-700 text-3xl tracking-wider font-bold">Email</h3>
                                <p className='text-base text-gray-600 tracking-wider'>hello@groci.com</p>
                            </div>
                            <div className='text-center space-y-2'>
                                <i className="fas fa-phone-alt text-5xl text-green-500"></i>
                                <h3 className="text-gray-700 text-3xl tracking-wider font-bold">Phone</h3>
                                <p className='text-base text-gray-600 tracking-wider'>+8801818002233</p>
                            </div>
                        </div>
                        <h1 className="text-4xl  text-gray-700 font-medium tracking-wider py-5 mt-5">Send a Message</h1>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                            <input type="text" name="name" placeholder="Enter Full Name" className="bg-green-100 border border-t-transparent border-x-transparent focus:outline-none focus:border-green-500 border-b-green-500 rounded-t-md
                             p-2 w-full text-gray-600" />
                            <input type="email" name="email" placeholder="Enter Email" className="bg-green-100 border border-t-transparent border-x-transparent focus:outline-none focus:border-green-500 border-b-green-500 rounded-t-md
                             p-2 w-full text-gray-600" />
                            <textarea name="message" id="message" rows="5" className="bg-green-100 border border-t-transparent border-x-transparent focus:outline-none focus:border-green-500 border-b-green-500 rounded-t-md resize-none
                             p-2 w-full text-gray-600" placeholder="Enter Message"/>
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Send</button>
                        </form>
                    </div>
                    
            </div>
            </div>
             <Footer />  
        </>
    );
};

export default ContactUs;