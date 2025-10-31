import React, { useState, useEffect } from 'react';
import Nabvar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import Footer from '../Components/Footer/Footer'
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp'
import Cart from '../Components/Cart/Cart'
import TitleMeta from '../Components/TitleMeta/TitleMeta';
export default function IndexLayout() {



    const isScreenLarge = useMediaQuery('(min-width: 1024px)');
    return (
        <div >
            <TitleMeta />
            {isScreenLarge ?
                <>
                    <Nabvar />
                    <Outlet />
                    <Footer />
                    <BtnWhatsapp />
                    <Cart />
                </> :
                <>

                    <Outlet />
                    <Footer />
                    <Cart />
                </>}

            <div className='espaciobg2'>

            </div>

        </div>
    );
}
