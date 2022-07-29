import Link from 'next/link';
import React from 'react';

const Header = ({ cate }) => {
    return (
        <div className='header'>
            <nav>
                <Link href="/" >accueil</Link>
                <Link href="/retouche-image-app">retouche image</Link>
            </nav>
        </div>
    );
};

export default Header;