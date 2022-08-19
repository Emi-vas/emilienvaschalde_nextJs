import Head from 'next/head';
import React from 'react';
import AppEditImage from '../components/app_editImage/AppEditImage';
import Header from "../components/Header"
import Footer from "../components/Footer"


const App = () => {
    return (
        <div>
            <Head>
                <title>Retouche Image - Emilien Vaschalde</title>
            </Head>
            <Header cate="picture" />
            <AppEditImage />
            <Footer />
        </div>
    );
};

export default App;