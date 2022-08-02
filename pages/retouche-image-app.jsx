import Head from 'next/head';
import React from 'react';
import AppEditImage from '../components/app_editImage/AppEditImage';
import Header from "../components/Header"


const App = () => {
    return (
        <div>
            <Head>
                <title>Retouche Image - Emilien Vaschalde</title>
            </Head>
            <Header />
            <AppEditImage />
        </div>
    );
};

export default App;