import Link from 'next/link';
import React, { useState } from 'react';
import MessageBox from './profile/MessageBox';

const Header = ({ cate}) => {
    const [displayMessageBox, setDisplayMessageBox] = useState(false)

    const closeMessageBox = () => {
        document.getElementById("messageBox").style.animation = "messageBoxOff 0.3s both"
        setTimeout(() => {
            setDisplayMessageBox(false)
        }, 300)
    }

    const handleMessage = () => {
        if(displayMessageBox == true) {
            closeMessageBox()
        } else {
            setDisplayMessageBox(true)
        }
    }

    return (
        <>
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

                <div onClick={handleMessage} className={displayMessageBox ? "lien lien--actif" : "lien"}>
                    <i class="fa-solid fa-comment"></i>
                    <p>Contact</p>
                    <p></p>
                </div>
            </nav>
        </div>

        {
            displayMessageBox && <MessageBox setDisplayMessageBox={setDisplayMessageBox} displayMessageBox={displayMessageBox}/> 
        }
        </>
    );
};

export default Header;