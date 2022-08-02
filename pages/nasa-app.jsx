import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import AppNasa from '../components/app_nasa/AppNasa';


const nasaApp= () => {
    return (
        <div>
            <Head>
                <title>Nasa App - Emilien Vaschalde</title>
            </Head>
            <Header />
            <AppNasa />
        </div>
    );
};

export default nasaApp;