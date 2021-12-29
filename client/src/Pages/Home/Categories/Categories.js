import React from 'react';

const Categories = ({ actions: setCategory}) => {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-4">
                <h4 className="capitalize tracking-widest text-xl font-medium py-4">Fetured Categories</h4>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
                        <div onClick={()=>setCategory('vegetables')} className="cursor-pointer bg-green-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                            <img src="/images/category-vegetables.png" alt="Meat & Fish" />
                            <p className="text-center text-gray-600 font-medium tracking-wide">Vegetables</p>
                        </div>
                        <div onClick={()=>setCategory('spices')} className="cursor-pointer bg-orange-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                            <img src="/images/category-snack.png" alt="Spices" />
                            <p className="text-center text-gray-600 font-medium tracking-wide">Spices</p>
                        </div>
                        <div onClick={()=>setCategory('bread')} className="cursor-pointer bg-amber-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                            <img src="/images/category-bread.png" alt="Bread" />
                            <p className="text-center text-gray-600 font-medium tracking-wide">Bread</p>
                        </div>
                        <div onClick={()=>setCategory('fruits')} className="cursor-pointer bg-lime-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                            <img src="/images/category-apple.png" alt="Fruits" />
                            <p className="text-center text-gray-600 font-medium tracking-wide">Fruits</p>
                        </div>
                       <div onClick={()=>setCategory('drinks')} className="cursor-pointer bg-fuchsia-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                            <img src="/images/category-coffee.png" alt="Fruits" />
                            <p className="text-center text-gray-600 font-medium tracking-wide">Drinks</p>
                        </div>
                    </div>
            </div>            
        </div>
    );
};

export default Categories;