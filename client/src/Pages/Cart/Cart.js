import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Cart = () => {
    const { id } = useParams();
    const { items } = useItems();
    const [cartItems, setCartItems] = useState([]);
    const [previousInserted, setPreviousInserted] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (id && previousInserted !== id) {
                const item = items.find(item => item._id === id);

            if (item !== undefined) {
                const previousOrders = JSON.parse(localStorage.getItem('cart'));
                if (previousOrders === null) {
                    localStorage.setItem('cart', JSON.stringify([{ ...item, count: 1 }]));
                }
                else if (previousOrders.find(order => order._id === id) === undefined) {
                    localStorage.setItem('cart', JSON.stringify([...previousOrders, { ...item, count: 1 }]));
                }
                else {
                    const updatedOrders = previousOrders.map(order => {
                        if (order._id === item._id) {
                            order.count += 1;
                        }
                        return order;
                    });
                    localStorage.setItem('cart', JSON.stringify(updatedOrders));
                }
                setCartItems(JSON.parse(localStorage.getItem('cart')));
                setPreviousInserted(id);
            }

        }
    }, [id,items,previousInserted, setCartItems]);
 
    const deleteFromCart = (id) => {
        setCartItems(cartItems.filter(item => item._id !== id));
        localStorage.setItem('cart', JSON.stringify(cartItems.filter(item => item._id !== id)));
    }


    return (
        <div className='flex flex-col min-h-screen'>
         <Header/>
         <div className="container mx-auto flex-1">
            <table className='w-full bg-white my-10 rounded-lg text-center '>
                    <thead>
                        <tr>
                        <th className='p-5'>Product</th>
                        <th className='p-5'>Price</th>
                        <th className='p-5'>Quantity</th>
                        <th className='p-5'>Subtotal</th>
                        <th className='p-5'> <i className="fas fa-trash"></i> </th>
                        </tr>
                    </thead>  
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item._id}>
                                <td className='p-5 flex justify-center items-center gap-2'>
                                    <img src={item.image } alt={item.name} className='w-20 h-20 hidden md:inline-block'/> <span>{item.name}</span>
                                </td>
                                <td className='p-5'>${item.price}</td>
                                <td className='p-5'>{item.count}</td>
                                <td className='p-5'>${(item.price * item.count).toFixed(2)}</td>
                                <td className='p-5' > <i className="fas fa-trash bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={()=>deleteFromCart(item._id)}></i> </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot >
                        <tr>
                            <td colSpan={5} className='py-10 space-y-5'>
                                <h3 className='text-xl uppercase text-center font-semibold tracking-wider'>Total ${cartItems.reduce((acc, item) => acc + (item.price * item.count), 0).toFixed(2)}</h3>
                                <button className="bg-green-500 px-3 py-2 uppercase bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded" onClick={()=>navigate('/checkout')}>Checkout</button>
                            </td>
                        </tr>
                    </tfoot>
            </table>
         </div>
         <Footer/>   
        </div>
    );
};

export default Cart;