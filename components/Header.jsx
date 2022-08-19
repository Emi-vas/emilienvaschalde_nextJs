import Link from 'next/link';
import React from 'react';

const Header = ({ cate }) => {
    return (
        <div className='header'>
            <nav>
                <Link href="/" >
                    <div className={cate == "home" ? "lien lien--actif" : "lien"}>
                        <i class="fa-solid fa-user"></i>
                        <p>Profil</p>
                        <p>Développeur</p>
                    </div>
                </Link>
                <Link href="/retouche-image-app">
                    <div className={cate == "picture" ? "lien lien--actif" : "lien"}>
                        <i class="fa-solid fa-image"></i>
                        <p>APP 1</p>
                        <p>retouche image</p>
                    </div>
                </Link>
                <Link href="/nasa-app">
                    <div className={cate == "nasa" ? "lien lien--actif" : "lien"}>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>APP 2</p>
                        <p>Nasa api</p>
                    </div>
                </Link>
                <Link href="/">
                    <div className="lien">
                        <i class="fa-solid fa-comment"></i>
                        <p>Contact</p>
                        <p></p>
                    </div>
                </Link>
            </nav>
        </div>
    );
};

export default Header;