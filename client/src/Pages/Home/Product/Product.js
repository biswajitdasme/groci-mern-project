import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="p-4 m-2 sm:m-0 flex flex-col bg-white shadow-lg rounded-lg justify-center items-center space-y-4">
                    <img src={item.image} alt="Corn" className='h-64 w-full'/>
                    <div className='text-center space-y-1'>
                <Link to={`/productdetails/${item._id}`} className="text-lg text-emerald-500 font-semibold tracking-wider">{item.name}</Link>
                        <p className="text-gray-500 text-sm font-bold tracking-wide">In Stock </p>
                <p className='space-x-1 '> <span className="line-through text-sm text-gray-500 font-bold">${ item.price}</span> <span className="font-semibold text-lg">${(item.price*.80).toFixed(2)}</span></p>
                    </div>
                    <button type="button" className='bg-gradient-to-r from-orange-400 to-orange-600 text-white text-base md:text-lg tracking-wider py-2 px-3 rounded-xl' onClick={()=>navigate(`/cart/${item._id}`)}><i className="fas fa-shopping-cart"></i> Add to cart</button>
                </div>
    );
};

export default Product;