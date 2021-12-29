import React from 'react';
import useItems from '../../../hooks/useItems';
import Product from '../Product/Product';

const FeaturedProduct = ({category}) => {
    const { items } = useItems();
    return (
        <div className="container mx-auto py-8">
            <h2 className="capitalize tracking-widest text-xl font-medium">{category === 'featured' ? 'Featured' : category} Items</h2>
            <div className="grid gap-2 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-4 grid-flow-row py-4 ">
                {
                    (category!=='featured') && items.filter(item => item.category === category)
                    .map(item => <Product key={item._id} item={item} />)
                }
                {
                    (category==='featured') && items.slice(0,10).map(item => <Product key={item._id} item={item} />)
                }

            </div>
        </div>
    );
};

export default FeaturedProduct;