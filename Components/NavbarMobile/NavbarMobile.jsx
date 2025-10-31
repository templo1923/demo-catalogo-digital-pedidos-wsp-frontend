import React, { useState, useEffect } from 'react';
import './NavbarMobile.css';
import { Link as Anchor, useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faShoppingCart, faSearch, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import BtnWhatsapp from '../BtnWhatsapp/BtnWhatsapp'
import Cart from '../Cart/Cart'
import Favoritos from '../Favoritos/Favoritos'
import InputSerach from '../InputSerach/InputSearchs'
export default function NavbarMobile() {
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className='scrolledMobile'>
            <Anchor to={`/`} className={location.pathname === '/' ? 'active' : ''} onClick={closeModal}  >
                <FontAwesomeIcon icon={faHome} />
                <strong>Inicio</strong>

            </Anchor>
            <Cart />
            <button to={`/`} className='plus'>
                < BtnWhatsapp />
            </button>
            <Favoritos />
            <InputSerach />


        </section>
    );
}
