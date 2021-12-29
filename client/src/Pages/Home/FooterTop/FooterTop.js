import React from 'react';

const FooterTop = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
            <div className="flex flex-col lg:flex-row space-x-2 p-4 bg-green-50 shadow-lg rounded-lg justify-center items-center">
                <img src="/images/icon-1.svg" alt="Best Price & Offers" className="h-24 w-24"/>
                <div className='space-y-1'>
                    <h4 className='text-black text-xl '>Best prices & offers</h4>
                    <p>Order $50 or more</p>
                </div>
            </div>

             <div className="flex flex-col lg:flex-row space-x-2 p-4 bg-orange-50 shadow-lg rounded-lg justify-center items-center">
                <img src="/images/icon-2.svg" alt="Best Price & Offers" className="h-24 w-24"/>
                <div className='space-y-1'>
                    <h4 className='text-black text-xl '>Free delivery</h4>
                    <p>24/7 amazing services</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row space-x-2 p-4 bg-emerald-50 shadow-lg rounded-lg justify-center items-center">
                <img src="/images/icon-3.svg" alt="Best Price & Offers" className="h-24 w-24"/>
                <div className='space-y-1'>
                    <h4 className='text-black text-xl '>Great daily deal</h4>
                    <p>When you sign up</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row space-x-2 p-4 bg-blue-50 shadow-lg rounded-lg justify-center items-center">
                <img src="/images/icon-4.svg" alt="Best Price & Offers" className="h-24 w-24"/>
                <div className='space-y-1'>
                    <h4 className='text-black text-xl '>Wide Assortment</h4>
                    <p>Mega Discounts</p>
                </div>
            </div>

             <div className="flex flex-col lg:flex-row space-x-2 p-4 bg-green-50 shadow-lg rounded-lg justify-center items-center">
                <img src="/images/icon-5.svg" alt="Best Price & Offers" className="h-24 w-24"/>
                <div className='space-y-1'>
                    <h4 className='text-black text-xl '>Easy Returns</h4>
                    <p>Within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;