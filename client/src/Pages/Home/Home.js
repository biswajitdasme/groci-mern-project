import { useState } from 'react';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Footer from './Footer/Footer';
import FooterTop from './FooterTop/FooterTop';
import Header from './Header/Header';

const Home = () => {
    const [category, setCategory] = useState('featured');

    return (
        <>
            <Header />
            <Carousel />
            <Categories actions={setCategory}/>
            <FeaturedProduct category={category}/>
            <div className="container mx-auto">
                <img src="/images/banner.webp" alt=""  className="w-full h-52"/>
            </div>
            <FooterTop />
            <Footer />
        </>
    );
};

export default Home