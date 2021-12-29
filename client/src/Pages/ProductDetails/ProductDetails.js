import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const ProductDetails = () => {
    const { id } = useParams();
    const { items } = useItems();
    const item = items.find(item => item._id === id);
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className='container mx-auto'>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
                <div className='flex justify-center items-center  border border-gray-300'>
                    <img src={item?.image} alt="Papaya"  className="rounded-md w-full"/>
                </div>
                    <div className='p-8 bg-white rounded border border-gray-300 space-y-4'>
                        <h3 className="text-3xl tracking-wider text-gray-600 font-sans">{ item?.name}</h3>
                        <p className='text-green-600 text-4xl tracking-wide'>${item?.price}</p>
                        <p><span className='text-sm text-green-600 bg-green-100 inline-block px-4 py-2 font-bold'>in stock</span></p>
                        <button type='button' className="bg-gradient-to-r from-orange-400 to-orange-600 py-2 px-3 text-white space-x-2 rounded" onClick={()=>navigate(`/cart/${item?._id}`)}> <i className="fas fa-shopping-cart"></i> <span>Add To Cart</span></button>
                        <div className='border border-gray-200 p-4 space-y-2 rounded-xl'>
                            <h4 className="text-xl tracking-wide text-gray-600 font-medium">Quick Overview</h4>
                            <p className='text-justify tracking-wide'> {item?.details} </p>
                        </div>
                        <div>
                            <h2 className="text-xl tracking-wide text-gray-600 font-medium">Why Shop From Groci</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-2">
                                <div className='space-y-2'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <i className="fas fa-truck bg-green-500 text-green-50 text-xl py-2 px-3 rounded-full"></i>
                                        <h4 className='text-lg'>Free Delivery</h4>
                                    </div>
                                    <p>We provide super fast free delivery for all orders. </p>
                                </div>
                                <div className='space-y-2'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <i className="fas fa-shopping-bag bg-green-500 text-green-50 text-xl py-2 px-3 rounded-full"></i>
                                        <h4 className='text-lg'>100% Satisfaction</h4>
                                    </div>
                                    <p>We provide 100% money back gurantee</p>
                                </div>                            
                            </div>
                        </div>
                    </div>    
            </div>
            </div>

         <Footer/>   
        </>
    );
};

export default ProductDetails;