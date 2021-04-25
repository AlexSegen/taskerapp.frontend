import React from 'react';
import Faqs from './components/faqs';
import Hero from './components/hero';
import Partners from './components/partners';
import Pricing from './components/pricing';

import Layout from './layout'

const Landing = () => {
    return ( 
        <Layout>
            <Hero/>
            <Partners/>
            <Pricing/>
            <Faqs/>
        </Layout>
     );
}
 
export default Landing;