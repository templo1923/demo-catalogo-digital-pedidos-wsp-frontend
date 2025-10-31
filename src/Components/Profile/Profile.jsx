import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import './Profile.css'
import { Link as Anchor } from 'react-router-dom';
import baseURL from '../url';
import ShareWeb from '../ShareWeb/ShareWeb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'; // Ícono para productos

export default function Profile() {
    const [tienda, setTienda] = useState({}); // Cambiado a objeto para evitar errores

    useEffect(() => {
        cargarTienda();
    }, []);

    const cargarTienda = () => {
        fetch(`${baseURL}/tiendaGet.php`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                // Aseguramos que 'tienda' sea un objeto, incluso si la respuesta está vacía
                setTienda(data.tienda[0] || {});
            })
            .catch(error => console.error('Error al cargar datos de la tienda:', error));
    };

    return (
        <div className='profileContain'>
            {tienda?.imagen1 ? (
                <img src={tienda?.imagen1} alt="logo" />
            ) : (
                <img src={logo} alt="logo" />
            )}

            <h2>{tienda.nombre}</h2>

            <div className='profileText'>
                <p>{tienda.eslogan}</p>
                {/* --- ENLACE AÑADIDO --- */}
                {/* Se agrega el enlace a "Productos" como en la referencia */}
                <Anchor to={`/productos`} >
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>Todos Los Productos</span>
                </Anchor>
                <Anchor to={`http://maps.google.com/?q=${encodeURIComponent(tienda.direccion)}`} target="_blank">{tienda.direccion}</Anchor>
                
                <div className='socials'>
                    <Anchor to={tienda.instagram} target="_blank"><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={`https://wa.me/${tienda.telefono}`} target="_blank"><i className='fa fa-whatsapp'></i></Anchor>
                    <Anchor to={tienda.facebook} target="_blank"><i className='fa fa-facebook'></i></Anchor>
                </div>
            </div>

            <ShareWeb />
        </div>
    )
}