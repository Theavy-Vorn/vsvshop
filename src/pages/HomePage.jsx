import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CTAComponent from '../components/CTAComponent';
import CardComponent from '../components/CardComponent';

const HomePage = () => {
    return (
       <main className='bg-purple-100'>
            <CTAComponent />
            <CardComponent />
       </main>
    );
}

export default HomePage;
