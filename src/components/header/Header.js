import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../img/1.png';
import Img2 from '../img/2.webp';

export default function Header()
{
    const nav = ['Szkoła', 'Strefa ucznia', 'Strefa rodzica', 'Kontakt', ]
    return(
        <div>
            <header className='mt-4 d-flex justify-content-center'>
                <img src={Img1} alt="godło" className='pe-5 img-lg img_size'/>
                <h1>Szkoła Podstawowa im. Orląt Lwowskich w Nowinach </h1>
                <img src={Img2} alt="logo-szkoły" className='ps-5 img_size'/>
            </header>
        </div>
    );
}