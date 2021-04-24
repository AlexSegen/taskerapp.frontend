import React from 'react';
import Faqs from './components/faqs';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Partners from './components/partners';
import Pricing from './components/pricing';

const Landing = () => {
    return ( 
        <main className="bg-white text-gray-700 font-medium">
            <Header/>
            <Hero/>
            <Partners/>
            <Pricing/>

            <Faqs/>
            <Footer/>
        </main>
     );
}
 
export default Landing;